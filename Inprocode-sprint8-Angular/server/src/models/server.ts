import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import routesMember from '../routes/member';
import db from '../db/connection';


class Server {
    private app : Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '3004';
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
            res.json({ msg: 'API working',});
    })
    
    this.app.use('/api/members', routesMember);
    
    this.app.get('/api/map', (req: Request, res: Response) => {
      db.query('SELECT nom, adreça, latitud, longitud FROM membres.teatres_bcn')
        .then((results: any) => {
          res.json(results); // ← Assegura't que results és un array
        })
        .catch((error: any) => {
          res.status(500).json({ error: 'Error en la consulta' });
        });
})
    this.app.use('/api/map', routesMember);
   
    this.app.get('/api/events', (req: Request, res: Response) => {
      db.query('SELECT titol, lloc, data FROM calendari_debuts')
        .then((results: any) => {
          res.json(results); // ← Assegura't que results és un array
        })
        .catch((error: any) => {
          res.status(500).json({ error: 'Error en la consulta' });
        });
})

    this.app.use('/api/events', routesMember);

}

    midlewares() {
        this.app.use(express.json());//parseamos el body a json
        //cors: para permitir peticiones de otros dominios
        this.app.use(cors());
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