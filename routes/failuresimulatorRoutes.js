import express from "express";
import { getScenarios } from "../controllers/failureSimulatorController.js";

const router = express.Router();

router.get("/", getScenarios);

export default router;
