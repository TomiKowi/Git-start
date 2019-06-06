import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';
import '../App.css';

class App extends Component {

  state = {
    image: ''
  }

  handleClick = () => {

    const API = 'https://dog.ceo/api/breeds/image/random'

    fetch(API)
      .then(response => {
        if (response.ok) {
          return response
        }
        throw Error("Ups, something went wrong")
      })
      .then(response => response.json())
      .then(data => {
        this.setState({
          image: data.message
        })
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div className="App" >
        <Form click={this.handleClick} />
        <Result image={this.state.image} />
      </div>
    );
  }
}

export default App;