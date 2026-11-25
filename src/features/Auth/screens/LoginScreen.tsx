import { TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../../shared/components/Button/Button";
import Container from "../../../shared/components/Container/Container";
import { useEffect, useState } from "react";
import { request } from "../../../shared/api/client";
import { loadTokens, saveTokens } from "../tokenStorage";
import { useAuth } from "../context/AuthContext";

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { login, logout } = useAuth();

  const onLoginHandler = async () => {
    login(email, password);
  };

  const onLogoutHandler = async () => {
    logout();
  };

  return (
    <SafeAreaView>
      <Container>
        <TextInput
          placeholder="login"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          placeholder="password" 
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Sign in" onPress={onLoginHandler} />
        <Button title="Log out" onPress={onLogoutHandler} />
      </Container>
    </SafeAreaView>
  );
};

export default LoginScreen;
