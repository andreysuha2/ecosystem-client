import Http from "@http";

class LocalHttp extends Http {
    constructor({ slug = '', headers = {}, config = {} } = {}) {
        super({ baseUrl: `/api/${slug}`, headers, config });
    }
}

export default LocalHttp;

export const localApi = new LocalHttp();
