import api from '../api/axios';
import { ENDPOINTS } from '../constants/endpoint';


export const getServicetextList = async () => {
    const response = await api.get(ENDPOINTS.SERVICETEXT_LIST);
    return response.data;
};

export const createService = async (data) => {
    const response = await api.post(ENDPOINTS.SERVICETEXT_CREATE, data);
    return response.data;
};