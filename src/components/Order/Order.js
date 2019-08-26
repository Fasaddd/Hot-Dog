import React from 'react';

import Button from '../UI/Button/Button';
import classes from './Order.module.css';


const order = (props) => {

    const ingredientOutput = props.ingredients.map(ig => {
        return <span 
            style={{
                textTransform: 'capitalize',
                display: 'inline-block',
                margin: '0 8px',
                border: '1px solid #ccc',
                padding: '5px',
                background: '#e2e6fc',
                }}
            key={ig}>{ig}</span>;
    });

    return(
        <div className={classes.Order}>
            <p>Ingredients: {ingredientOutput}</p>
            <p>Ordering date: {props.date}</p>
            <div>
                <Button btnType="Danger" clicked={props.clickDel}>Delete Order</Button>
            </div>
            
        </div>
    );
};

export default order;

