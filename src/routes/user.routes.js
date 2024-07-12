import { Router } from "express";
import { registerUser } from "../controllers/user.controllers.js";
import { upload } from "../middlewares/multer.middleware.js";
// import { resourceUsage } from "process";

const router = Router();


router.route("/register").post(
    upload.fields([
        {
            name:"profileImage",
            maxCount:1
        },
        {
            name:"coverImage",
            maxCount:1
        }
    ]
),registerUser)


export default router;