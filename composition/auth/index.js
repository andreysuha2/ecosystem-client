import http from '@http/api/auth';
import { ref } from "@nuxtjs/composition-api";
import { useDefaultRequestErrors } from "@composition";

export const useAuth = () => {
    const { errors } = useDefaultRequestErrors([ 'check', 'login', 'register', 'logout' ]),
        isAuth = ref(null),
        check = async () => {
            try {
                await http.check();
                isAuth.value = true;
                return isAuth.value;
            } catch (e) {
                isAuth.value = false;
                errors.value.check.status = e.status;
                errors.value.check.data = e.data.data;
                return e;
            }
        },
        login = async (loginData) => {
            try {
                const { data, status } = await http.login(loginData);
                return { data, status };
            } catch (e) {
                errors.value.login = e;
                return e;
            }
        },
        register = async (registerData) => {
            try {
                const { data, status } = await http.registration(registerData);
                return { data, status };
            } catch (e) {
                errors.value.register = e;
                return e;
            }
        },
        logout = async () => await http.logout();

    return { check, login, register, logout, errors, isAuth };
};
