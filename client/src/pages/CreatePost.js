import React, { Component } from 'react'
import TextInput from '../components/TextInput'
import { __UploadPost } from '../services/PostServices'

export default class CreatePost extends Component {
  constructor() {
    super()
    this.state = {
      bird_name: '',
      description: '',
      range: '',
      picture: '',
      prey: '',
      nesting: ''
    }
  }

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value })
  }

  handleSubmit = async (e) => {
    e.preventDefault()
    try {
        
      await __UploadPost(this.state, this.props.currentUser._id)
      
      console.log(this.state,"log 1")
      this.props.history.push('/users/posts')
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { bird_name, range,picture,prey,nesting, description } = this.state
    return (
      <div className="upload content">
        <form className="flex-col" onSubmit={this.handleSubmit}>
            <TextInput
              fieldType="textfield"
              placeholder="Picture URL"
              name="picture"
              value={picture}
              onChange={this.handleChange}
            />
          <TextInput
            fieldType="textfield"
            placeholder="bird_name"
            name="bird_name"
            value={bird_name}
            onChange={this.handleChange}
          />
            <TextInput
              fieldType="textfield"
              name="description"
              placeholder="Description"
              value={description}
              onChange={this.handleChange}
            />
          <TextInput
            fieldType="textfield"
            placeholder="Range"
            name="range"
            value={range}
            onChange={this.handleChange}
          />
          <TextInput
            fieldType="textfield"
            placeholder="Nesting"
            name="nesting"
            value={nesting}
            onChange={this.handleChange}
          />
          <TextInput
            fieldType="textfield"
            placeholder="Prey"
            name="prey"
            value={prey}
            onChange={this.handleChange}
          />
          <button>Upload</button>
        </form>
      </div>
    )
  }
}
