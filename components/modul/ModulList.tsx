import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function ModulList() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar Modul</Text>

      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push("/modul/modul1")}
      >
        <Text style={styles.text}>Modul 1 - Pengenalan Expo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push("/modul/modul2")}
      >
        <Text style={styles.text}>Modul 2 - Navigation</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.card}
        onPress={() => router.push("/modul/modul3")}
      >
        <Text style={styles.text}>Modul 3 - Component</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#2563EB",
    padding: 20,
    borderRadius: 10,
    marginBottom: 15,
  },
  text: {
    color: "white",
    fontSize: 16,
  },
});