const tokenCookieName = process.env.AUTH_TOKEN_COOKIE_NAME;

export default {
    response: (req, res) => ({
        success(context, response) {
            const { status, data } = response;
            res.status(status);
            return { data };
        },
        error(context, error) {
            if(res) {
                const e = { status: 500, data: error };
                if(error.response) {
                    e.status = error.response.status;
                    e.data = error.response.data;
                }
                res.status(e.status);
                return Promise.reject(e);
            }
            return Promise.reject(error);
        }
    }),
    request: (req) => ({
        success(config) {
            if(req && req.cookies[tokenCookieName]) {
                config.headers.Authorization = `Bearer ${req.cookies[tokenCookieName]}`;
            }
            return config;
        },
        error(context, error) {
            return Promise.reject(error);
        }
    })
};
