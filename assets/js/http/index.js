import axios from "axios";

export default class Http {
    constructor({ baseUrl = '/', headers={}, config = {} } = {}) {
        Object.defineProperties(this, {
            headers: { value: { 'Content-Type': "application/json" } },
            baseUrl: { value: baseUrl },
            config: { value: config },
            query: { value: axios.create({ baseURL: baseUrl, headers, ...config }) }
        });
    }

    group(groupPath, callback) {
        const that = this,
            // eslint-disable-next-line no-confusing-arrow
            getPath = (path) => path ? `${groupPath}/${path}` : groupPath,
            group = (path, callback) => that.group(`${groupPath}/${path}`, callback),
            query = {
                request(config = { url: null }) {
                    return that.query.request({ url: getPath(config.url), ...config });
                },
                get(path = null, config ={}) { return that.query.get(getPath(path), config); },
                post(path = null, data = {}, config = {}) { return that.query.post(getPath(path), data, config); },
                put(path = null, data= {}, config = {}) { return that.query.put(getPath(path), data, config); },
                delete(path = null, config = {}) { return that.query.delete(getPath(path), config); },
                options(path = null, config = {}) { return that.query.options(getPath(path), config); },
                patch(path = null, config = {}) { return that.query.patch(getPath(path), config); },
                head(path = null, config = {}) { return that.query.head(getPath(path), config); }
            };
        return callback(query, group);
    }
}
