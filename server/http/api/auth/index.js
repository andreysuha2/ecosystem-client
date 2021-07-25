import Http from "../index";

class AuthHttp extends Http {
    constructor(req, res) {
        super({ slug: 'auth', req, res });
    }

    check() {
        return this.query.get('check');
    }

    login(data) {
        return this.query.put('login', data);
    }

    registration(data) {
        return this.query.post('registration', data);
    }

    logout() {
        return this.query.put('logout');
    }
}

export default AuthHttp;
