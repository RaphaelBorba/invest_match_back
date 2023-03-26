"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var auth_models_1 = __importDefault(require("models/auth.models"));
var validateModels_1 = __importDefault(require("../middlewares/validateModels"));
var authRouter = (0, express_1.Router)();
authRouter
    .post('/signIn', (0, validateModels_1.default)(auth_models_1.default.singInModel));
