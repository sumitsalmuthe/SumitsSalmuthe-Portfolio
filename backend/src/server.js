require("dotenv").config();

const app = require("./app");
const { verifyMailer } = require("./config/mail");

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await verifyMailer();

    app.listen(PORT, () => {
      console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

startServer();