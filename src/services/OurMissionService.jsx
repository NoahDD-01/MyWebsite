import api from '../api/axios';
import { ENDPOINTS } from '../constants/endpoint';

export const getOurMissionList = async () => {
    const response = await api.get(ENDPOINTS.OURMISSION_LIST);
    return response.data;
};