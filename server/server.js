const express = require('express');
const cors = require('cors');
require('./config/mongoose.config');
const app = express();
const PORT = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(cors()); // Accept all origins
// frontend origin http://localhost:3000 // 59.33.21.2
app.use(cors({ origin: 'http://localhost:3000' }));

require('./routes/recipe.routes')(app);

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});