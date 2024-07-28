const express = require('express');
const router = express.Router();
const {
  addItemToCart,
  removeItemFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  getCartItems
} = require('../controllers/cart');
const { authenticateToken } = require('../utils/jwt');

router.post('/add', authenticateToken, addItemToCart);
router.delete('/remove/:productId', authenticateToken, removeItemFromCart);
router.put('/increase/:productId', authenticateToken, increaseItemQuantity);
router.put('/decrease/:productId', authenticateToken, decreaseItemQuantity);
router.get('/', authenticateToken, getCartItems);

module.exports = router;
