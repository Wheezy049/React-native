import { StyleSheet, Text, View, useColorScheme } from 'react-native'
import { Link } from 'expo-router'
import { Colors } from '../constants/Colors'
import ThemedText from '../components/ThemedText'

const Contact = () => {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light

  return (
    <View style={[styles.container, { backgroundColor: theme.background}]}>
      <ThemedText style={[styles.title, { color: theme.title}]}>Contact Page</ThemedText>
      <Link style={[styles.Link, { color: theme.primary}]} href='/'><ThemedText>Back Home</ThemedText></Link>
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