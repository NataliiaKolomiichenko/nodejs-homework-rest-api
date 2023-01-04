const Contact = require('../../models/contact');
const { HttpError } = require("../../helpers");

const updateStatusContact = async (req, res, next) => {
    try {
        const { contactId } = req.params;
        const contactBody = req.body;

        const changedFavorite = await Contact.findByIdAndUpdate(contactId, contactBody);
        if (!changedFavorite) {
            throw HttpError(404, "Not found");
        }
        res.json({
            status: 'success',
            code: 200,
            data: { changedFavorite },
        })
    } catch (error) {
        const { status = 500, message = 'Server error' } = error;
        res.status(status).json({ message });
    }
}

module.exports = updateStatusContact;