import Http from "@http";
import interceptors from "./interceptors.config";

class LocalHttp extends Http {
    constructor({ slug = '', headers = {}, config = {} } = {}) {
        super({ baseUrl: `/api/${slug}`, headers, config });
        this.query.interceptors.response.use(
            (response) => interceptors.response.success(response),
            (error) => interceptors.response.error(error)
        );
        this.query.interceptors.request.use(
            (request) => interceptors.request.success(request),
            (error) => interceptors.request.error(error)
        );
    }
}

export default LocalHttp;

export const localApi = new LocalHttp();
