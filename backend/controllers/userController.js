import User from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

// Regiter user

export const register = async (req, res) => {
  try {
    const { fullname, username, password, confirmpassword, gender } = req.body;

    if (!fullname || !username || !password || !confirmpassword || !gender) {
      return res.status(400).json({ message: "Please Provide All Required Details.." });
    }

    if (password !== confirmpassword) {
      return res.status(400).json({ message: "Confirm password is not matched.." });
    }

    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: "User already exists, please login.." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const maleProfilePicture = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const femaleProfilePicture = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    await User.create({
      fullname,
      username,
      password: hashedPassword,
      profilePhoto: gender === "male" ? maleProfilePicture : femaleProfilePicture,
      gender
    });

    return res.status(201).json({ message: "User registered successfully" });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Server error" });
  }
};

// Login User

export const login = async (req, res)=>{

  try{

    const {username, password} = req.body;
    const user = await User.findOne({username});
    if (!user){
      return res.status(400).json({
        message: "username Or password is Incorrect..",
        success:false
      })

    };
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect){
      return res.status(400).json({
        message: "username Or password is Incorrect..",
        success:false
      })
    };

    const tokenData= {
      userId: user._Id
    };
    const token = jwt.sign(tokenData,process.env.JWT_SECRET_KEY,{expiresIn:'1d'});
    return res.status(200).cookie("token",token,{maxAge:1*24*60*60*1000, httpOnly:true, sameSite:'strict'}).json(
      { 
        _id:user._id,
        fullname:user.fullname,
        username:user.username,
        profilePhoto:user.profilePhoto,
        message:"user Login Succesfull.."
      })


  }catch(error){
    console.log(error)
  }
};

export const logOut = async (req, res)=>{
  try{
    return res.status(200).cookie("token", "" , {maxAge:0}).json({
      message:"User logout succesfull.."
    })
  }catch(error){
    console.log(error)
  }
};


export const getOtherUser = async (req, res)=>{
  try{
    const logedInUser = req.id;
    const otherUser = await User.find({_id:{$ne:logedInUser}}).select(-password);
    return res.status(200).json(otherUser);
  }catch(error){
    console.log(error);
  }
}