// Madison Kendall note taker pro app code
const express = require("express");

// API routes
const apiRoutes = require('./routes/apiRoutes');
// HTML routes
const htmlRoutes = require('./routes/htmlRoutes');

// tells node that we are creating an express server
const app = express();

// setting initial port to 3000
const PORT = process.env.PORT || 3001;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
