import mongoose from "mongoose";
import FailureScenario from "../models/FailureScenario.js";
import "dotenv/config";

await mongoose.connect(process.env.MONGO_URI);

await FailureScenario.deleteMany();

await FailureScenario.insertMany([
  {
    level: "easy",
    domain: "Finance",
    title: "Cash Runway Reality Check",
    situation:
      "You realize you only have 2 months of cash left. Revenue exists but is inconsistent.",
    options: [
      {
        text: "Cut marketing spend immediately",
        feedback:
          "This preserves cash but can slow down growth."
      },
      {
        text: "Increase prices for new customers",
        feedback:
          "This improves cash flow but risks churn."
      },
      {
        text: "Do nothing and hope revenue stabilizes",
        feedback:
          "Ignoring runway issues often leads to sudden shutdowns."
      }
    ],
    learning: [
      "Understanding startup runway",
      "Cash flow management"
    ]
  },

  {
    level: "easy",
    domain: "Human Resources",
    title: "Early Team Burnout",
    situation:
      "A key team member feels overworked and hints they may quit.",
    options: [
      {
        text: "Ask them to push through",
        feedback:
          "Short-term speed, long-term burnout risk."
      },
      {
        text: "Reduce workload",
        feedback:
          "Protects team morale but slows delivery."
      }
    ],
    learning: [
      "Managing burnout",
      "Early team leadership"
    ]
  },





  {
    id: 1,
    level: "Easy",
    domain: "Finance",
    title: "Cash Runway Reality Check",
    situation:
      "You realize you only have 2 months of cash left. Revenue exists but is inconsistent, and marketing spend is high.",

    options: [
      {
        text: "Cut marketing spend immediately",
        feedback:
          "This preserves cash and extends runway, but may slow customer acquisition. Founders often underestimate how hard it is to restart momentum."
      },
      {
        text: "Increase prices for new customers",
        feedback:
          "This improves cash flow, but can increase churn if value is not clearly communicated."
      },
      {
        text: "Do nothing and hope revenue stabilizes",
        feedback:
          "Many startups fail not because of bad ideas, but because they wait too long to act on cash signals."
      }
    ],

    learning: [
      "Understanding startup runway",
      "Balancing growth vs cash flow"
    ]
  },

  {
    id: 2,
    level: "Easy",
    domain: "Human Resources",
    title: "Early Team Burnout",
    situation:
      "A key team member feels overworked and hints they may quit. You can’t afford to hire right now.",

    options: [
      {
        text: "Ask them to push through for a few weeks",
        feedback:
          "This may work short-term, but sustained pressure often leads to burnout or resentment."
      },
      {
        text: "Reduce workload and slow development",
        feedback:
          "This protects the team, but delays progress. Many strong teams survive because founders protect people early."
      },
      {
        text: "Ignore the concern and focus on shipping",
        feedback:
          "Ignoring early warning signs often leads to sudden exits that hurt the startup more later."
      }
    ],

    learning: [
      "Managing burnout in early teams",
      "Founder empathy and leadership"
    ]
  },

  {
    id: 3,
    level: "Easy",
    domain: "Product",
    title: "Confusing User Feedback",
    situation:
      "Some users love your product, others don’t understand it at all. You’re unsure if the issue is the product or messaging.",

    options: [
      {
        text: "Add features requested by power users",
        feedback:
          "This deepens value for a few users but may widen the gap for new users."
      },
      {
        text: "Talk to confused users to understand them",
        feedback:
          "Direct conversations often reveal simple fixes founders overlook."
      },
      {
        text: "Pause development and rethink everything",
        feedback:
          "Pausing can help clarity, but long pauses often kill momentum."
      }
    ],

    learning: [
      "User interviews",
      "Product-market fit basics"
    ]
  },

  {
    id: 4,
    level: "Medium",
    domain: "Founder Conflict",
    title: "Vision Misalignment",
    situation:
      "You and your co-founder disagree on strategy. You want to focus on a niche; they want to go broad.",

    options: [
      {
        text: "Push your vision forward alone",
        feedback:
          "Clear leadership helps speed, but unresolved conflict can damage trust long-term."
      },
      {
        text: "Try both approaches simultaneously",
        feedback:
          "Splitting focus often leads to mediocre results in both directions."
      },
      {
        text: "Pause decisions and align deeply",
        feedback:
          "Difficult conversations early often prevent bigger failures later."
      }
    ],

    learning: [
      "Founder alignment",
      "Decision ownership in startups"
    ]
  },

  {
    id: 5,
    level: "Medium",
    domain: "Growth Strategy",
    title: "Aggressive Scaling Risk",
    situation:
      "You can scale fast by spending aggressively. If it works, growth explodes. If not, runway drops dangerously low.",

    options: [
      {
        text: "Go all-in on aggressive scaling",
        feedback:
          "This can work with strong metrics, but emotional decisions often ignore downside risk."
      },
      {
        text: "Scale slowly with strict metrics",
        feedback:
          "This balances growth and safety, but may lose speed in competitive markets."
      },
      {
        text: "Reject the opportunity and stay conservative",
        feedback:
          "This preserves safety, but founders sometimes regret missed momentum."
      }
    ],

    learning: [
      "Risk management",
      "Data-driven growth decisions"
    ]
  }



]);

console.log("Failure scenarios seeded");
process.exit();
