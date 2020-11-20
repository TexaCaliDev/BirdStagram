import React , {Component} from 'react'
import {NavLink} from 'react-router-dom'

class Nav extends Component {
    constructor(){
        super()

    }


    render(){
        return(
        <nav>
            <NavLink to="/users/register">
                Sign Up
            </NavLink>
            <NavLink to="/users/SignIn">
                Sign In
            </NavLink>
            <NavLink to="/birds">
                Discover
            </NavLink>
            <NavLink to="/">
                Home
            </NavLink>
            
        </nav>
           
        )
    }
}

export default Nav
