/* eslint-disable no-undef */
import moviesService from './moviesService'
import http from '../utils/http'

jest.mock('../utils/http')

test('fetches movies by category successfully', async () => {
  http.get.mockResolvedValueOnce({
    results: [{ id: 1, title: 'Inception' }]
  })

  const result = await moviesService.byCategory(moviesService.categories.ACTION)

  expect(http.get).toHaveBeenCalledWith('/discover/movie', {
    with_genres: moviesService.categories.ACTION
  })
  expect(result.results).toEqual([{ id: 1, title: 'Inception' }])
})

test('handles API error gracefully', async () => {
  http.get.mockRejectedValueOnce(new Error('Network Error'))

  await expect(moviesService.byCategory(moviesService.categories.ACTION)).rejects.toThrow('Network Error')
})
