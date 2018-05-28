import React, { Component } from 'react';
import './../App.css';
import { NavItem, Nav } from 'react-bootstrap';

class Navb extends Component {
    render() {
        return (
            <Nav bsStyle="pills" activeKey={1}>
                <NavItem eventKey={1} href="/home">
                    NavItem 1 content
    </NavItem>
                <NavItem eventKey={2} title="Item">
                    NavItem 2 content
    </NavItem>
                <NavItem eventKey={3} disabled>
                    NavItem 3 content
    </NavItem>
            </Nav>
        )
    }
}

export default Navb;