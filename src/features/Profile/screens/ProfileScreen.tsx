import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Button from "../../../shared/components/Button/Button";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen = () => {
  const navigation = useNavigation();

  const onRegisterHandler = () => {
    navigation.navigate('registerScreen');
  }

  const onLoginHandler = () => {
    navigation.navigate('loginScreen');
  }

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Login" onPress={onLoginHandler} />
      <Button title="Register" onPress={onRegisterHandler} />
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});