import axios from "axios";

const useResource = (baseUrl) => {
    let token = null;

    const setToken = (newToken) => {
        token = `bearer ${newToken}`;
    };

    const getAll = async () => {
        const response = await axios.get(baseUrl);
    };

    const create = async (object) => {
        const config = { headers: { Authorization: token } };

        const response = await axios.post(baseUrl, object, config);
        return response.data;
    };

    const update = async (id, object) => {
        const config = { headers: { Authorization: token } };
        const response = await axios.put(`${baseUrl}/${id}`, object, config);
        return response.data;
    };

    const remove = async (id) => {
        await axios.delete(`${baseUrl}/${id}`);
    };

    return {
        getAll,
        create,
        update,
        remove,
        setToken,
    };
};

module.exports = useResource;
