import React , {Component} from 'react'
import {NavLink} from 'react-router-dom'
import "../styles/nav.css"

class Nav extends Component {
   


    render(){
        return(
        <div>
            <NavLink className="signup nav" to="/users/register">
                Sign Up
            </NavLink>
            <NavLink className="signin nav"  to="/users/SignIn">
                Sign In
            </NavLink>
            <NavLink
                activeClassName=" signout nav"
                to="/users/Signin"
                onClick={() => localStorage.clear()}
                >
                Sign Out
            </NavLink>
            <NavLink className=" discover nav" to="/birds">
                Discover
            </NavLink>
            <NavLink className=" home nav" to="/">
                Home
            </NavLink>
            
        </div>
           
        )
    }
}

export default Nav
