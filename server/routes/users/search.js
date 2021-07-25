import express from 'express';
import routeHandler from "../../core/routeHandler.js";
import UsersController from "../../controllers/Users/UsersController.js";
const router = express.Router(); // eslint-disable-line

export default (prefix, app) => {
    router.get('/suggestion', (
        req,
        res) => routeHandler({ req, res }, UsersController, "suggestionSearch"));
    app.use(prefix, router);
};
