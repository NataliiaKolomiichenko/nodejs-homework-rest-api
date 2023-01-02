const Contact = require('../../models/contact');
const { HttpError } = require("../../helpers");

const remove = async (req, res, next) => {
    try {
        const { contactId } = req.params;
        const results = await Contact.findByIdAndRemove(contactId);
        if (!results) {
            throw HttpError(404, "Not found");
        }
        res.json({
            status: 'success',
            code: 200,
            message: "contact deleted",
        })
    } catch (error) {
        const { status = 500, message = 'Server error' } = error;
        res.status(status).json({ message });
    }
};

module.exports = remove;