const User = require('../models/userModel');

// Reset password
exports.resetPassword = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);

        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        user.password = '123456';
        await user.save();

        res.status(200).json({ message: 'Password has been reset to 123456' });
    } catch (error) {
        res.status(500).json({ message: 'Error resetting password', error });
    }
};

// Change password
exports.changePassword = async (req, res) => {
    try {
        const { password, newpassword } = req.body;

        if (req.user.password !== password) {
            return res.status(400).json({ message: 'Current password is incorrect' });
        }

        req.user.password = newpassword;
        await req.user.save();

        res.status(200).json({ message: 'Password has been changed successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error changing password', error });
    }
};
