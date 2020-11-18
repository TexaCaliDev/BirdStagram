import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import Nav from '../components/Nav'
// import Search from '../components/Search'
// // import Axios from 'axios'
// import BirdCard from '../components/BirdCard'
import { __GetBirdsById} from '../services/BirdServices'

export default class Home extends React.Component {

  
 render(){
     return (
         <div>
             <Nav />
            
         </div>
     )
 }
}