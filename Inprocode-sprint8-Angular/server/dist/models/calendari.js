"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const connection_1 = __importDefault(require("../db/connection"));
const agenda = connection_1.default.define('calendari_debuts', {
    titol: {
        type: sequelize_1.DataTypes.STRING
    },
    lloc: {
        type: sequelize_1.DataTypes.STRING
    },
    data: {
        type: sequelize_1.DataTypes.DATE
    }
}, {
    createdAt: false,
    updatedAt: false
});
exports.default = agenda;
