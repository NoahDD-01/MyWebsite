import api from '../api/axios';
import { ENDPOINTS } from '../constants/endpoint';


export const getProfileList = async () => {
    const response = await api.get(ENDPOINTS.PROFILE_LIST);
    return response.data;
};