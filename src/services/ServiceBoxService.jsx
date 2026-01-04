import api from '../api/axios';
import { ENDPOINTS } from '../constants/endpoint';


export const getServiceBoxList = async () => {
    const response = await api.get(ENDPOINTS.SERVICEBOX_LIST);
    return response.data;
};