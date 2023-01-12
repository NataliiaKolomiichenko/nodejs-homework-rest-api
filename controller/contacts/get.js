const { Contact } = require('../../models');
const { HttpError } = require("../../helpers");

const get = async (req, res, next) => {
    try {
        const { _id: owner } = req.user;
        const contacts = await Contact.find({owner}, '-createdAt -updatedAt');
        if (contacts.length === 0) {
            throw HttpError(404, "Not found");
        }
        res.json({
            status: 'success',
            code: 200,
            data: { contacts },
        })
    } catch (error) {
        const { status = 500, message = 'Server error' } = error;
        res.status(status).json({ message });
    }
};

module.exports = get;