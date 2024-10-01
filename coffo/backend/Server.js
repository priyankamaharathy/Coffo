const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const authRouter = require('./routes/auth'); // Adjust the path as needed
const checkoutRouter = require('./routes/checkout'); // Adjust the path as needed 

app.use('/api/auth', authRouter); // Authentication routes
app.use('/api/checkout', checkoutRouter);


mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
