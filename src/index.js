import express from 'express'
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from './schema/typeDefs'
import { resolvers } from './schema/resolver'

const { FRONTEND_URI } = process.env

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

const { FRONTEND_URI } = process.env

const app = express()
const PORT = process.env.PORT || 5000

server.applyMiddleware({ app, cors:{origin: FRONTEND_URI,optionsSuccessStatus:200} })


app.listen({ port: PORT }, () =>
    console.log(`Server is already at http://localhost:${PORT}${server.graphqlPath}`)
)
