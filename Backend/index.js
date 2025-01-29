const express = require("express");
const cors = require("cors");
const translate = require("google-translate-api-x");
const connectDB = require("./config/db");
const translationRoutes=require('./routes/translationRoutes')

const app = express();
connectDB()
app.use(cors());
app.use(express.json());
app.use('/api',translationRoutes)
app.get('/',(req,res)=>{
    res.send('API Running')
})
app.post("/translate", async (req, res) => {
  const { text, targetLang } = req.body;
  try {
    const result = await translate(text, { to: targetLang });
    res.json({ translatedText: result.text });
  } catch (error) {
    res.status(500).json({ error: "Translation failed" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
