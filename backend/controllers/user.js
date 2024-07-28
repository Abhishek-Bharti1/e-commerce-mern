const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { generateToken } = require('../utils/jwt');



// Login user
const loginUser = async (req, res) => {
    const { username, password } = req.body;
    try {
      // Check if the user exists
      let user = await User.findOne({ username });
  
      if (!user) {
        // If the user does not exist, create a new user and log them in
        user = new User({ username, password });
        await user.save();
        const token = generateToken(user);
        return res.status(201).json({ token, message: 'New user created and logged in' });
      }
  
      // If the user exists, check the password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ message: 'Invalid credentials' });
      }
  
      // If the credentials are valid, log the user in
      const token = generateToken(user);
      res.json({ token, message: 'Logged in successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Server error', error });
    }
  };
  

module.exports = {
  loginUser,
};
