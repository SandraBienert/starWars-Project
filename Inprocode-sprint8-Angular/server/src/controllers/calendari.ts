
import { Request, Response } from 'express';
import agenda from '../models/calendari';
import calendari from '../db/connection'

export const getAgenda = async (req: Request, res: Response) => {
    const listAgendaEvents = await agenda.findAll()
    res.json( listAgendaEvents );
    
  };

export const  crearEvent = async(req: Request, res: Response) =>{
  const { titol, lloc, data } = req.body;

  try {
    const nouEvent = await agenda.create({
      title: titol,
      lloc: lloc,
      data: data,
    });

    res.json(nouEvent);
  } catch (error) {
    res.status(500).json({ error: (error as any).message });
  }
}  
   export const eliminarEvent = async (req: Request, res: Response) =>{
    const { titol, lloc, data } = req.body;
  // Endpoint: Eliminar event
  try {
    await agenda.destroy({ where: { id: req.params.id } });
    res.json({ success: true });
  } catch (error) {
    res.status(500).json({ error: (error as any).message });
  }
  

  };