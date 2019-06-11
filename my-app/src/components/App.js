import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';
import FavoriteDogs from './FavoriteDogs';
import '../App.css';

class App extends Component {

  state = {
    image: '',
    favoriteImages: []
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

  handleAddClick = () => {
    const favorites = [...this.state.favoriteImages];
    favorites.push(this.state.image);
    this.setState({
      favoriteImages: favorites
    })

  }

  render() {
    return (
      <div className="App" >
        <Form click={this.handleClick} />
        <div className="mainContainer">
          <Result image={this.state.image} addClick={this.handleAddClick} />
          <FavoriteDogs />
        </div>
      </div>
    );
  }
}

export default App;