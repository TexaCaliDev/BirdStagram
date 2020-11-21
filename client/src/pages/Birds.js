import React, {Component} from 'react'
import "../styles/bird.css"
import Nav from '../components/Nav'
import {__GetAllBirds} from '../services/BirdServices'

class Birds extends Component {
    constructor(){
        super()
        this.state = {
            birds: []
           
        }
   }

   componentDidMount(){
    this.getAllBirds()
    // console.log("component did mount!!")
   }

   getAllBirds = async () => {
       try{
           const birds = await __GetAllBirds(this.props.match.params.birds)
           console.log(birds, 'update')
           this.setState({birds: birds.birds})
           console.log('look Here', this.state)
       }catch(error){
           throw  error
       }
   }
    render(){
        const {birds} = this.state
        return  <div>
                    <Nav />
                    <div className="info-wrapper flex-col">
                        { birds.length ? ( birds.map((bird) => (
                           <div className="card" key={bird._id}>
                               <div className='picture-container'>
                           <img src={bird.picture} />
                                </div> 
                                <div className="info-container">
                            <h3>Bird Name:{bird.bird_name}</h3>
                            <p>Description:{bird.description}</p>
                            <p>Range:{bird.range}</p>
                            <p>Prey:{bird.prey}</p>
                            <p>Nesting:{bird.nesting}</p> 
                                </div>
                           </div>    
                        )) 
                        ) : (<h3>No Birds</h3>)}
                        
                    </div>

                 
              
                </div>
    }
}

export default Birds