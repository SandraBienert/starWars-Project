"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postMember = exports.deleteMember = exports.getMember = exports.getMembers = void 0;
const getMembers = (req, res) => {
    res.json({
        msg: 'GET Members, Llista de membres'
    });
};
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
    console.log(body);
    res.json({
        msg: 'POST Member',
        body
    });
};
exports.postMember = postMember;
