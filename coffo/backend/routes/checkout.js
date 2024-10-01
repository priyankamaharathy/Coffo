const express = require('express');
const Checkout = require('../models/Checkout');
const router = express.Router();
router.post('/', async (req, res) => {
  const { userDetails, products } = req.body;

  try {
    const newCheckout = new Checkout({
      userDetails,
      products,
      date: new Date(),
    });

    await newCheckout.save();
    res.status(201).json({ message: 'Checkout details saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to save checkout details' });
  }
});

module.exports = router;
