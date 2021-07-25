export default function({ req, res }, Controller, handlerName) {
    const controllerInstance = new Controller({ req, res });
    if(controllerInstance[handlerName] && typeof controllerInstance[handlerName] === "function") {
        controllerInstance[handlerName](req, res);
    } else {
        res.statusCode = 500;
        res.json({ message: `Handler '${handlerName}' not fount` });
    }
}
