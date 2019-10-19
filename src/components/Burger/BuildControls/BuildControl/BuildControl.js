import React from 'react';

import classes from './BuildControl.css';

//nel button MORE abilito onClick con la classe added che permette: cliccando sul bottone MORE mi aggiunge gli ingredienti nella UI, SI VEDE
//stessa cosa per LESS
const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button 
            className={classes.Less} 
            onClick={props.removed} 
            disabled={props.disabled}>Less</button>
        <button 
            className={classes.More} 
            onClick={props.added}>More</button> 
    </div>
);

export default buildControl;