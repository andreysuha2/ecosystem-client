import Http from "../index";

class UserHttp extends Http {
    constructor(req, res) {
        super({ slug: 'users', req, res });
    }

    get user() {
        return this.group('user', (query) => ({ load: () => query.get('') }));
    }

    get search() {
        return this.group('search', (query) => ({ suggestion: (params) => query.get('suggestion', { params }) }));
    }
}

export default UserHttp;
