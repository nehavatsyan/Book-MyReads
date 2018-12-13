import React from 'react'
import Home from './Home'
import Search from './Search'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }

  moveBooks = (book, shelf) => {
    let s= shelf
    book.shelf = shelf;    
    const books = this.state.books;
    this.setState({books})

    BooksAPI.update(book, s).then(
    this.setState({
      books: this.state.books.filter(b => b.id !== book.id).concat(book),
    }))
    
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <Home
          books = {this.state.books}
          moveBooks = {this.moveBooks}
          />
        )}
      />

        <Route path="/search" render={() => (
          <Search
          moveBooks = {this.moveBooks}
          books = {this.state.books}
          />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
