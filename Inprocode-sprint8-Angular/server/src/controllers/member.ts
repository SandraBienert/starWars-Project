import { Request, Response } from 'express';
import Member from '../models/member';


export const getMembers = async (req: Request, res: Response) => {
   const listMembers = await Member.findAll();
    res.json(listMembers);
}

export const getMember = (req: Request, res: Response) => {
    const { id } = req.params;
    res.json({
        msg: 'GET Member',
        id //el mateix q id:id
    });
}

    export const deleteMember = (req: Request, res: Response) => {
        const { id } = req.params;
        res.json({
            msg: 'DELETE Member',
            id 
        });
}

export const postMember = (req: Request, res: Response) => {

    const { body } = req;
    res.json({
        msg: 'POST Member',
        body
    });
}
    

 export const updateMember = (req: Request, res: Response) => {
        const { body } = req;
        const { id } = req.params;

        res.json({
            msg: 'UPDATE Member',
            id,
            body
        });
}