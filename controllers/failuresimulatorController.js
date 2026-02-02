import FailureScenario from "../models/failureSimulator.js";

export const getScenarios = async (req, res) => {
  try {
    const { level } = req.query;

    const filter = { active: true };
    if (level) filter.level = level;

    const scenarios = await FailureScenario.find(filter)
      .sort({ createdAt: 1 });

    res.json(scenarios);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Failed to load scenarios"
    });
  }
};
