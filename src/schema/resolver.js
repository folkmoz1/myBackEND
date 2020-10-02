import fetch from "node-fetch";
import axios from 'axios'
require('dotenv').config()

const { API_KEY, API_URI } = process.env

export  const resolvers = {
    Query: {
        getMovie: async (_, {id}) => {
            try {
                const res = await axios.get(`${API_URI}/movie/${id}`,{
                    params: {
                        api_key : API_KEY
                    }
                })

                return res.data
            } catch (err) {
                throw err
            }
        },
        searchMovies: async (_,{input: {keyword,language,page}}) => {
            try {
                console.log(keyword,page,language)
                const response = await axios.get(`${API_URI}/search/movie`,{
                    params: {
                        api_key : API_KEY,
                        language,
                        query: `${keyword}`,
                        page: page,
                    }
                })
                return response.data
            } catch (err) {
                throw err
            }
        },
        searchMulti: async (_,{input: {keyword,language,page}}) => {
            try {
                console.log(keyword,page,language)
                const response = await axios.get(`${API_URI}/search/multi`,{
                    params: {
                        api_key : API_KEY,
                        language,
                        query: `${keyword}`,
                        page: page,
                    }
                })
                return response.data
            } catch (err) {
                throw err
            }
        }
    },
    Mutation: {
        getMovie: async (_, {id}) => {
            try {
                const res = await axios.get(`${API_URI}/movie/${id}`,{
                    params: {
                        api_key : API_KEY
                    }
                })

                return res.data
            } catch (err) {
                throw err
            }
        },
        searchMovies: async (_,{input: {keyword,language,page}}) => {
            try {
                console.log(keyword,page,language)
                const response = await axios.get(`${API_URI}/search/movie`,{
                    params: {
                        api_key : API_KEY,
                        language,
                        query: `${keyword}`,
                        page: page,
                    }
                })
                return response.data
            } catch (err) {
                throw err
            }
        },
        searchMulti: async (_,{input: {keyword,language,page}}) => {
            try {
                console.log(keyword,page,language)
                const response = await axios.get(`${API_URI}/search/multi`,{
                    params: {
                        api_key : API_KEY,
                        language,
                        query: `${keyword}`,
                        page: page,
                    }
                })
                return response.data
            } catch (err) {
                throw err
            }
        }
    }
}
