const axios = require("axios");

const translateText = async (req, res) => {
  const { originalText, language } = req.body;

  if (!originalText || !language) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const response = await axios.post(
      "https://api-free.deepl.com/v2/translate",
      {
        text: originalText,
        target_lang: language.toUpperCase(), 
      },
      {
        headers: { Authorization: "DeepL-API-Key YOUR_API_KEY" }, 
      }
    );

    res.json({
      originalText,
      translatedText: response.data.translations[0].text,
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: "Translation failed", details: error.message });
  }
};

module.exports = { translateText };
