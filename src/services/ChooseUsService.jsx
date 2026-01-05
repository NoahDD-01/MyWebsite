import api from '../api/axios';
import { ENDPOINTS } from '../constants/endpoint';


export const getChooseUsList = async () => {
    const response = await api.get(ENDPOINTS.CHOOSEUS_LIST);
    return response.data;
};