import React from "react";
import MyNavbar from "../components/navbar";
import { useCookies } from 'react-cookie';
import { CardBody, CardHeader, Card, Row, Col, NavLink, Table, Media, UncontrolledDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import CartTable from "../components/cartTable";

function Cart () {

    const [cookies, setCookie, removeCookie] = useCookies(['cart']);



    return (
        <React.Fragment>
            <MyNavbar/>
            <br/>
            <br/>
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Dummy Ecommerce Site</h1>
                    <p class="lead">Placeholder.</p>
                </div>
            </div>
            <br/>
            <br/>
            <div className="container">
                <Card>
                    <CartTable/>
                </Card>
            </div>
            <br/>
            <Row>
                <Col></Col>
                <Col>
                <div className="text-center">
                    <a href="#" class="btn btn-block btn-primary">Checkout</a>
                </div>
            </Col>
                <Col></Col>
            </Row>

        </React.Fragment>
    )

}

export default Cart