import express from 'express';
import routeHandler from "../../core/routeHandler.js";
import AuthController from "../../controllers/Authenticate/AuthController.js";
const router = express.Router(); // eslint-disable-line

export default (prefix, app) => {
    router.get('/check', (
        req,
        res
    ) => routeHandler({ req, res }, AuthController, "check"));
    router.put('/login', (
        req,
        res
    ) => routeHandler({ req, res }, AuthController, "login"));
    router.post('/registration', (
        req,
        res
    ) => routeHandler({ req, res }, AuthController, "registration"));
    router.put('/logout', (
        req,
        res
    ) => routeHandler({ req, res }, AuthController, "logout"));
    app.use(prefix, router);
};
