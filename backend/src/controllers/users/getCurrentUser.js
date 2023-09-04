const getCurrentUser = async (req,res) => {
    console.log(req.user);
    const { _id, name, email, avatarURL, birthday, phone, location } = req.user;


    res.json({ _id, name, email, avatarURL, birthday, phone, location });
    console.log(res.json({ _id, name, email, avatarURL, birthday, phone, location }));
};

module.exports = getCurrentUser;