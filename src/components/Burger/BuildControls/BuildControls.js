// componente funzionale
// quindi i controlli di compilazione sono una funzione che riceve oggetti
import React from 'react';

import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
   { label: 'Salad', type: 'salad' },
   { label: 'Bacon', type: 'bacon' },
   { label: 'Cheese', type: 'cheese' },
   { label: 'Meat', type: 'meat' },
];

//il toFixed(2) vuol dire che nel prezzo avrò 4,00 e non 4 e basta. E il prezzo non risulterà incasinato aggiungendo ingredienti, non mi darà tanti zeri ma solo 2 cifre dopo la ,
const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <strong>{props.price.toFixed(2)}</strong></p> 
        {controls.map(ctrl => (
          <BuildControl
            key={ctrl.label} 
            label={ctrl.label}
            added={() => props.ingredientAdded(ctrl.type)}
            removed={() => props.ingredientRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]} />  
        ))}
        <button 
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}>{props.isAuth ? 'ORDER NOW' : 'SIGN UP TO ORDER'}</button> 
    </div>
);

export default buildControls;