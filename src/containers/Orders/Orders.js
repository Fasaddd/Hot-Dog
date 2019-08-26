import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from '../../axios-orders';

import Spinner from '../../components/UI/Spinner/Spinner';
import Order from '../../components/Order/Order';
import classes from './Orders.module.css';

class Orders extends Component {

    state = {
        loaded: false,
        orderedList: []
    }

    componentDidMount() {
        axios.get('/orders.json')
            .then(response => {
                let order = response.data;
                this.setState({
                    loaded: true,
                    orderedList: order
                })
            })
            .catch(error => {
                console.log(error);
            });
    };

    deleteCardHandler = (idCard) => {

        let updatedOrder = { ...this.state.orderedList };
        delete updatedOrder[idCard];
        axios.delete('/orders/' + idCard + '.json')
            .then(resp => {
                console.log(resp);
                this.setState({
                    loaded: true,
                    orderedList: updatedOrder
                })
            })
            .catch(err => console.log(err));
    };



    render() {
        let dataOrders = <Spinner />;
        let orders = { ...this.state.orderedList };
        let keys = Object.keys(orders);
        let def = Object.values(orders);



        if (this.state.loaded) {
            if (keys.length < 1) {
                dataOrders = (
                    <div>
                        <h3>You have not order!</h3>
                        <p><Link to="/">Order Now!</Link></p>
                    </div>
                )
            } else {
                dataOrders = def.map((element, index) => {
                    element.idElement = keys[index];
                    return <Order
                        key={element.idElement}
                        date={element.date}
                        ingredients={element.ingredients}
                        clickDel={() => this.deleteCardHandler(element.idElement)}
                        clickUpdate={() => this.updateCardHandler(element.idElement)}
                    />
                });
            }

        };



        return (
            <div className={classes.Orders}>
                <h2>Your Orders</h2>
                {dataOrders}
            </div>
        );
    };
};


export default Orders;