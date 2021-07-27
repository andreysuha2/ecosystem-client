import Http from "@localHttp";

class AuthHttp extends Http {
    constructor() {
        super({ slug: "auth" });
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

export default new AuthHttp();
