const { default: mongoose } = require('mongoose');
const Cart = require('../models/Cart');
const Product = require('../models/Product');

// Add item to cart
const addItemToCart = async (req, res) => {
    const { userId, items } = req.body;
  
    try {
      let cart = await Cart.findOne({ userId });
  
      if (!cart) {
        cart = new Cart({ userId, items });
      } else {
        items.forEach((item) => {
          const productIndex = cart.items.findIndex((p) => p.productId.equals(item.productId));
          if (productIndex !== -1) {
            cart.items[productIndex].quantity += item.quantity;
          } else {
            cart.items.push(item);
          }
        });
      }
  
      await cart.save();
      res.status(200).json(cart);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Something went wrong', error });
    }
  };

// Remove item from cart
const removeItemFromCart = async (req, res) => {
  const { productId } = req.params;
  const userId = req.user._id;

  try {
    let cart = await Cart.findOne({ userId });

    if (cart) {
      cart.items = cart.items.filter(item => item.productId != productId);

      cart = await cart.save();
      return res.status(200).send(cart);
    } else {
      return res.status(404).send('Cart not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong');
  }
};

// Increase item quantity
const increaseItemQuantity = async (req, res) => {
  const { productId } = req.params;
  const userId = req.user._id;

  try {
    let cart = await Cart.findOne({ userId });

    if (cart) {
      let itemIndex = cart.items.findIndex(p => p.productId == productId);

      if (itemIndex > -1) {
        let productItem = cart.items[itemIndex];
        productItem.quantity += 1;
        cart.items[itemIndex] = productItem;
      }

      cart = await cart.save();
      return res.status(200).send(cart);
    } else {
      return res.status(404).send('Cart not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong');
  }
};

// Decrease item quantity
const decreaseItemQuantity = async (req, res) => {
  const { productId } = req.params;
  const userId = req.user._id;

  try {
    let cart = await Cart.findOne({ userId });

    if (cart) {
      let itemIndex = cart.items.findIndex(p => p.productId == productId);

      if (itemIndex > -1) {
        let productItem = cart.items[itemIndex];
        if (productItem.quantity > 1) {
          productItem.quantity -= 1;
          cart.items[itemIndex] = productItem;
        } else {
          return res.status(400).send('Quantity cannot be less than 1');
        }
      }

      cart = await cart.save();
      return res.status(200).send(cart);
    } else {
      return res.status(404).send('Cart not found');
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong');
  }
};

// Get cart items
const getCartItems = async (req, res) => {
    const userId = req.user.id;
  
    try {
      const cart = await Cart.findOne({ userId }).populate('items.productId');
      if (!cart) {
        return res.status(404).json({ message: 'Cart not found' });
      }
      res.status(200).json(cart);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error', error });
    }
  };

module.exports = {
  addItemToCart,
  removeItemFromCart,
  increaseItemQuantity,
  decreaseItemQuantity,
  getCartItems
};
