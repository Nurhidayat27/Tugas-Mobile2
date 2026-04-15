import { View, Text, StyleSheet, ScrollView, TouchableOpacity, SafeAreaView } from "react-native";
import { useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Modul2() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container} showsVerticalScrollIndicator={false}>
        
        {/* HEADER */}
        <View style={styles.header}>
          <Text style={styles.moduleBadge}>MODUL 02</Text>
          <Text style={styles.title}>Navigasi Expo Router</Text>
          <View style={styles.underline} />
        </View>

        {/* SECTION 1: KONSEP UTAMA */}
        <View style={styles.card}>
          <View style={styles.row}>
            <Ionicons name="map-outline" size={24} color="#E67E22" />
            <Text style={styles.sectionTitle}>Konsep File-Based Routing</Text>
          </View>
          <Text style={styles.paragraph}>
            Expo Router menggunakan struktur folder <Text style={styles.bold}>app/</Text> untuk menentukan rute navigasi secara otomatis. Tidak perlu lagi mendefinisikan rute secara manual satu per satu.
          </Text>
          <View style={styles.infoBox}>
            <Text style={styles.infoText}>📍 <Text style={styles.bold}>app/index.js</Text> → Halaman utama ( / )</Text>
            <Text style={styles.infoText}>📍 <Text style={styles.bold}>app/profile.js</Text> → Halaman profil ( /profile )</Text>
          </View>
        </View>

        {/* SECTION 2: JENIS NAVIGASI */}
        <View style={styles.card}>
          <View style={styles.row}>
            <Ionicons name="layers-outline" size={24} color="#3498DB" />
            <Text style={styles.sectionTitle}>Jenis Navigasi Utama</Text>
          </View>
          
          <View style={styles.navType}>
            <Text style={styles.bold}>1. Stack Navigation</Text>
            <Text style={styles.desc}>Halaman baru menumpuk di atas halaman lama (ada tombol 'Back').</Text>
          </View>

          <View style={styles.navType}>
            <Text style={styles.bold}>2. Tabs Navigation</Text>
            <Text style={styles.desc}>Navigasi di bagian bawah layar (seperti Instagram atau WhatsApp).</Text>
          </View>
        </View>

        {/* SECTION 3: CARA PINDAH HALAMAN */}
        <View style={styles.card}>
          <View style={styles.row}>
            <Ionicons name="code-slash" size={24} color="#9B59B6" />
            <Text style={styles.sectionTitle}>Cara Pindah Halaman</Text>
          </View>
          <Text style={styles.paragraph}>Gunakan hook <Text style={styles.codeTextInline}>useRouter</Text> untuk berpindah antar screen:</Text>
          
          <View style={styles.codeBlock}>
            <Text style={styles.codeText}>
              {`import { useRouter } from "expo-router";\n\n`}
              {`const router = useRouter();\n\n`}
              {`// Pindah ke halaman profile\n`}
              {`router.push("/profile");`}
            </Text>
          </View>
        </View>

        {/* FOOTER NAVIGATION */}
        <View style={styles.footerRow}>
          <TouchableOpacity 
            style={styles.backButton} 
            onPress={() => router.back()}
          >
            <Ionicons name="arrow-back" size={20} color="#4630EB" />
            <Text style={styles.backButtonText}>Kembali</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.nextButton} 
            onPress={() => router.push("/modul/modul3")}
          >
            <Text style={styles.nextButtonText}>Modul 3</Text>
            <Ionicons name="arrow-forward" size={20} color="#FFF" />
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "#F8F9FA" },
  container: { padding: 20 },
  header: { marginBottom: 25 },
  moduleBadge: { color: "#4630EB", fontWeight: "bold", fontSize: 12, letterSpacing: 1 },
  title: { fontSize: 28, fontWeight: "800", color: "#1A202C" },
  underline: { height: 4, width: 50, backgroundColor: "#4630EB", marginTop: 8, borderRadius: 2 },
  
  card: {
    backgroundColor: "#FFF",
    padding: 20,
    borderRadius: 16,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#F0F0F0",
    shadowColor: "#000",
    shadowOpacity: 0.02,
    shadowRadius: 10,
    elevation: 2,
  },
  row: { flexDirection: 'row', alignItems: 'center', marginBottom: 15, gap: 10 },
  sectionTitle: { fontSize: 18, fontWeight: "bold", color: "#2D3748" },
  paragraph: { fontSize: 15, color: "#4A5568", lineHeight: 24, marginBottom: 10 },
  bold: { fontWeight: "bold", color: "#1A202C" },
  
  infoBox: { backgroundColor: "#FFF9F2", padding: 15, borderRadius: 12, marginTop: 5 },
  infoText: { fontSize: 14, color: "#D35400", marginBottom: 5, fontFamily: 'monospace' },
  
  navType: { marginBottom: 15, paddingLeft: 10, borderLeftWidth: 3, borderLeftColor: "#3498DB" },
  desc: { fontSize: 14, color: "#718096", marginTop: 2 },

  codeTextInline: { color: "#D63384", backgroundColor: "#F8F9FA", paddingHorizontal: 4, borderRadius: 4, fontFamily: 'monospace' },
  codeBlock: { backgroundColor: "#1E1E1E", padding: 16, borderRadius: 12, marginTop: 10 },
  codeText: { color: "#9CDCFE", fontFamily: "monospace", fontSize: 12, lineHeight: 18 },

  footerRow: { flexDirection: 'row', gap: 12, marginTop: 10 },
  nextButton: {
    flex: 2,
    backgroundColor: "#4630EB",
    padding: 18,
    borderRadius: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
  nextButtonText: { color: "#FFF", fontSize: 16, fontWeight: "bold" },
  backButton: {
    flex: 1,
    backgroundColor: "#FFF",
    padding: 18,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#4630EB",
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  backButtonText: { color: "#4630EB", fontSize: 16, fontWeight: "bold" },
});