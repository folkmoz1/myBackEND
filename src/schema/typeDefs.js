import { gql } from 'apollo-server-express'

export const typeDefs = gql`
    type Query {
        getMovie(id: Int!): Movie
        searchMovies(input: SearchInput): result
        searchMulti(input: SearchInput): result
    }
    type Mutation {
        getMovie(id: ID!): Movie
        searchMovies(input: SearchInput): result
        searchMulti(input: SearchInput): result
    }
    
    input SearchInput {
        keyword: String!
        language: String = "th-TH"
        page: Int = 1
    }
    
    type result {
        page: Int
        total_results: Int
        total_pages: Int
        results: [Movie]
    }
    
    type Movie {
        adult: Boolean
        backdrop_path: String
        media_type: String
        budget: Int
        genres: [Genres]
        homepage: String
        id: Int!
        imdb_id: String
        original_language: String
        original_title: String
        overview: String
        popularity: String
        poster_path: String
        production_companies: [Production_Companies]
        release_date: String
        revenue: Int
        runtime: Int
        tagline: String
        title: String
        video: String
        vote_average: Float
        vote_count: Int
    }
    
    type Genres {
        id: Int,
        name: String
    }
    
    type Production_Companies {
        id: Int!
        logo_path: String 
        name: String
        origin_country: String
    }
`
