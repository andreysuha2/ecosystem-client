import Http from '../../assets/js/http';

class ServerHttp extends Http {
    constructor(baseUrl, { headers = {}, config = {} } = {}) {
        super({ baseUrl, headers, config });
    }
}

export default ServerHttp;
