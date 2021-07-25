import Http from '../index';
import interceptors from "./interceptors.config";
const baseUrl = process.env.API_URL;

export default class ApiHttp extends Http {
    constructor({ slug = '', headers = {}, config = {}, req = null, res = null } = {}) {
        super(
            `${baseUrl}/${slug}`,
            { headers: { 'X-Requested-With': 'XMLHttpRequest', ...headers }, config }
        );

        this.query.interceptors.response.use(
            (response) => interceptors.response(req, res).success(this, response),
            (error) => interceptors.response(req, res).error(this, error)
        );
        this.query.interceptors.request.use(
            (config) => interceptors.request(req).success(config),
            (error) => interceptors.request(req, res).error(error)
        );
    }
}
