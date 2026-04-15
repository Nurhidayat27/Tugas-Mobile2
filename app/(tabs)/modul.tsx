import { View, Text, StyleSheet, ScrollView, SafeAreaView, StatusBar } from "react-native";
import { useRouter } from "expo-router";
import ModulCard from "../../components/modul/ModulCard";

export default function ModulScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" />
      <ScrollView 
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.header}>
          <Text style={styles.title}>📚 Modul Belajar</Text>
          <Text style={styles.subtitle}>Selesaikan semua materi untuk menguasai React Native</Text>
        </View>

        <View style={styles.cardContainer}>
          <ModulCard
            title="Modul 1"
            desc="Pengenalan Expo dan React Native"
            progress={20}
            onPress={() => router.push("/modul/modul1")}
          />

          <ModulCard
            title="Modul 2"
            desc="Navigation menggunakan Expo Router"
            progress={0}
            onPress={() => router.push("/modul/modul2")}
          />

          <ModulCard
            title="Modul 3"
            desc="Component dan Layout React Native"
            progress={0}
            onPress={() => router.push("/modul/modul3")}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#F8F9FA", // Warna background yang lebih soft (off-white)
  },
  scrollContent: {
    padding: 24,
  },
  header: {
    marginBottom: 28,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: "#1A1A1A",
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginTop: 4,
    lineHeight: 22,
  },
  cardContainer: {
    gap: 16, // Memberikan jarak antar card secara otomatis
  },
});