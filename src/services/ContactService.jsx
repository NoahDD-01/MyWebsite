import api from '../api/axios';
import { ENDPOINTS } from '../constants/endpoint';


export const getContactList = async () => {
    const response = await api.get(ENDPOINTS.CONTACT_LIST);
    return response.data;
};
export const createContact = async (data) => {
    const response = await api.post(ENDPOINTS.CONTACT_CREATE, data);
    return response.data;
};

export const getContactDetail = async (id) => {
    const response = await api.get(ENDPOINTS.CONTACT_DETAIL(id));
    return response.data;
};

export const updateContact = async (id, data) => {
    const response = await api.put(ENDPOINTS.CONTACT_UPDATE(id), data);
    return response.data;
};

export const deleteContact = async (id) => {
    const response = await api.delete(ENDPOINTS.CONTACT_DELETE(id));
    return response.data;
};