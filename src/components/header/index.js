import React, { useState } from 'react'
import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    NavItem,
    NavLink,
    Nav,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap'

const logo = require('../../assets/logo.svg')
const bag = require('../../assets/bag.svg')


export default () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => setIsOpen(!isOpen)

    return (
        <React.Fragment>
            <Navbar className="position-fixed w-100" color='light' light expand='md'>
                <NavbarBrand href="#"> <img src={logo} height="50px" alt="logo" /> Get Cake</NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink href="#">Quem Somos</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="#">Lojas</NavLink>
                        </NavItem>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                Produtos
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem> produto 1</DropdownItem>
                                <DropdownItem> produto 2</DropdownItem>
                                <DropdownItem> produto 3</DropdownItem>
                                <DropdownItem> produto 4</DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <Nav>
                        <NavItem>
                            <NavLink href="#"><img src={bag} alt="compras" height="50px" /></NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </React.Fragment>
    )
}