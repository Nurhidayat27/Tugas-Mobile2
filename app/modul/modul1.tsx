import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView, Image } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Modul1() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.moduleBadge}>MODUL 01</Text>
          <Text style={styles.title}>Dasar-Dasar Expo</Text>
          <View style={styles.underline} />
        </View>

        {/* SECTION 1: PENGENALAN */}
        <View style={styles.card}>
          <View style={styles.row}>
            <Ionicons name="bulb" size={24} color="#FFD700" />
            <Text style={styles.sectionTitle}>Apa itu Expo?</Text>
          </View>
          <Text style={styles.paragraph}>
            <Text style={styles.bold}>Expo</Text> adalah sebuah framework dan platform untuk aplikasi React native universal. Ini adalah satu set alat (tools) yang dibangun di atas React Native yang membantu Anda memulai project dengan cepat.
          </Text>
          <Text style={styles.paragraph}>
            Bayangkan React Native adalah <Text style={styles.italic}>mesin</Text>, maka Expo adalah <Text style={styles.italic}>mobil lengkap</Text> yang siap dikendarai tanpa harus merakit ban dan setirnya sendiri.
          </Text>
        </View>

        {/* SECTION 2: INSTALASI */}
        <View style={styles.card}>
          <View style={styles.row}>
            <Ionicons name="download" size={24} color="#4630EB" />
            <Text style={styles.sectionTitle}>Instalasi Expo CLI & Go</Text>
          </View>
          
          <Text style={styles.stepTitle}>Langkah 1: Instal Node.js</Text>
          <Text style={styles.paragraph}>Pastikan laptopmu sudah terinstal Node.js (LTS Version).</Text>

          <Text style={styles.stepTitle}>Langkah 2: Buat Project (CLI)</Text>
          <Text style={styles.paragraph}>Buka terminal/CMD dan ketik perintah berikut:</Text>
          <View style={styles.codeBlock}>
            <Text style={styles.codeText}>npx create-expo-app MyFirstApp</Text>
          </View>

          <Text style={styles.stepTitle}>Langkah 3: Expo Go</Text>
          <Text style={styles.paragraph}>
            Download aplikasi <Text style={styles.bold}>Expo Go</Text> di Play Store atau App Store. Ini digunakan untuk menjalankan aplikasi di HP-mu secara langsung lewat QR Code.
          </Text>
        </View>

        {/* SECTION 3: STRUKTUR PROJECT */}
        <View style={styles.card}>
          <View style={styles.row}>
            <Ionicons name="folder-open" size={24} color="#2ECC71" />
            <Text style={styles.sectionTitle}>Struktur Project</Text>
          </View>
          <Text style={styles.paragraph}>Berikut adalah folder utama dalam project Expo (Router):</Text>
          
          <View style={styles.structureItem}>
            <Text style={styles.folderName}>📁 app/</Text>
            <Text style={styles.folderDesc}>Berisi semua halaman (screens) dan navigasi aplikasi.</Text>
          </View>

          <View style={styles.structureItem}>
            <Text style={styles.folderName}>📁 assets/</Text>
            <Text style={styles.folderDesc}>Tempat menyimpan gambar, icon, dan file statis lainnya.</Text>
          </View>

          <View style={styles.structureItem}>
            <Text style={styles.folderName}>📄 app.json</Text>
            <Text style={styles.folderDesc}>Konfigurasi utama seperti nama app, icon, dan versi.</Text>
          </View>

          <View style={styles.structureItem}>
            <Text style={styles.folderName}>📄 package.json</Text>
            <Text style={styles.folderDesc}>Daftar library (dependencies) yang digunakan project.</Text>
          </View>
        </View>

        {/* NAVIGATION BUTTON */}
        <TouchableOpacity 
          style={styles.nextButton} 
          onPress={() => router.push("/modul/modul2")}
        >
          <Text style={styles.nextButtonText}>Lanjut ke Modul 2</Text>
          <Ionicons name="chevron-forward" size={20} color="#FFF" />
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#F5F7FA" },
  container: { padding: 20 },
  header: { marginBottom: 25 },
  moduleBadge: { color: "#4630EB", fontWeight: "bold", fontSize: 12, letterSpacing: 1 },
  title: { fontSize: 28, fontWeight: "800", color: "#1A202C" },
  underline: { height: 4, width: 50, backgroundColor: "#4630EB", marginTop: 8, borderRadius: 2 },
  
  card: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 15, gap: 10 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", color: "#2D3748" },
  paragraph: { fontSize: 15, color: "#4A5568", lineHeight: 22, marginBottom: 10 },
  bold: { fontWeight: "bold", color: "#1A202C" },
  italic: { fontStyle: "italic" },
  
  stepTitle: { fontSize: 14, fontWeight: "bold", color: "#4630EB", marginTop: 10, marginBottom: 5 },
  codeBlock: { 
    backgroundColor: "#2D3748", 
    padding: 12, 
    borderRadius: 8, 
    marginVertical: 10 
  },
  codeText: { color: "#A0AEC0", fontFamily: "monospace", fontSize: 13 },
  
  structureItem: { 
    paddingVertical: 10, 
    borderBottomWidth: 1, 
    borderBottomColor: "#EDF2F7" 
  },
  folderName: { fontWeight: "bold", color: "#2D3748", fontSize: 14 },
  folderDesc: { color: "#718096", fontSize: 13, marginTop: 2 },

  nextButton: {
    backgroundColor: "#4630EB",
    padding: 18,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    gap: 10,
  },
  nextButtonText: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
});