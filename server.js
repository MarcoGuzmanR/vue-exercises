const express = require('express');
const path    = require('path');

// Set up Express app
const app = express();
app.use( express.static( path.join(__dirname + '/')) );

app.listen( 8000, () => {
  console.log( 'Running on PORT 8000' );
});
