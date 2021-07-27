import { ref } from "@nuxtjs/composition-api";

export const useDefaultRequestErrors = (list = []) => {
    const errors = ref({}),
        defaultError = () => ({ status: null, data: '' });
    list.forEach(errorName => { errors.value[errorName] = defaultError(); });
    return { errors };
};
