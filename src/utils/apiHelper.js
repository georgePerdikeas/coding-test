import axios from 'axios';

export const getBooksAsync = async (pageIndex = 1, itemsPerPage = 20, searchTerm) => {
    const payload = {
        page: pageIndex,
        itemsPerPage,
        filters: searchTerm? [{type: "all", values: [searchTerm]}] : []
    };
    const response = await axios.post("http://nyx.vima.ekt.gr:3000/api/books", payload);
    return response.data;
}