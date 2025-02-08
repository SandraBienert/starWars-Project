"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateMember = exports.postMember = exports.deleteMember = exports.getMember = exports.getMembers = void 0;
const member_1 = __importDefault(require("../models/member"));
const getMembers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const listMembers = yield member_1.default.findAll();
    res.json(listMembers);
});
exports.getMembers = getMembers;
const getMember = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'GET Member',
        id //el mateix q id:id
    });
};
exports.getMember = getMember;
const deleteMember = (req, res) => {
    const { id } = req.params;
    res.json({
        msg: 'DELETE Member',
        id
    });
};
exports.deleteMember = deleteMember;
const postMember = (req, res) => {
    const { body } = req;
    res.json({
        msg: 'POST Member',
        body
    });
};
exports.postMember = postMember;
const updateMember = (req, res) => {
    const { body } = req;
    const { id } = req.params;
    res.json({
        msg: 'UPDATE Member',
        id,
        body
    });
};
exports.updateMember = updateMember;
