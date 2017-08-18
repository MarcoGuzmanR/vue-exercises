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
  let story =
    stories.allStories.find( story => story.id === parseInt( req.params.id ) );

  story.plot       = req.body.plot;
  story.upvotes    = req.body.upvotes;
  story.writer     = req.body.writer;
  story.created_at = req.body.created_at;
  story.updated_at = req.body.updated_at;

  res.json( { stories: stories.allStories });
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
