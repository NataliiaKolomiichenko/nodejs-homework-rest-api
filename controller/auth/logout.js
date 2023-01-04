const User = require('../../models/user');
const { HttpError } = require('../../helpers');

const logout = async (req, res) => {
    const { _id } = req.user;

    const user = await User.findOne({ _id });
    if (!user) {
        throw HttpError(401);
    }

    await User.findByIdAndUpdate(_id, { token: '' });

    res.status(204).json();
} 

module.exports = logout;