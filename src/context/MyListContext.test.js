/* eslint-disable no-undef */
import React from 'react'
import { renderHook, act } from '@testing-library/react'
import { MyListProvider, useMyList } from './MyListContext'

test('adds and removes movies from the list', () => {
  const wrapper = ({ children }) => <MyListProvider>{children}</MyListProvider>
  const { result } = renderHook(() => useMyList(), { wrapper })

  act(() => {
    result.current.addToList({ id: 1, title: 'Inception' })
  })

  expect(result.current.myList).toEqual([{ id: 1, title: 'Inception' }])

  act(() => {
    result.current.removeFromList(1)
  })

  expect(result.current.myList).toEqual([])
})
