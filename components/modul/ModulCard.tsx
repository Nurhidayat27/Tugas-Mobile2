import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ModulCard({ title, desc, progress, onPress }: any) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.desc}>{desc}</Text>

      <View style={styles.progressBar}>
        <View style={[styles.progress, { width: `${progress}%` }]} />
      </View>

      <Text style={styles.progressText}>{progress}% selesai</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    elevation: 4,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
  },

  desc: {
    marginTop: 5,
    color: "#666",
  },

  progressBar: {
    height: 8,
    backgroundColor: "#eee",
    borderRadius: 10,
    marginTop: 15,
  },

  progress: {
    height: 8,
    backgroundColor: "#4CAF50",
    borderRadius: 10,
  },

  progressText: {
    marginTop: 5,
    fontSize: 12,
    color: "#888",
  },
});