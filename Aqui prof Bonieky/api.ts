import axios from "axios";

const BASE = 'https://jsonplaceholder.typicode.com';

export const api = {
    getAlbums: async () => {
        /*let response = await fetch(`${BASE}/albums`);
        let json = await response.json();
        return json;*/

        // using axios
        let response = await axios.get(`${BASE}/albums`);
        return response.data;
    }
}