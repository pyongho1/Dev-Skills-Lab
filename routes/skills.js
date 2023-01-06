import { Router } from "express";
import { skills } from "../data/skill-data.js";
import * as skillsCtrl from "../controllers/skills.js";

const router = Router();

/* GET users listing. */

router.get("/", skillsCtrl.index);

export { router };
