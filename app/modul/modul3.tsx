import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, Alert } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Modul3() {
  const router = useRouter();

  const handleFinish = () => {
    Alert.alert(
      "Kursus Selesai! 🎉",
      "Selamat! Kamu telah menyelesaikan semua materi dasar React Native. Siap untuk membangun aplikasimu sendiri?",
      [
        {
          text: "Selesai & Terimakasih",
          onPress: () => router.replace("/"), // Mengganti stack agar tidak bisa back ke modul lagi
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.moduleBadge}>MODUL 03</Text>
          <Text style={styles.title}>Component & Layout</Text>
          <View style={styles.underline} />
        </View>

        {/* SECTION 1: CORE COMPONENTS */}
        <View style={styles.card}>
          <View style={styles.row}>
            <Ionicons name="cube-outline" size={24} color="#E74C3C" />
            <Text style={styles.sectionTitle}>Komponen Dasar</Text>
          </View>
          <Text style={styles.paragraph}>
            React Native tidak menggunakan HTML. Sebagai gantinya, kita menggunakan komponen native yang sudah dioptimalkan:
          </Text>
          
          <View style={styles.componentList}>
            <View style={styles.compItem}>
              <Text style={styles.compTag}>{"<View>"}</Text>
              <Text style={styles.compDesc}>Seperti {'<div>'}, digunakan sebagai wadah pembungkus elemen lain.</Text>
            </View>
            <View style={styles.compItem}>
              <Text style={styles.compTag}>{"<Text>"}</Text>
              <Text style={styles.compDesc}>Wajib digunakan untuk semua jenis tulisan/teks.</Text>
            </View>
            <View style={styles.compItem}>
              <Text style={styles.compTag}>{"<Image>"}</Text>
              <Text style={styles.compDesc}>Untuk menampilkan aset gambar (lokal maupun network).</Text>
            </View>
          </View>
        </View>

        {/* SECTION 2: FLEXBOX LAYOUT */}
        <View style={styles.card}>
          <View style={styles.row}>
            <Ionicons name="apps-outline" size={24} color="#27AE60" />
            <Text style={styles.sectionTitle}>Layouting (Flexbox)</Text>
          </View>
          <Text style={styles.paragraph}>
            Di React Native, <Text style={styles.bold}>Flexbox</Text> adalah cara utama menyusun elemen. Berbeda dengan web, arah default-nya adalah <Text style={styles.bold}>Vertical (Column)</Text>.
          </Text>

          <View style={styles.flexGrid}>
            <View style={styles.flexBoxInfo}>
              <Text style={styles.flexTitle}>flexDirection</Text>
              <Text style={styles.smallDesc}>Menentukan arah elemen (row atau column).</Text>
            </View>
            <View style={styles.flexBoxInfo}>
              <Text style={styles.flexTitle}>justifyContent</Text>
              <Text style={styles.smallDesc}>Mengatur perataan di sumbu utama (main axis).</Text>
            </View>
            <View style={styles.flexBoxInfo}>
              <Text style={styles.flexTitle}>alignItems</Text>
              <Text style={styles.smallDesc}>Mengatur perataan di sumbu silang (cross axis).</Text>
            </View>
          </View>
        </View>

        {/* SECTION 3: CONTOH IMPLEMENTASI */}
        <View style={styles.card}>
          <View style={styles.row}>
            <Ionicons name="code-slash" size={24} color="#2980B9" />
            <Text style={styles.sectionTitle}>Contoh Kode Layout</Text>
          </View>
          <Text style={styles.paragraph}>Cara membuat elemen berjejer ke samping (horizontal):</Text>
          
          <View style={styles.codeBlock}>
            <Text style={styles.codeText}>
              {`<View style={{ flexDirection: 'row' }}>\n`}
              {`  <Text>Item 1</Text>\n`}
              {`  <Text>Item 2</Text>\n`}
              {`</View>`}
            </Text>
          </View>
        </View>

        {/* FOOTER NAVIGATION */}
        <View style={styles.footerRow}>
          <TouchableOpacity 
            style={styles.backButton} 
            onPress={() => router.back()}
            activeOpacity={0.7}
          >
            <Ionicons name="arrow-back" size={20} color="#4630EB" />
            <Text style={styles.backButtonText}>Kembali</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.finishButton} 
            onPress={handleFinish}
            activeOpacity={0.8}
          >
            <Text style={styles.finishButtonText}>Selesai</Text>
            <Ionicons name="checkmark-circle" size={22} color="#FFF" />
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { 
    flex: 1, 
    backgroundColor: "#F4F7F6" 
  },
  container: { 
    padding: 20 
  },
  header: { 
    marginBottom: 25 
  },
  moduleBadge: { 
    color: "#4630EB", 
    fontWeight: "bold", 
    fontSize: 12, 
    letterSpacing: 1.5,
    marginBottom: 4 
  },
  title: { 
    fontSize: 28, 
    fontWeight: "800", 
    color: "#1A202C" 
  },
  underline: { 
    height: 4, 
    width: 60, 
    backgroundColor: "#4630EB", 
    marginTop: 8, 
    borderRadius: 2 
  },
  card: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 15,
    elevation: 3,
  },
  row: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 15, 
    gap: 12 
  },
  sectionTitle: { 
    fontSize: 18, 
    fontWeight: "700", 
    color: "#2D3748" 
  },
  paragraph: { 
    fontSize: 15, 
    color: "#4A5568", 
    lineHeight: 24, 
    marginBottom: 15 
  },
  bold: { 
    fontWeight: "bold", 
    color: "#2D3748" 
  },
  componentList: { 
    gap: 12 
  },
  compItem: { 
    backgroundColor: "#F8F9FA", 
    padding: 15, 
    borderRadius: 12, 
    borderLeftWidth: 5, 
    borderLeftColor: "#E74C3C" 
  },
  compTag: { 
    fontFamily: 'monospace', 
    fontWeight: 'bold', 
    color: '#C0392B', 
    fontSize: 15 
  },
  compDesc: { 
    fontSize: 13, 
    color: '#718096', 
    marginTop: 4 
  },
  flexGrid: { 
    marginTop: 5, 
    gap: 10 
  },
  flexBoxInfo: { 
    padding: 12, 
    backgroundColor: '#E8F6EF', 
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#D1EAD9'
  },
  flexTitle: { 
    fontWeight: '700', 
    color: '#27AE60', 
    fontSize: 14 
  },
  smallDesc: { 
    fontSize: 12, 
    color: '#2F855A', 
    marginTop: 2 
  },
  codeBlock: { 
    backgroundColor: "#1A202C", 
    padding: 18, 
    borderRadius: 15 
  },
  codeText: { 
    color: "#63B3ED", 
    fontFamily: "monospace", 
    fontSize: 13, 
    lineHeight: 20 
  },
  footerRow: { 
    flexDirection: 'row', 
    gap: 15, 
    marginTop: 10, 
    marginBottom: 30 
  },
  backButton: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingVertical: 18,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: "#4630EB",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  backButtonText: { 
    color: "#4630EB", 
    fontSize: 16, 
    fontWeight: "bold" 
  },
  finishButton: {
    flex: 2,
    backgroundColor: "#27AE60",
    paddingVertical: 18,
    borderRadius: 18,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    shadowColor: "#27AE60",
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  },
  finishButtonText: { 
    color: "#FFF", 
    fontSize: 16, 
    fontWeight: "bold" 
  },
});