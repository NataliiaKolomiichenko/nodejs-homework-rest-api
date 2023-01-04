const Contact = require('../../models/contact');

const add = async (req, res, next) => {
    try {
        const { _id: owner } = req.user;
        const newContactBody = req.body;

        const newContact = await Contact.create({ ...newContactBody, owner });
        console.log(newContact)
        res.json({
            status: 'success',
            code: 201,
            data: { newContact },
        })
    } catch (error) {
        const { status = 500, message = 'Server error' } = error;
        res.status(status).json({ message });
    }
};

module.exports = add;