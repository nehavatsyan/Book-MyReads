import React, {Component} from 'react';
import Book from './Book'
import { Link } from 'react-router-dom'
import { PropTypes } from 'prop-types'

class Home extends Component {

    static propTypes = {
        books: PropTypes.array.isRequired,
        onChange: PropTypes.func.isRequired
      }
    
    render() {
        return (
            <div className="list-books">
            <div className="list-books-title">
              <h1>My Reads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h3 className="bookshelf-title">Currently Reading</h3>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                          this.props.books
                          .filter(book => book.shelf === 'currentlyReading')
                          .map(book => (
                            <li key={book.id}>
                              <Book
                                book={book}
                                moveBooks={this.props.moveBooks}
                                currentShelf="currentlyReading"
                              />
                            </li>
                          ))
                      }      
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h3 className="bookshelf-title">Want to Read</h3>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {
                          this.props.books
                          .filter(book => book.shelf === 'wantToRead')
                          .map(book => (
                            <li key={book.id}>
                              <Book
                                book={book}
                                moveBooks={this.props.moveBooks}
                                currentShelf="wantToRead"
                              />
                            </li>
                          ))
                      }      
                    </ol>
                  </div>
                </div>
                <div className="bookshelf">
                  <h3 className="bookshelf-title">Read</h3>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {
                          this.props.books
                          .filter(book => book.shelf === 'read')
                          .map(book => (
                            <li key={book.id}>
                              <Book
                                book={book}
                                moveBooks={this.props.moveBooks}
                                currentShelf="read"
                              />
                            </li>
                          ))
                      }      
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
        )
    }
}

export default Home;