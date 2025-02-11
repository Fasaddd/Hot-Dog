import React, { Component } from 'react';

import classes from './Layout.module.css';
import Aux from '../../hoc/Auxillilary/Auxillilary';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';

class Layout extends Component {
    render() {
        return (
            <Aux>
                <Toolbar/>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    };
};


export default Layout;