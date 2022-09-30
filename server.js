// include packages 
const express = require('express');

// PORT designation and initialize
const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());











// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// function to start the express server
app.listen(PORT, () => {
   console.log(`Server is running on ${PORT}`); 
});