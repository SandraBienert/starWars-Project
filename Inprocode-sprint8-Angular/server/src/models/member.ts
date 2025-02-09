import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Member = db.define('Membres', { 
  name: {
    type: DataTypes.STRING,
  },
  surname: {
    type: DataTypes.STRING,
  },
  rol: {
    type: DataTypes.STRING,
  },
  payroll: {
    type: DataTypes.NUMBER,
  },

}, {
  createdAt: false,
  updatedAt: false
}
);

export default Member;