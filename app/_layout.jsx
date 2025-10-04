import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import { Slot, Stack } from 'expo-router'
import { Colors } from '../constants/Colors'
import { StatusBar } from 'expo-status-bar'

const RootLayout = () => {

  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <>
    <StatusBar value='auto' />
    <View style={{ flex: 1 }}>
     <View style={{ flex: 1 }}> 
      {/* <Stack /> */}
      <Stack screenOptions={{
        headerStyle: { backgroundColor: theme.navBackground },
        headerTintColor: theme.text
      }}>
        <Stack.Screen name="index" options={{ title: 'Home' }} />
        <Stack.Screen name="about" options={{ title: 'About' }} />
        <Stack.Screen name="contact" options={{ title: 'Contact', headerShown: false }} />
      </Stack>
      </View>
      <Text style={{ textAlign: 'center', marginBottom: 20, color: '#000', backgroundColor: 'yellow' }}>Footer</Text>
    </View>
    </>
  )
}

export default RootLayout

const styles = StyleSheet.create({})