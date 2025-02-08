import { Request, Response } from 'express';


export const getMembers = (req: Request, res: Response) => {
    res.json({
        msg: 'GET Members, Llista de membres'
    });
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