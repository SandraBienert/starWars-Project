import Server from "./models/server";
import dotenv from 'dotenv';
import { Express } from "express";

// Configurar la variables de entorno
dotenv.config();

const server = new Server();
