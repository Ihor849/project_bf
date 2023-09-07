const {Pet} = require("../../models");
const { httpError } = require("../../helpers");

const addPet = async(req, res)=>{

    const { _id: owner } = req.user;
    
    if (!req.body || !req.file) throw httpError(400, "Missing any field");

    const petAvatarURL = req.file.path;
    console.log(petAvatarURL);

    const createdPet = await Pet.create({
        ...req.body,
        petAvatarURL,
        owner,
      });
    
      res.status(201).json(createdPet);
};

module.exports = addPet;