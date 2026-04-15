import React from 'react';
import { StyleSheet, View, Dimensions, ScrollView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';

// Impor komponen dasar lo
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* --- HEADER BIRU (PROFIL) --- */}
        <View style={styles.headerBlue}>
          <View style={styles.profileRow}>
            {/* Pengganti Foto Profil pakai Ikon biar nggak error */}
            <View style={styles.avatarCircle}>
              <Ionicons name="person" size={40} color="#2040c0" />
            </View>
            <View>
              <ThemedText style={styles.profileName}>NURHIDAYAT</ThemedText>
              <ThemedText style={styles.profileMajor}>S1 - Informatika</ThemedText>
            </View>
          </View>

          <View style={styles.dosenPill}>
            <ThemedText style={styles.dosenLabel}>Dosen PA/Wali: </ThemedText>
            <ThemedText style={styles.dosenName}>FEBRI S.Kom., M.Kom.</ThemedText>
          </View>
        </View>

        {/* --- KONTEN UTAMA (LATAR ABU) --- */}
        <View style={styles.contentBody}>
          
          {/* 1. KARTU JADWAL */}
          <View style={styles.jadwalCard}>
            <View style={styles.cardHeader}>
              <Ionicons name="calendar" size={18} color="#4db6ac" />
              <ThemedText style={styles.cardHeaderText}>Jadwal Hari Ini</ThemedText>
            </View>
            <View style={styles.jadwalRow}>
              <View style={styles.dateBox}>
                <ThemedText style={styles.dateNum}>15</ThemedText>
                <ThemedText style={styles.dateMonth}>APR</ThemedText>
              </View>
              <View style={styles.classDetail}>
                <ThemedText style={styles.className}>PEMROGRAMAN MOBILE II</ThemedText>
                <ThemedText style={styles.classTime}>13:00 - 15:30</ThemedText>
                <ThemedText style={styles.classDosen}>EDI SUHERLAN S.Kom.</ThemedText>
              </View>
            </View>
          </View>

          {/* 2. GRID MENU (8 IKON) */}
          <View style={styles.menuGrid}>
            <View style={styles.row}>
              <MenuIcon icon="calendar-outline" label="Presensi" color="#ff9800" />
              <MenuIcon icon="book-outline" label="Tugas" color="#03a9f4" />
              <MenuIcon icon="wallet-outline" label="Biaya" color="#7e57c2" />
              <MenuIcon icon="layers-outline" label="KRS" color="#26a69a" />
            </View>
            <View style={styles.row}>
              <MenuIcon icon="time-outline" label="Jadwal" color="#ec407a" />
              <MenuIcon icon="megaphone-outline" label="Kegiatan" color="#ff9800" />
              <MenuIcon icon="document-text-outline" label="Nilai" color="#1e88e5" />
              <MenuIcon icon="chatbubbles-outline" label="Kuesioner" color="#7e57c2" />
            </View>
          </View>

          {/* 3. DUA KARTU BAWAH */}
          <View style={styles.bottomRow}>
            <View style={styles.smallCard}>
              <ThemedText style={styles.smallCardTitle}>Tugas Kuliah</ThemedText>
              <View style={styles.emptyBox}>
                <Ionicons name="document-outline" size={30} color="#ccc" />
                <ThemedText style={styles.emptyText}>Belum ada Tugas</ThemedText>
              </View>
            </View>

            <View style={styles.smallCard}>
              <ThemedText style={styles.smallCardTitle}>Tagihan</ThemedText>
              <ThemedText style={styles.tagihanLabel}>Total Tunggakan:</ThemedText>
              <ThemedText style={styles.tagihanValue}>Rp 1.065.000</ThemedText>
            </View>
          </View>

          {/* 4. LAPORAN KENDALA */}
          <View style={styles.reportBox}>
            <ThemedText style={styles.reportText}>Ada kendala dengan aplikasi?</ThemedText>
            <ThemedText style={styles.reportLink}>Laporkan kendala disini</ThemedText>
          </View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Komponen Kecil buat Ikon Menu
function MenuIcon({ icon, label, color }: { icon: any, label: string, color: string }) {
  return (
    <View style={styles.menuItem}>
      <View style={[styles.iconCircle, { backgroundColor: color }]}>
        <Ionicons name={icon} size={24} color="#fff" />
      </View>
      <ThemedText style={styles.menuLabel}>{label}</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#2040c0' },
  headerBlue: { padding: 25, backgroundColor: '#2040c0' },
  profileRow: { flexDirection: 'row', alignItems: 'center', gap: 15, marginBottom: 20 },
  avatarCircle: { width: 60, height: 60, borderRadius: 30, backgroundColor: '#fff', justifyContent: 'center', alignItems: 'center' },
  profileName: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  profileMajor: { color: '#abc1ff', fontSize: 14 },
  dosenPill: { backgroundColor: 'rgba(255,255,255,0.2)', padding: 12, borderRadius: 25, flexDirection: 'row' },
  dosenLabel: { color: '#eee', fontSize: 12 },
  dosenName: { color: '#fff', fontSize: 12, fontWeight: 'bold' },

  contentBody: { backgroundColor: '#f2f5f8', borderTopLeftRadius: 30, borderTopRightRadius: 30, padding: 20, minHeight: 600 },
  
  // Jadwal
  jadwalCard: { backgroundColor: '#fff', borderRadius: 15, padding: 15, borderWidth: 2, borderColor: '#4db6ac', marginBottom: 20 },
  cardHeader: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 10 },
  cardHeaderText: { fontWeight: 'bold', fontSize: 14 },
  jadwalRow: { flexDirection: 'row', gap: 15 },
  dateBox: { alignItems: 'center', borderRightWidth: 1, borderRightColor: '#eee', paddingRight: 15 },
  dateNum: { fontSize: 24, fontWeight: 'bold' },
  dateMonth: { fontSize: 12, color: '#666' },
  classDetail: { flex: 1, gap: 2 },
  className: { fontSize: 13, fontWeight: 'bold' },
  classTime: { fontSize: 12, color: '#888' },
  classDosen: { fontSize: 12, color: '#ff9800', fontWeight: 'bold' },

  // Grid
  menuGrid: { backgroundColor: '#fff', borderRadius: 20, padding: 15, gap: 20, elevation: 2 },
  row: { flexDirection: 'row', justifyContent: 'space-around' },
  menuItem: { alignItems: 'center', width: width / 5 },
  iconCircle: { width: 50, height: 50, borderRadius: 25, justifyContent: 'center', alignItems: 'center', marginBottom: 5 },
  menuLabel: { fontSize: 11, textAlign: 'center', color: '#444' },

  // Bottom Cards
  bottomRow: { flexDirection: 'row', gap: 15, marginTop: 20 },
  smallCard: { flex: 1, backgroundColor: '#fff', borderRadius: 15, padding: 15, minHeight: 120 },
  smallCardTitle: { fontSize: 14, fontWeight: 'bold', marginBottom: 10 },
  emptyBox: { alignItems: 'center', justifyContent: 'center', flex: 1 },
  emptyText: { fontSize: 10, color: '#aaa', marginTop: 5 },
  tagihanLabel: { fontSize: 12, color: '#444' },
  tagihanValue: { fontSize: 14, fontWeight: 'bold', color: '#666', marginTop: 5 },

  reportBox: { marginTop: 30, alignItems: 'center' },
  reportText: { fontSize: 12, color: '#888' },
  reportLink: { fontSize: 12, color: '#2040c0', fontWeight: 'bold', marginTop: 5 }
});