const express = require("express");
// const agentModule = require("./agent");
const { initializeAgent, runChatMode } = require("./agent.js");

const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

let name = ""; // Variable to store the name

// Route to get the name
app.get("/story", async (req, res) => {
  // const { agent, config } = await agentModule.initializeAgent();
  const { agent, config } = await initializeAgent();
  const { virtue } = req.query;
  const prompt = `Generate a short story (about 100 words) about the importance of Integrity, including a real-life personality who exemplified this virtue. Format the response as JSON with "personality" and "story" fields.`;

  // const strArray = await agentModule.runChatMode(prompt, agent, config);
  const strArray = await runChatMode(prompt, agent, config);

  res.send(strArray.join(""));
  // res.send(`hi ${virtue}`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
