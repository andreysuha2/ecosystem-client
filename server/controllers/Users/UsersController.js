import Controller from "../../core/Controller";
import Http from "../../http/api/users";
import { camelizeObject } from "../../../assets/js/helpers/functions";

class UsersController extends Controller {
    constructor({ req, res }) {
        super({ req, res });
        this.http = new Http(req, res);
    }

    loadUser(req, res) {
        this.http.user.load()
            .then(({ data }) => res.json(data))
            .catch(({ data }) => res.json(data));
    }

    suggestionSearch(req, res) {
        this.http.search.suggestion(camelizeObject(req.query, true))
            .then(({ data }) => res.json(data))
            .catch(({ data }) => res.json(data));
    }
}

export default UsersController;
