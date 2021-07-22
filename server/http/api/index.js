import Http from '@httpServer';
const baseUrl = process.env.API_URL;

export default class ApiHttp extends Http {
    constructor({ slug = '', headers = {}, config = {} } = {}) {
        super(`${baseUrl}/${slug}`, { headers, config });
    }
}
