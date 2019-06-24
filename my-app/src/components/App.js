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
    if (favorites.length >= 7) {
      alert("Baza piesków zapełniona, nie mozesz dodać więcej piesków! Usuń niechcianego pieska z kolekcji!")
    } else if (favorites.includes(this.state.image)) {
      alert("Ten piesek został juz dodany :(")
    }
    else {
      favorites.push(this.state.image);
      this.setState({
        favoriteImages: favorites
      })
    }
  }

  handleRemoveClick = (index) => {
    const favorites = [...this.state.favoriteImages];
    favorites.splice(index, 1)
    this.setState({
      favoriteImages: favorites
    })
  }

  render() {
    return (
      <div className="App" >
        <Form image={this.state.image} click={this.handleClick} />
        <div className="mainContainer">
          <Result image={this.state.image} addClick={this.handleAddClick} />
          <FavoriteDogs removeClick={this.handleRemoveClick} favorites={this.state.favoriteImages} />
        </div>
      </div>
    );
  }
}

export default App;