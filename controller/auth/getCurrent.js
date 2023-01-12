const { User } = require('../../models');
const { HttpError } = require('../../helpers');

const getCurrent = (req, res) => {
    const { _id, email, subscription } = req.user;

    const user = User.findOne({ _id });

    if (!user) {
        throw HttpError(401);
    }

    res.json({
        email,
        subscription,
    })
}

module.exports = getCurrent;