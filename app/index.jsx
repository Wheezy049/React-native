import { StyleSheet, Text, View, Image } from 'react-native'
import Logo from '../assets/img/vobb-dark.png'
import { Link } from 'expo-router'
import ThemedView from '../components/ThemedView'

const index = () => {
  return (
    <ThemedView style={styles.container}>

     <Image source={Logo} style={styles.img} />

      <Text style={[styles.title, { color: '#000' }]}>Firstmobile</Text>

      <Text style={{ marginTop: 10, marginBottom: 30}}>Hello, world!</Text>

      <View style={styles.card}>
        <Text>This is a CARD</Text>
      </View>

      <Link style={styles.Link} href="/about">About Page</Link>

      <Link style={styles.Link} href="/contact">Contact Page</Link>
    </ThemedView>
  )
}

export default index

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
    img: {
        marginVertical: 5
    },
    card: {
        backgroundColor: '#eee',
        padding: 20,
        borderRadius: 5,
        boxShadow: '4px 4px rgba(0,0,0,0.1)'
    },
    Link: {
        marginVertical: 20
    }
})