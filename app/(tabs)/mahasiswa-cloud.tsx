/**
 * mahasiswa-cloud.tsx — CRUD tabel public.mahasiswa dari Supabase.
 * Route: /(tabs)/mahasiswa-cloud
 */

import { useFocusEffect } from '@react-navigation/native';
import { useCallback, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import {
  ActivityIndicator,
  Alert,
  Modal,
  Pressable,
  RefreshControl,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';

import { isSupabaseConfigured, supabase } from '@/lib/supabase';

type MahasiswaRow = {
  id: string;
  nim: string;
  nama: string;
  prodi: string;
  kelas: string | null;
};

export default function MahasiswaCloudScreen() {
  const [rows, setRows] = useState<MahasiswaRow[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // State Fitur CRUD
  const [modalVisible, setModalVisible] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [form, setForm] = useState({
    nim: '',
    nama: '',
    prodi: '',
    kelas: '',
  });

  const { width } = useWindowDimensions();
  const insets = useSafeAreaInsets();
  const isNarrow = width < 420;
  const padH = Math.max(16, Math.min(24, width * 0.045));

  const loadData = useCallback(async () => {
    if (!supabase) return;
    setError(null);
    const { data, error: qErr } = await supabase
      .from('mahasiswa')
      .select('*')
      .order('nim', { ascending: true });

    if (qErr) {
      setError(qErr.message);
    } else {
      setRows((data as MahasiswaRow[]) ?? []);
    }
    setLoading(false);
    setRefreshing(false);
  }, []);

  useFocusEffect(
    useCallback(() => {
      setLoading(true);
      loadData();
    }, [loadData])
  );

  const onRefresh = () => {
    setRefreshing(true);
    loadData();
  };

  // ================= LOGIKA CRUD =================

  const openAdd = () => {
    setIsEdit(false);
    setForm({ nim: '', nama: '', prodi: '', kelas: '' });
    setModalVisible(true);
  };

  const openEdit = (m: MahasiswaRow) => {
    setIsEdit(true);
    setSelectedId(m.id);
    setForm({
      nim: m.nim,
      nama: m.nama,
      prodi: m.prodi,
      kelas: m.kelas ?? '',
    });
    setModalVisible(true);
  };

  const handleSave = async () => {
    if (!supabase) return;

    if (isEdit && selectedId) {
      await supabase.from('mahasiswa').update(form).eq('id', selectedId);
    } else {
      await supabase.from('mahasiswa').insert([form]);
    }

    setModalVisible(false);
    loadData();
  };

  const handleDelete = (id: string) => {
    Alert.alert('Konfirmasi', 'Yakin ingin menghapus data ini?', [
      { text: 'Batal' },
      {
        text: 'Hapus',
        style: 'destructive',
        onPress: async () => {
          await supabase?.from('mahasiswa').delete().eq('id', id);
          loadData();
        },
      },
    ]);
  };

  const configured = isSupabaseConfigured();

  return (
    <SafeAreaView style={styles.container} edges={['bottom']}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={[
          styles.content,
          { paddingHorizontal: padH, paddingBottom: 32 + insets.bottom },
        ]}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} enabled={configured} />
        }
        showsVerticalScrollIndicator={false}>
        
        {/* HEADER SECTION DENGAN BUTTON TAMBAH */}
        <View style={styles.headerContainer}>
          <View style={{ flex: 1 }}>
            <Text style={styles.title}>Data Mahasiswa (Cloud)</Text>
            <Text style={styles.subtitle}>
              Data dari tabel <Text style={styles.mono}>public.mahasiswa</Text> di Supabase
            </Text>
          </View>
          {configured && (
            <Pressable 
              style={({ pressed }) => [styles.btnAdd, pressed && styles.btnPressed]}
              onPress={openAdd}>
              <Ionicons name="add" size={26} color="#fff" />
            </Pressable>
          )}
        </View>

        {!configured ? (
          <Text style={styles.errText}>
            Tambahkan URL dan anon key ke <Text style={styles.mono}>.env</Text>, lalu restart Expo.
          </Text>
        ) : null}

        {loading && !refreshing ? (
          <View style={styles.centerBox}>
            <ActivityIndicator size="large" color="#0a7ea4" />
            <Text style={styles.muted}>Memuat data…</Text>
          </View>
        ) : null}

        {!loading && configured && !error && (
          <Text style={styles.count}>Total {rows.length} mahasiswa</Text>
        )}

        {/* MODE CARD (MOBILE) */}
        {rows.length > 0 && isNarrow && (
          <View style={styles.cardList}>
            {rows.map((m, index) => (
              <View key={m.id} style={styles.card}>
                <View style={styles.cardRow}>
                  <Text style={styles.cardLabel}>No</Text>
                  <Text style={styles.cardValue}>{index + 1}</Text>
                </View>
                <View style={styles.cardRow}>
                  <Text style={styles.cardLabel}>NIM</Text>
                  <Text style={styles.cardValue}>{m.nim}</Text>
                </View>
                <View style={styles.cardRow}>
                  <Text style={styles.cardLabel}>Nama</Text>
                  <Text style={[styles.cardValue, styles.cardValueBold]}>{m.nama}</Text>
                </View>
                <View style={styles.cardRow}>
                  <Text style={styles.cardLabel}>Prodi</Text>
                  <Text style={styles.cardValue}>{m.prodi}</Text>
                </View>
                <View style={styles.cardRow}>
                  <Text style={styles.cardLabel}>Kelas</Text>
                  <Text style={styles.cardValue}>{m.kelas ?? '—'}</Text>
                </View>

                {/* ACTION BUTTONS DI CARD */}
                <View style={styles.cardActions}>
                  <Pressable 
                    onPress={() => openEdit(m)}
                    style={({ pressed }) => [styles.btnAction, pressed && styles.btnPressed]}>
                    <Ionicons name="pencil" size={16} color="#0a7ea4" />
                    <Text style={styles.btnActionTextEdit}>Edit</Text>
                  </Pressable>
                  <Pressable 
                    onPress={() => handleDelete(m.id)}
                    style={({ pressed }) => [styles.btnAction, pressed && styles.btnPressed]}>
                    <Ionicons name="trash-outline" size={16} color="#b71c1c" />
                    <Text style={styles.btnActionTextDelete}>Hapus</Text>
                  </Pressable>
                </View>
              </View>
            ))}
          </View>
        )}

        {/* MODE TABEL (WIDE) */}
        {!isNarrow && rows.length > 0 && (
          <>
            <View style={[styles.row, styles.headerRow]}>
              <Text style={[styles.cell, styles.cellNo, styles.headerText]}>No</Text>
              <Text style={[styles.cell, styles.cellNim, styles.headerText]}>NIM</Text>
              <Text style={[styles.cell, styles.cellNama, styles.headerText]}>Nama</Text>
              <Text style={[styles.cell, styles.cellProdi, styles.headerText]}>Prodi</Text>
              <Text style={[styles.cell, styles.cellKelas, styles.headerText]}>Kelas</Text>
              <Text style={[styles.cell, styles.cellAksi, styles.headerText]}>Aksi</Text>
            </View>
            {rows.map((m, index) => (
              <View key={m.id} style={styles.row}>
                <Text style={[styles.cell, styles.cellNo]}>{index + 1}</Text>
                <Text style={[styles.cell, styles.cellNim]}>{m.nim}</Text>
                <Text style={[styles.cell, styles.cellNama]}>{m.nama}</Text>
                <Text style={[styles.cell, styles.cellProdi]}>{m.prodi}</Text>
                <Text style={[styles.cell, styles.cellKelas]}>{m.kelas ?? '—'}</Text>
                <View style={[styles.cell, styles.cellAksi, { flexDirection: 'row', gap: 10 }]}>
                  <Pressable onPress={() => openEdit(m)}>
                    <Ionicons name="pencil" size={18} color="#0a7ea4" />
                  </Pressable>
                  <Pressable onPress={() => handleDelete(m.id)}>
                    <Ionicons name="trash" size={18} color="#b71c1c" />
                  </Pressable>
                </View>
              </View>
            ))}
          </>
        )}
      </ScrollView>

      {/* MODAL FORM CRUD */}
      <Modal visible={modalVisible} animationType="fade" transparent>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>
              {isEdit ? 'Edit' : 'Tambah'} Mahasiswa
            </Text>

            <View style={styles.formGroup}>
              <Text style={styles.label}>NIM</Text>
              <TextInput
                placeholder="Masukkan NIM"
                style={styles.input}
                value={form.nim}
                onChangeText={(v) => setForm({ ...form, nim: v })}
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Nama Lengkap</Text>
              <TextInput
                placeholder="Masukkan Nama"
                style={styles.input}
                value={form.nama}
                onChangeText={(v) => setForm({ ...form, nama: v })}
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Program Studi</Text>
              <TextInput
                placeholder="Masukkan Prodi"
                style={styles.input}
                value={form.prodi}
                onChangeText={(v) => setForm({ ...form, prodi: v })}
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Kelas</Text>
              <TextInput
                placeholder="Masukkan Kelas"
                style={styles.input}
                value={form.kelas}
                onChangeText={(v) => setForm({ ...form, kelas: v })}
              />
            </View>

            <View style={styles.modalFooter}>
              <Pressable 
                style={styles.btnCancel} 
                onPress={() => setModalVisible(false)}>
                <Text style={styles.btnCancelText}>Batal</Text>
              </Pressable>
              <Pressable 
                style={styles.btnSave} 
                onPress={handleSave}>
                <Text style={styles.btnSaveText}>Simpan</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f8f9fa' },
  scroll: { flex: 1 },
  content: { paddingTop: 20 },
  headerContainer: { flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 6 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#1a1a1a', marginBottom: 6 },
  subtitle: { fontSize: 15, color: '#5c5c5c', marginBottom: 16 },
  mono: { fontFamily: 'monospace', fontSize: 14, color: '#333' },
  count: { fontSize: 14, color: '#333', marginBottom: 14, fontWeight: '500' },
  muted: { fontSize: 15, color: '#666', marginTop: 8 },
  errText: { fontSize: 15, color: '#b71c1c', marginBottom: 12 },
  centerBox: { paddingVertical: 32, alignItems: 'center' },
  
  // Design Card Original
  cardList: { gap: 12 },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e8e8e8',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
  },
  cardRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  cardLabel: { fontSize: 13, color: '#6c6c6c', flex: 0.4 },
  cardValue: { fontSize: 14, color: '#1a1a1a', flex: 0.6, textAlign: 'right' },
  cardValueBold: { fontWeight: '600' },
  cardActions: { 
    flexDirection: 'row', 
    justifyContent: 'flex-end', 
    gap: 16, 
    marginTop: 8, 
    paddingTop: 12, 
    borderTopWidth: 1, 
    borderTopColor: '#f0f0f0' 
  },
  btnAction: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  btnActionTextEdit: { color: '#0a7ea4', fontWeight: '600', fontSize: 14 },
  btnActionTextDelete: { color: '#b71c1c', fontWeight: '600', fontSize: 14 },

  // Design Tabel Original
  row: { flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#e0e0e0', paddingVertical: 10, paddingHorizontal: 6 },
  headerRow: { backgroundColor: '#0a7ea4', borderBottomColor: '#086890' },
  headerText: { color: '#fff', fontWeight: 'bold' },
  cell: { fontSize: 13, color: '#333' },
  cellNo: { width: 32, textAlign: 'center' },
  cellNim: { width: 68 },
  cellNama: { flex: 1, minWidth: 72 },
  cellProdi: { width: 108 },
  cellKelas: { width: 48, textAlign: 'center' },
  cellAksi: { width: 60, textAlign: 'center' },

  // Button Plus Style
  btnAdd: {
    backgroundColor: '#0a7ea4',
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  btnPressed: { opacity: 0.7 },

  // Modal Styling
  modalOverlay: { flex: 1, backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'center', padding: 20 },
  modalContent: { backgroundColor: '#fff', borderRadius: 16, padding: 20, elevation: 5 },
  modalTitle: { fontSize: 20, fontWeight: 'bold', marginBottom: 20, color: '#1a1a1a', textAlign: 'center' },
  formGroup: { marginBottom: 16 },
  label: { fontSize: 14, fontWeight: '600', color: '#444', marginBottom: 6 },
  input: { borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 12, fontSize: 15, backgroundColor: '#f9f9f9' },
  modalFooter: { flexDirection: 'row', justifyContent: 'flex-end', gap: 12, marginTop: 10 },
  btnCancel: { paddingVertical: 12, paddingHorizontal: 20 },
  btnCancelText: { color: '#666', fontWeight: '600' },
  btnSave: { backgroundColor: '#0a7ea4', paddingVertical: 12, paddingHorizontal: 24, borderRadius: 8 },
  btnSaveText: { color: '#fff', fontWeight: '600' },
});