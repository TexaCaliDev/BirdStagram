import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Birds from '../pages/Birds'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import SignIn from '../pages/SignIn'
import Signup from '../pages/SignUp'
import {__CheckSession} from '../services/UserServices'
// import ViewPost from '../pages/ViewPost'
import CreatePost from '../pages/CreatePost'
import UpdatePost from '../pages/UpdatePost'
import ProtectedRoute from '../components/ProtectedRoute'

class Router extends Component {
    constructor(){
        super()
        this.state = {
          currentUser: null,
          pageLoading: true,
          authenticated: false
        }
    }

    componentDidMount(){
        this.verifyTokenValid()
        this.setState({pageLoading: false})
        
    }

    verifyTokenValid = async () => {
        const token = localStorage.getItem('token')
        if (token) {
          try {
            const session = await __CheckSession()
            console.log('session', session)
            this.setState(
              {
                currentUser: session.user,
                authenticated: true
              },
              () => this.props.history.push('/profile')
            )
          } catch (error) {
            this.setState({ currentUser: null, authenticated: false })
            localStorage.clear()
          }
        }
      }

    toggleAuthenticated = (value, user, done) => {
        this.setState({ authenticated: value, currentUser: user}, () => done())
      }

    render(){
        console.log(this.state)
        return (
            <main>
                <Switch>
                    <Route 
                        exact path="/"
                        component={(props)=>(
                            <Home {...props}></Home>
                        )}
                    />
                    < Route path="/birds/" component={Birds}/>
                     < Route path="/users/register" component={Signup} />
                     < Route  authenticated={this.state.authenticated} path="/users/posts" component={(props) => ( <Profile{...props} currentUser={this.state.currentUser} /> )} />
                     <Route  path='/posts/create/:user_id' component={(props) => ( <CreatePost{...props} currentUser={this.state.currentUser} authenticated={this.state.authenticated} />) } />

                     <Route
              path="/users/SignIn"
              component={(props) => (
                
                  <SignIn
                    toggleAuthenticated={this.toggleAuthenticated}
                    {...props}
                  />
                  
                  )}
                  />
                  
                  <Route path="/posts/update" component={(props) => {
                    <UpdatePost {...props} />
                  }} />

                  
                  
                 
                  
                </Switch>
            </main>
        )
    }
}

export default Router