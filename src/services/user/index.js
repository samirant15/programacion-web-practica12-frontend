import { autheticatewithCredentials, restClient } from "../../utils/restClient";

const APP_ROOT = 'http://localhost:8080'; 

export const loginUser = (credentials) => {
    const route = `${APP_ROOT}/api/login`;
    return autheticatewithCredentials(route, 'POST', credentials);
}

export const fetchUser = () => {
    const route = `${APP_ROOT}/api/users`;
    return restClient(route, 'GET');
}