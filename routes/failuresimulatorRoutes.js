import express from "express";
import { getScenarios } from "../controllers/failuresimulatorController.js";

const router = express.Router();

router.get("/", getScenarios);

export default router;
