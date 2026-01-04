// export const BASE_URL = "http://127.0.0.1:8000";

export const BASE_URL = "https://noahdd.pythonanywhere.com"

export const ENDPOINTS = {
    // Contact Us Endpoints
    CONTACT_LIST: "contactus/",
    CONTACT_CREATE: "contactus/create/",
    CONTACT_DETAIL: (id) => `contactus/${id}/`,
    CONTACT_UPDATE: (id) => `contactus/${id}/update/`,
    CONTACT_DELETE: (id) => `contactus/${id}/delete/`,

    SERVICETEXT_LIST: "servicetexts/",

    SERVICEBOX_LIST: "servicebox/",



};