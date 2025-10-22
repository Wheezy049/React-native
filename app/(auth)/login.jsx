import { Keyboard, StyleSheet, Text, TouchableWithoutFeedback } from "react-native";
import ThemedView from "../../components/ThemedView";
import Spacer from "../../components/Spacer";
import ThemedText from "../../components/ThemedText";
import { Link } from "expo-router";
import { Colors } from "../../constants/Colors";
import ThemedButton from "../../components/ThemedButton";
import ThemeTextInput from "../../components/ThemeTextInput";
import { useState } from "react";
import { useUser } from "../../hooks/useUser";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const { login } = useUser()

  const handleSubmit = async () => {
    setError(null)
    console.log("login form submitted", email, password);
    try {
      await login(email, password)
    } catch (error) {
       setError(error.message)
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <ThemedView style={styles.container}>
      <Spacer />

      <ThemedText title={true} style={styles.title}>
        {" "}
        Login to your account
      </ThemedText>

      <ThemeTextInput
        value={email}
        onChangeText={setEmail}
        style={{ width: "80%", marginBottom: 20 }}
        keyboardType="email-address"
        placeholder="Email"
      />
      <ThemeTextInput
        value={password}
        onChangeText={setPassword}
        style={{ width: "80%", marginBottom: 10 }}
        placeholder="Password"
        secureTextEntry
      />
      { error && <Text style={styles.error}>{error}</Text> }


      <ThemedButton onPress={handleSubmit}>
        <Text style={{ color: "#f2f2f2" }}>Login</Text>
      </ThemedButton>
      
      <Spacer height={10} />

      <ThemedText style={{ textAlign: "center" }}>
        Don't have an account? <Link href="/register">Register</Link>
      </ThemedText>
    </ThemedView>
    </TouchableWithoutFeedback>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 18,
    marginBottom: 30,
  },
  btn: {
    backgroundColor: Colors.primary,
    padding: 15,
    borderRadius: 5,
  },
  pressed: {
    opacity: 0.8,
  },
  error: {
    color: Colors.warning
  }
});
