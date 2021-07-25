import user from "./user.js";
import search from "./search";

export default (prefix, app) => {
    user(`${prefix}/user`, app);
    search(`${prefix}/search`, app);
};
