import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import { Link } from 'expo-router'
import { Colors } from '../constants/Colors'

const Contact = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <View style={[styles.container, { backgroundColor: theme.background}]}>
      <Text style={[styles.title, { color: theme.title}]}>Contact Page</Text>
      <Link style={[styles.Link, { color: theme.primary}]} href='/'>Back Home</Link>
    </View>
  )
}

export default Contact

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    },
    Link: {
        marginVertical: 20
    }
})