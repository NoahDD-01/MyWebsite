import api from '../api/axios';
import { ENDPOINTS } from '../constants/endpoint';


export const getAboutUsList = async () => {
    const response = await api.get(ENDPOINTS.ABOUTUS_LIST);
    return response.data;
};