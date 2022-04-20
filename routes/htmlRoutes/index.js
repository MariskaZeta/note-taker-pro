const path = require("path");
const router = require("express").Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/html'));
});

router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/notes.html'));
});

// GET request for if user types in a route that does not exist
router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

module.exports = router;
