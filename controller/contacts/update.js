const Contact = require('../../models/contact');
const { HttpError } = require("../../helpers");

const update = async (req, res, next) => {
    try {
        const { contactId } = req.params;
        const contactBody = req.body;

        const changedContact = await Contact.findByIdAndUpdate(contactId, contactBody, {new: true});
        if (!changedContact) {
            throw HttpError(404, "Not found");
        }
        res.json({
            status: 'success',
            code: 200,
            data: { changedContact },
        })
    } catch (error) {
        const { status = 500, message = 'Server error' } = error;
        res.status(status).json({ message });
    }
};

module.exports = update;