import Http from "@localHttp";

class UsersHttp extends Http {
    constructor() {
        super({ slug: 'users' });
    }

    get user() {
        return this.group('user', (query) => ({ load: () => query.get('') }));
    }

    get search() {
        return this.group('search', (query) => ({ suggestion: (params) => query.get('suggestion', { params }) }));
    }
}

export default new UsersHttp();
