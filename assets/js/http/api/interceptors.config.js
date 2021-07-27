export default {
    response: {
        success(response) {
            const { status, data } = response;
            return { status, data };
        },
        error(error) {
            const e = { status: 500, data: error },
                { response } = error;
            if(response) {
                const { status, data } = response;
                e.status = status;
                e.data = data;
            }
            return Promise.reject(e);
        }
    },
    request: {
        success(config) {
            return config;
        },
        error(error) {
            return Promise.reject(error);
        }
    }
};
