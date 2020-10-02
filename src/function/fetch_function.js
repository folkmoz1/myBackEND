import fetch from "node-fetch";

const { API_KEY, API_URI } = process.env

export const fetchAPI = async (uri,data)=> {
    const response = await fetch(`${API_URI}/${uri}/${data}`)
}
