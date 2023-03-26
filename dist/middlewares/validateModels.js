"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateModel(model) {
    return function (req, res, next) {
        var error = model.validate(req['body'], {
            abortEarly: false,
        }).error;
        if (!error) {
            next();
        }
        else {
            res.status(400).send(error.details.map(function (d) { return d.message; }));
        }
    };
}
exports.default = validateModel;
