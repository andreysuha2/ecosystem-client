import auth from "./auth";
import users from "./users";
import finances from "./finances";

export default (app) => {
    auth('/auth', app);
    users('/users', app);
    finances('/finances', app);
};
