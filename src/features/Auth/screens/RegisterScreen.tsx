import { TextInput } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../../shared/components/Button/Button";
import Container from "../../../shared/components/Container/Container";
import { useState } from "react";
import { request } from "../../../shared/api/client";

const RegisterScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onRegisterHandler = async () => {
    const a = await request('/auth/register', {
      method: 'POST',
      body: { email, password }
    });
    console.log(a);
  }

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
        <Button title="register" onPress={onRegisterHandler} />
      </Container>
    </SafeAreaView>
  );
};

export default RegisterScreen;
