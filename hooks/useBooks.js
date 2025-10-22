import {  useContext } from 'react'
import { BooksContext } from '../contexts/BookContexts'

export function useBooks () {

  const context = useContext(BooksContext);

  if(!context){
    throw new Error("useBooks must be within BooksProvider")
  }

  return context
}
