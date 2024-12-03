import React, { createContext, useState, useContext, useEffect } from 'react'

const MyListContext = createContext()

export const MyListProvider = ({ children }) => {
  const [myList, setMyList] = useState(() => {
    const savedList = window.localStorage.getItem('myList')
    return savedList ? JSON.parse(savedList) : []
  })

  useEffect(() => {
    window.localStorage.setItem('myList', JSON.stringify(myList))
  }, [myList])

  const addToList = (item, category) => {
    if (!myList.some((movie) => movie.id === item.id)) {
      item.category = category

      setMyList((prevList) => [...prevList, item])
    }
  }

  const removeFromList = (id) => {
    setMyList((prevList) => prevList.filter((movie) => movie.id !== id))
  }

  return (
    <MyListContext.Provider value={{ myList, addToList, removeFromList }}>
      {children}
    </MyListContext.Provider>
  )
}

export const useMyList = () => useContext(MyListContext)
