import React from 'react'
// import {Link, NavLink} from 'react-router-dom'
import Nav from '../components/Nav'
import "../styles/home.css"
// import Search from '../components/Search'
// // import Axios from 'axios'
// import BirdCard from '../components/BirdCard'
// import { __GetBirdsById} from '../services/BirdServices'

export default class Home extends React.Component {

  
 render(){
     return (
         <div className="body">
             <Nav />
            <h1>
                Birdstagram
            </h1>
            <h3>
                A place for bird lovers
            </h3>
            <h4>
                sign up or check us out
            </h4>

         </div>
     )
 }
}