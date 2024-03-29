import axios from "axios";
axios.defaults.baseURL = "https://api.pexels.com/v1";
const tokenStr = "5KZWGkiaxX6vXFfNjAYzJnpewtxBfAyxefKPJY6rlwrRbM8JRV0x9nen";
axios.defaults.headers.common["Authorization"] = `${tokenStr}`;
const defParams = {
    orientation: "landscape",
};

export const getPhotos = async (query, page, per_page) => {
    const res = await axios.get(`/search?page=${page}&per_page${per_page}&query=${query}`, defParams);
    console.log(res)
    return res.data;
};
