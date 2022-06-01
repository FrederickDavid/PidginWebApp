const userModel = require("../model/userModel");
const verifiedModel = require("../model/verifiedModel");
require("dotenv").config();
const cloudinary = require("../utils/cloudinary");
const transport = require("../utils/email");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { error } = require("console");

const getAllUser = async (req, res) => {
  try {
    const user = await userModel.find();

    res.status(200).json({
      status: "All Users Found Successfully",
      totalUser: user.length,
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      status: "No Users in this database",
      message: error.message,
    });
  }
};
const getSingleUser = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);

    res.status(200).json({
      status: "Single User Found Successfully",
      data: user,
    });
  } catch (error) {
    res.status(404).json({
      status: `No user with such ID:${req.param.id}`,
      message: error.message,
    });
  }
};
const updateUser = async (req, res) => {
  try {
    const { userName, email, bio, contact } = req.body;
    await cloudinary.uploader.destroy(req.params.id);
    const image = await cloudinary.uploader.upload(req.file.path);
    const mainUser = await userModel.findByIdAndUpdate(
      req.params.id,
      {
        userName,
        email,
        bio,
        contact,
        avatar: image.secure_url,
        avatarID: image.public_id,
      },
      { new: true }
    );

    res.status(200).json({
      status: "Successfully Updated this user",
      data: mainUser,
    });
  } catch (error) {
    res.status(404).json({
      status: "Can't Update this user",
      message: error.message,
    });
  }
};
const removeUser = async (req, res) => {
  try {
    await userModel.findById(req.params.id);
    await cloudinary.uploader.destroy(req.params.id);
    const mainUser = await userModel.findByIdAndDelete(req.params.id);

    res.status(200).json({
      status: "Successfully Deleted this User",
      data: mainUser,
    });
  } catch (error) {
    res.status(404).json({
      status: "Can't Delete this user",
      message: error,
    });
    console.log(error);
  }
};
const createUser = async (req, res) => {
  try {
    const { email, userName, password, bio, contact } = req.body;

    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    const image = await cloudinary.uploader.upload(req.file.path);

    const tokenValue = crypto.randomBytes(64).toString("hex");
    const myToken = jwt.sign({ tokenValue }, process.env.SECRET, {
      expiresIn: process.env.MINUTE,
    });

    const user = await userModel.create({
      userName,
      email,
      password: hashed,
      bio,
      contact,
      avatar: image.secure_url,
      avatarID: image.public_id,
      verifiedToken: myToken,
    });

    await verifiedModel.create({
      token: myToken,
      userID: user._id,
      _id: user._id,
    });

    const mailOptions = {
      from: "ajmarketplace52@gmail.com",
      to: email,
      subject: "Account verification",
      html: `
            <h3>
            Thanks for signing up with us ${user.userName}, Please use the <a
            href="http://localhost:9999/api/user/${user._id}/${myToken}"
            >Link</a>t o complete your sign up
            </h3>
            `,
    };

    transport.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log(err.message);
      } else {
        console.log("Email has been sent to your inbox", info.response);
      }
    });

    res.status(201).json({
      message: "Check your inbox to continue...!",
    });
  } catch (error) {
    res.status(404).json({
      status: "Sign In Failed",
      message: error,
    });
    console.log(error);
  }
};

const verifyUser = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    if (user) {
      if (user.verifiedToken !== "") {
        await userModel.findByIdAndUpdate(
          user._id,
          {
            isVerify: true,
            verifiedToken: "",
          },
          { new: true }
        );
        await verifiedModel.findByIdAndUpdate(
          user._id,
          {
            userID: user._id,
            token: "",
          },
          { new: true }
        );

        res.status(201).json({
          message: "Verification complete, you can go sign in now!",
        });
      } else {
        res.status(404).json({
          message: error.message,
        });
      }
    } else {
      res.status(404).json({
        message: error.message,
      });
    }
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

//Sign in user
const signInUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email });

    if (user) {
      const check = await bcrypt.compare(password, user.password);
      if (check) {
        const token = jwt.sign(
          {
            _id: user._id,
            email: user.email,
            userName: user.userName,
          },
          process.env.SECRET,
          { expiresIn: process.env.DATE }
        );

        const { password, ...info } = user._doc;

        res.status(200).json({
          message: "SignIn Successful",
          data: { token, ...info },
        });
      } else {
        res.status(400).json({
          message: "Incorrect password",
        });
      }
    } else {
      res.status(400).json({
        message: "You'er not a user",
      });
    }
  } catch (error) {
    res.status(404).json({
      status: "Failed to SignIn",
      message: error.message,
    });
  }
};

module.exports = {
  getAllUser,
  getSingleUser,
  updateUser,
  removeUser,
  createUser,
  signInUser,
  verifyUser,
};
