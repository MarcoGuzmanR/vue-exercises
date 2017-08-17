const express = require('express');
const path    = require('path');
const router  = express.Router();
const stories = require( './data/stories.js' );

// Set up Express app
const app = express();
app.use( express.static( path.join(__dirname + '/')) );

// Index for stories
router.get('/api/stories', ( req, res ) => {
  res.json( { stories: stories.allStories } );
});

// Get a story
router.get('/api/stories/:id', ( req, res ) => {
  const story =
    stories.allStories.find( story => story.id === parseInt( req.params.id ) );

  res.json( { story } );
});

// Create a story
router.post('/api/stories', ( req, res ) => {
  // let story = {
  //   id: books.allBooks.length + 1,
  //   name: req.body.name,
  //   author: req.body.author,
  //   category_id: req.body.category_id,
  //   publishedDate: req.body.publishedDate,
  //   user: req.body.user
  // };

  // if ( typeof book.publishedDate !== 'number' ) {
  //   book.publishedDate = new Date( book.publishedDate ).getTime();
  // }
  //
  // books.allBooks.push( book );
  //
  // res.json( { books: books.allBooks });
});

// Update a story
router.put('/api/stories/:id', ( req, res ) => {
  // let book =
  //   books.allBooks.find( book => book.id === parseInt( req.params.id ) );
  //
  // book.name          = req.body.name;
  // book.author        = req.body.author;
  // book.category_id   = req.body.category_id;
  // book.available     = req.body.available;
  // book.publishedDate = new Date( req.body.publishedDate ).getTime();
  // book.user          = req.body.user;
  //
  // res.json( { books: books.allBooks });
});

// Delete a story
router.delete('/api/stories/:id', ( req, res ) => {
  stories.allStories =
    stories.allStories.filter( story => story.id !== parseInt( req.params.id ) );

  res.json( { stories: stories.allStories });
});

app.use( '/', router );

app.listen( 8000, () => {
  console.log( 'Running on PORT 8000' );
});
