import { Stack } from "expo-router";
import { StatusBar } from "react-native";
import { useUser } from "../../hooks/useUser";
import GuestOnly from "../../components/auth/GuestOnly";

const AuthLayout = () => {

const { user } = useUser();

if(user){
  console.log(user)
}

  return (
    <GuestOnly>
      <StatusBar style='auto' />
      <Stack screenOptions={{ headerShown: false, animation: 'none'}} />
    </GuestOnly>
  );
};

export default AuthLayout;
