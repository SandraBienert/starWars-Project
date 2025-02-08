import { Model, DataTypes } from 'sequelize';
import db from '../db/connection';

const Member = db.define('Member', { 
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

});

export default Member;