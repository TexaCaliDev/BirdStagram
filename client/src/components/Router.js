import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Birds from '../pages/Birds'
import Home from '../pages/Home'
import Profile from '../pages/Profile'
import SignIn from '../pages/SignIn'
import Signup from '../pages/SignUp'
import {__CheckSession} from '../services/UserServices'

class Router extends Component {
    constructor(){
        super()
        this.state = {
            pageLoading: true
        }
    }

    componentDidMount(){
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
                     {/* < Route path="/users/SignIn" component={SignIn} /> */}
                     < Route path="/users/profile" component={Profile} />

                     <Route
              path="/users/SignIn"
              component={(props) => (
                
                  <SignIn
                    toggleAuthenticated={this.toggleAuthenticated}
                    {...props}
                  />
                
              )}
            />
                 
                   
                </Switch>
            </main>
        )
    }
}

export default Router