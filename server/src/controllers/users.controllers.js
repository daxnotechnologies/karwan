const users = require("../models/users.models");

//////////////////////////////////////////////////////////////////////////////
async function addUser(req, res) {
  const { userName, email, contact, address, profilePic, password } = req.body;
  try {
    const preUser = await users.findOne({ email: email });
    console.log(preUser);
    if (preUser) {
      res.status(404).send("This user already exists");
    } else {
      const addUser = new users({
        userName,
        email,
        password,
        contact,
        address,
        profilePic,
      });
      await addUser.save();
      res.status(201).json(addUser);
      console.log(addUser);
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
}

//////////////////////////////////////////////////////////////////////////////
async function getUsers(req, res) {
  try {
    const usersData = await users.find();
    res.status(200).json(usersData);
    console.log(usersData);
  } catch (error) {
    res.status(404).send(error);
  }
}

//////////////////////////////////////////////////////////////////////////////
async function getSingleUser(req, res) {
  const userId = req.params.id;
  try {
    const userData = await users.findById(userId);
    res.status(200).json(userData);
    console.log(userData);
  } catch (error) {
    res.status(404).send(error);
  }
}

//////////////////////////////////////////////////////////////////////////////
async function deleteUser(req, res) {
  const userId = req.params.id;
  try {
    await users.findByIdAndDelete(userId);
    res.status(201).json({ msg: "User Deleted" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: err.message });
  }
}

module.exports = { getUsers, getSingleUser, addUser, deleteUser };
