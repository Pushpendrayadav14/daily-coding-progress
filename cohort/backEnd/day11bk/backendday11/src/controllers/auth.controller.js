const userModel = require("../models/user.model");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");


//post //api/auth.register
 async function registerController(req, res){
  const { username, email, password, bio, profileImg } = req.body;
  const isAlreadyExist = await userModel.findOne({
    $or: [{ username }, { email }],
  });
  if (isAlreadyExist) {
    return res.status(409).json({
      message:
        "user aleardy exist" +
        (isAlreadyExist.email == email
          ? "email is already axist..."
          : "username is already exist.."),
    });
  }
  //before storing paaword on the data base passwored is hashed
  const hash = crypto.createHash("sha256").update(password).digest("hex");
  //storing the data on databse geting from user side
  const user = await userModel.create({
    username,
    email,
    bio,
    profileImg,
    password: hash,
  });
  //creating jwt token
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  //send token to the client side and store in the cookie storage
  res.cookie("token", token);

  //sending respone to the client side
  res.status(201).json({
    message: "user is created successfully...",
    user: {
      username: user.username,
      email: user.email,
      bio: user.bio,
      profileImg: user.profileImg,
    },
  });
}

//post /api/auth/login
async function loginController(req, res){
  const { email, username, password } = req.body;

  //username and password
  //email and password
  const user = await userModel.findOne({
    $or: [{ username: username }, { email: email }],
  });
  if (!user) {
    return res.status(404).json({
      message: "invalid username or email..",
    });
  }

  const hash = crypto.createHash("sha256").update(password).digest("hex");
  const isPasswordValid = hash == user.password;
  if (!isPasswordValid) {
    return res.status(401).json({
      message: "evalid password..",
    });
  }

  //generating token
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  //store toekn in cookie storage
  res.cookie("token", token);

  //respone to client
  res.status(201).json({
    message: "user login successfully...",
    user: {
      username: user.username,
      email: user.email,
      bio: user.bio,
      profileImg: user.profileImg,
    },
  });
}

module.exports = {
    registerController,loginController
}