import { createContext, useEffect, useState } from "react";
import { client, databases } from "../lib/appwrite";
import { ID, Permission, Query, Role } from "react-native-appwrite";
import { useUser } from "../hooks/useUser";

const DATABASE_ID = process.env.EXPO_PUBLIC_DATABASE_ID;
const COLLECTION_ID = process.env.EXPO_PUBLIC_COLLECTION_ID;

export const BooksContext = createContext();

export function BooksProvider({ children }) {
  const [books, setBooks] = useState([]);
  const { user } = useUser();

  async function fetchBooks() {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID,
        [Query.equal("userId", user.$id)]
      );
      setBooks(response.documents);
    } catch (error) {
      throw Error(error.message);
    }
  }

  async function fetchBookById(id) {
    try {
        const response = await databases.getDocument(
            DATABASE_ID,
            COLLECTION_ID,
            id
        )

        return response
    } catch (error) {
      throw Error(error.message);
    }
  }

  async function createBook(data) {
    try {
      const newBook = await databases.createDocument(
        DATABASE_ID,
        COLLECTION_ID,
        ID.unique(),
        { ...data, userId: user.$id },
        [
          Permission.read(Role.user(user.$id)),
          Permission.update(Role.user(user.$id)),
          Permission.delete(Role.user(user.$id)),
        ]
      );
    } catch (error) {
      throw Error(error.message);
    }
  }

  async function deleteBookById(id) {
    try {
        await databases.deleteDocument(
          DATABASE_ID,
          COLLECTION_ID,
          id  
        )
    } catch (error) {
      throw Error(error.message);
    }
  }

  useEffect(() => {
    let unsubscribe;
    const channel = `databases.${DATABASE_ID}.collections.${COLLECTION_ID}.documents`;

    if (user) {
      fetchBooks();

      unsubscribe = client.subscribe(channel, (response) => {
        const { payload, events } = response;

        if (events[0].includes("create")) {
          setBooks((prevBooks) => [...prevBooks, payload]);
        }

        if (events[0].includes("delete")) {
          setBooks((prevBooks) => prevBooks.filter((book) => book.$id !== payload.$id));
        }
      });
    } else {
      setBooks([]);
    }

    return () => {
      if (unsubscribe) unsubscribe();
    };
  }, [user]);

  return (
    <BooksContext.Provider
      value={{
        books,
        setBooks,
        fetchBooks,
        fetchBookById,
        createBook,
        deleteBookById,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
}
