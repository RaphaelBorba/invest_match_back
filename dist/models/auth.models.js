"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var joi_1 = __importDefault(require("joi"));
var singInModel = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().required()
});
var signUpModel = joi_1.default.object({
    email: joi_1.default.string().email().required(),
    password: joi_1.default.string().required(),
    name: joi_1.default.string().required(),
    imageUrl: joi_1.default.string().uri().required(),
    type: joi_1.default.string().required()
});
var authModels = {
    singInModel: singInModel,
    signUpModel: signUpModel
};
exports.default = authModels;
