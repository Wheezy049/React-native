import { StyleSheet, Text, View, Image } from "react-native";
import { Link } from "expo-router";
import ThemedView from "../components/ThemedView";
import ThemeLogo from "../components/ThemeLogo";
import Spacer from "../components/Spacer";
import ThemedText from "../components/ThemedText";

const index = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemeLogo style={styles.img} />
      <Spacer height={20} />

      <ThemedText style={[styles.title, { color: "#000" }]} title={true}>Firstmobile</ThemedText>
      <Spacer height={30} />

      <ThemedText>Hello, world!</ThemedText>
      <Spacer height={20} />

      <View style={styles.card}>
        <ThemedText>This is a CARD</ThemedText>
      </View>

      <Link style={styles.Link} href="/login">
        <ThemedText>Login Page </ThemedText>
      </Link>

      <Link style={styles.Link} href="/register">
        <ThemedText>Register Page</ThemedText>
      </Link>

      <Link style={styles.Link} href="/profile">
        <ThemedText>Profile Page</ThemedText>
      </Link>
    </ThemedView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: "bold",
    fontSize: 18,
  },
  card: {
    backgroundColor: "#eee",
    padding: 20,
    borderRadius: 5,
    boxShadow: "4px 4px rgba(0,0,0,0.1)",
  },
  Link: {
    marginVertical: 20,
  },
});
