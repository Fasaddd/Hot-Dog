import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Toolbar.module.css';
import hotDogLogo from '../../../assets/img/hotDog.png'

const toolbar = (props) => {
    return (
        <header className={classes.Toolbar}>
            <div className={classes.Logo}>
                <img src={hotDogLogo} alt='hotDog' />
            </div>
            <ul className={classes.Navigate}>
                <li className={classes.NavigationItem}><NavLink activeClassName={classes.active} to="/" exact>Builder</NavLink></li>
                <li className={classes.NavigationItem}><NavLink activeClassName={classes.active} to="/orders">Orders</NavLink></li>
            </ul>
        </header>
    )
}

export default toolbar;