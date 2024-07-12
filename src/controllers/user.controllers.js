import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.models.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js"


const registerUser = asyncHandler( async (req,res) => { 
    // get user detail 
    // username
    // email
    // fullname
    // password
    // profile image
    // cover image
    // bio
    // join date
    // gender

    // validation for username (is it unique) || empty
    // validation for email (corrent formate) || empty front-end
    
    // check user exists form username || email
    //check for images 

    // if images -> upload them to cloudinary and check for upload

    // creat user object - creat enetry in db calls

    // remove password and refreshtoken form db res
    
    //check for user creation
    // send the res


    const {
        username,
        email,
        fullName,
        password,
        bio,
        joinDate,
        gender
    } = req.body
    // console.log(req)
    console.log(req.body)
    // cheking for field is empty or not
    if (
        [username,email,fullName,password].some((field) => field?.trim() === "")
    ) {
        throw new ApiError(400, "All fields are required")
    }

    //cheking of existed User
    const existedUser = await User.findOne({
        $or: [{username},{email}]
    })
    
    if(existedUser){
        throw new ApiError(409,"Username or email already existed")
    }
    
    console.log(req.files)

    const profileImageLocalPath = req.files?.profileImage[0]?.path;
    const coverImageLocalPath = req.files?.coverImage[0]?.path;//make a default image 

    if (!profileImageLocalPath||!coverImageLocalPath) {
        throw new ApiError(400, "Avatar and cover image file is required")
    }

    const profileImage = await uploadOnCloudinary(profileImageLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if (!profileImage) {
        throw new ApiError(400, "Profile Image file is required")
    }
   
    const user = await User.create({
        fullName,
        email,
        password,
        username: username.toLowerCase(),
        profileImage:profileImage.url,
        coverImage: coverImage.url || "",
        bio: bio||"",
        joinDate: Date.now(),
        gender: gender || "",
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refeshToken" 
    )

    if(!createdUser){
        throw new ApiError(500,"registration failed")
    }

    return res.status(201).json(
        new ApiResponse(200,createdUser,"User is registered")
    )

})

const loginUser = asyncHandler( async (req,res) => {
    //req.body -- username or email and password
    //verify karna ha for empty
    //check in database
    //check the password
    //user ko refresh token and access token
    //send res

    const { username , email, password} = req.body

    if([username,email,password].some((fields)=>fields?.trim()==="")){
        
    }
})

export 
    { 
        registerUser,

    }