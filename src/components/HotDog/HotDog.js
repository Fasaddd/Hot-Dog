import React, { Component } from 'react';

import classes from './HotDog.module.css';
import Button from '../UI/Button/Button';
import axios from '../../axios-orders';
import Spinner from '../UI/Spinner/Spinner';
import Aux from '../../hoc/Auxillilary/Auxillilary';




class HotDog extends Component {

    state = {
        ingredients: [],
        addedIng: '',
        loading: false
    };

    orderHandler = () => {
        this.setState({
            loading: true
        });
        const date = new Date();
        const postIng = {
            ingredients: {
                ...this.state.ingredients
            },
            date
        };
        axios.post('/orders.json', postIng)
            .then(response => {
                console.log(response);
                this.setState({
                    loading: false,
                    ingredients: []
                });
            })
            .catch(error => {
                console.log(error);
            });
    };

    inputChangeHandler = (event) => {
        this.setState({
            addedIng: event.target.value
        });
    };


    addClickHandler = (event) => {
        event.preventDefault();
        if (this.state.addedIng.match(/[A-Za-z]/ig)) {
            const orderIngredients = [];
            orderIngredients.push(...this.state.ingredients);
            orderIngredients.push(this.state.addedIng);
            this.setState({
                ingredients: orderIngredients,
                addedIng: ''
            });
        };

    };

    deleteIngredientHandler = (indexIng) => {
        console.log(this.state.ingredients);
        let updatedOrder = [ ...this.state.ingredients ];
        updatedOrder.splice(indexIng,1);
        console.log(updatedOrder);
        this.setState({
            ingredients: updatedOrder
        });
    }


    render() {

        let dis = true;
        if (this.state.ingredients.length >= 1) {
            dis = false;
        };

        const ordered = this.state.ingredients.map((element, index) => {
            return <li 
                className={classes.IngredientOrder}
                onClick={() => this.deleteIngredientHandler(index)}
                key={index}>{element}</li>;
        });

        let formedElement = (
            <Spinner />
        )

        if (!this.state.loading) {
            formedElement = (
                <Aux>
                    <h3>Create your own Hot Dog!</h3>
                    <div className={classes.Menu}>
                        <input type="text"
                            onChange={(event) => this.inputChangeHandler(event)}
                            value={this.state.addedIng}
                            placeholder='Add your ingredient' />
                        <Button
                            clicked={this.addClickHandler}
                            btnType="Success">ADD</Button>
                        <div className={classes.Ingredient}>
                            Your ingredients: {ordered}
                        </div>
                    </div>
                    <hr />
                    <button disabled={dis} 
                            className={classes.ButtonOrder} 
                            onClick={this.orderHandler}>Order</button>
                </Aux>

            );
        };


        return (
            <div className={classes.HotDog}>
                {formedElement}
            </div>
        );
    };
};


export default HotDog;