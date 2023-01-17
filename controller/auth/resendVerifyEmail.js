const { User } = require('../../models');
const { HttpError, sendEmail } = require('../../helpers');

const { BASE_URL } = process.env;

const resendVerifyEmail = async (req, res) => {
    const { email } = req.body;
    console.log(req.body)
    const user = await User.findOne({ email });
    
    if (!user) {
        throw HttpError(404);
    };

    if (email === '' || req.body === {}) {
        throw HttpError(400, 'Missing required field email');
    };

    if (user.verify) {
        throw HttpError(400, 'Verification has already been passed');
    };

    const verifyEmail = {
        to: email,
        subject: "Verify your email",
        html: `<a target="_blank" href="${BASE_URL}/api/users/verify/${user.verificationToken}">Click verify email</a>`
    }

    await sendEmail(verifyEmail);

    res.json({
        message: 'Verify email resend',
    })
}

module.exports = resendVerifyEmail;