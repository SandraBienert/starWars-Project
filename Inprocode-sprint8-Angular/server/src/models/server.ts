import express, { Application, Request, Response } from 'express';
import routesMember from '../routes/member';
import db from '../db/connection';

class Server {
    private app : Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3002';
        this.midlewares();
        this.routes(); //inicialització dels métodes de rutes
        this.listen();
        this.dbConnect();
    }

    listen() {  
        this.app.listen(this.port, () => {
            console.log(`Server running on http://localhost:${this.port}`);
        });
    }

    routes() {
        this.app.get('/', (req: Request, res: Response) => {
            res.json({
                msg: 'API working',
        });
    })
    this.app.use('/api/members', routesMember);
}

    midlewares() {
        this.app.use(express.json());//parseamos el body a json
    }

   async dbConnect(){
     
    try{
    await db.authenticate();
      console.log('Database connected');
    } catch (error) {
      console.log('Error connecting to the database: ', error);
    }
}
}

export default Server;