import Controller from "../../core/Controller";
import Http from "../../http/api/auth";
import { camelizeObject } from "../../../assets/js/helpers/functions";

const tokenCookieName = process.env.AUTH_TOKEN_COOKIE_NAME;

class AuthController extends Controller {
    constructor({ req, res }) {
        super({ req, res });
        this.http = new Http(req, res);
    }

    check(req, res) {
        this.http.check()
            .then(({ data }) => res.json(data))
            .catch(({ data }) => res.json({ data }));
    }

    login(req, res) {
        this.http.login(req.body)
            .then(({ data }) => {
                const { token } = data;
                res.cookie(tokenCookieName, token, { httpOnly: true });
                res.json({ success: true });
            })
            .catch(({ data }) => res.json(data));
    }

    registration(req, res) {
        this.http.registration(camelizeObject(req.body, true))
            .then(({ data }) => {
                const { token } = data;
                res.cookie(tokenCookieName, token, { httpOnly: true });
                res.json({ success: true });
            })
            .catch(({ data }) => res.json(data));
    }

    logout(req, res) {
        this.http.logout()
            .then(({ data }) => {
                res.cookie(tokenCookieName, { expires: Date.now() });
                res.json(data);
            })
            .catch(({ data }) => res.json(data));
    }
}

export default AuthController;
