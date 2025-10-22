import { StyleSheet, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import ThemedView from '../../../components/ThemedView'
import ThemedCard from '../../../components/ThemeCard'
import ThemedText from '../../../components/ThemedText'
import { useLocalSearchParams, useRouter } from 'expo-router'
import { useBooks } from '../../../hooks/useBooks'
import Spacer from '../../../components/Spacer'
import ThemedLoader from '../../../components/ThemedLoader'
import { Colors } from '../../../constants/Colors'
import ThemedButton from '../../../components/ThemedButton'

const BookDetails = () => {
 const [book, setBook] = useState(null);

 const { id } = useLocalSearchParams();
 const router = useRouter()

 const { fetchBookById, deleteBookById } = useBooks();

 const handleDelete = async () => {
    await deleteBookById(id)
    setBook(null)
    router.replace('/books')
 }

 useEffect(() => {
     async function loadBook() {
        const bookData = await fetchBookById(id)
        setBook(bookData)
     }

     loadBook()
 }, [id])

 if(!book){
    return (
      <ThemedView safe={true} style={styles.container}>
        <ThemedLoader />
      </ThemedView>   
    )
 }

  return (
   <ThemedView safe={true} style={styles.container}>
      <ThemedCard style={styles.card}>
        <ThemedText style={styles.title}>{book.title}</ThemedText>
        <ThemedText>Written by {book.author}</ThemedText>
        <Spacer />

        <ThemedText title={true}>Book description:</ThemedText>
        <Spacer height={10} />

        <ThemedText>{book.description}</ThemedText>
      </ThemedCard>

      <ThemedButton onPress={handleDelete} style={styles.delete}>
        <Text style={{ color: '#fff', textAlign: 'center' }}>Delete Book</Text>
      </ThemedButton>
    </ThemedView>
  )
}

export default BookDetails

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  title: {
    fontSize: 22,
    marginVertical: 10,
  },
  card: {
    margin: 20
  },
  delete: {
    marginTop: 40,
    backgroundColor: Colors.warning,
    width: 200,
    alignSelf: "center",
  },
})