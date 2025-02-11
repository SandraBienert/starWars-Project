import { DataTypes } from 'sequelize';
import calendari from '../db/connection';

const agenda = calendari.define('calendari_debuts', {
    titol: {
        type: DataTypes.STRING
    },
    lloc: {
        type: DataTypes.STRING
    },
    data: {
        type: DataTypes.DATE
    } 
}, {
    createdAt: false,
    updatedAt: false  
});

export default agenda;