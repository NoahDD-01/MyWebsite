import api from '../api/axios';
import { ENDPOINTS } from '../constants/endpoint';


export const getProjectBoxList = async () => {
    const response = await api.get(ENDPOINTS.PROJECTBOX_LIST);
    return response.data;
};