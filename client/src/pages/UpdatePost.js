import React, { Component } from 'react'
import TextInput from '../components/TextInput'
import { __GetPost, __UpdatePosts } from '../services/PostServices'
export default class UpdatePost extends Component {
  constructor() {
    super()
    this.state = {
        
      bird_name: '',
      description: '',
      range: '',
      nesting: '',
      prey: ''
    }
  }

  componentDidMount() {
    this.getPost()
  }
  getPost = async () => {
    try {
      const post = await __GetPost(this.props.match.params.post_id)
      console.log(this.props,"Look Here")
      this.setState({
        picture: post.picture,
        bird_name: post.bird_name,
        description: post.description,
        range: post.range,
        nesting: post.nesting,
        prey: post.prey
    })
    } catch (error) {
      console.log(error)
    }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await __UpdatePosts(this.state, this.props.match.params.post_id)
      this.props.history.push('/profile')
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { bird_name, description,nesting, range, prey } = this.state
    return (
      <div className="upload content">
         
        <form className="flex-col" onSubmit={this.handleSubmit}>
          <TextInput
            placeholder="Bird name"
            name="bird_name"
            value={bird_name}
            onChange={this.handleChange}
          />
            <TextInput
              name="description"
              placeholder="Description"
              value={description}
              onChange={this.handleChange}
            />
          <TextInput
            placeholder="Range"
            name="range"
            value={range}
            onChange={this.handleChange}
          />
          <TextInput
            name="prey"
            placeholder="prey"
            value={prey}
            onChange={this.handleChange}
          />
          <TextInput
            name="nesting"
            placeholder="nesting"
            value={nesting}
            onChange={this.handleChange}
          />
          <button>Update</button>
        </form>
      </div>
    )
  }
}
