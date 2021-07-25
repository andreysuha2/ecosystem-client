class Controller {
    req;
    http = null;

    constructor({ req, res }) {
        this.req = req;
        this.res = res;
    }
}

export default Controller;
