import http from '../utils/http'

export default {
  categories: {
    COMEDY: 35,
    ACTION: 28,
    ADVENTURE: 12
  },

  byCategory (id) {
    return http.get('/discover/movie', {
      with_genres: id
    })
  },

  getDetail (id) {
    return http.get(`/movie/${id}`)
      .then((response) => response || { error: true })
      .catch(() => ({ error: true }))
  },

  getTrending () {
    return http.get('/trending/movie/day')
  }
}
