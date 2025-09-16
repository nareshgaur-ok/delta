const dotenv = require("dotenv");
const express = require("express");
const cors = require("cors");
const connectDB = require("../config/db");
const cron = require("node-cron"); 
const userRoutes = require("../routes/userRoutes");
const productRoutes = require("../routes/productRoutes");
const cartRoutes = require("../routes/cartRoutes");
const checkoutRoutes = require("../routes/checkoutRoutes");
const orderRoutes = require("../routes/orderRoutes");
const uploadRoutes = require("../routes/uploadRoutes");
const adminRoutes = require("../routes/adminRoutes");
const productAdminRoutes = require("../routes/productAdminRoutes");
const adminOrderRoutes = require("../routes/adminOrderRoutes");
const paymentRoutes = require("../routes/payments.routes");

const app = express();
app.use(express.json());
app.use(
  cors(
  //   {

  //   origin: ["https://bazar-chi-ten.vercel.app"],
  //   credentials: true,
  //   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  // }
)
);

dotenv.config();
const PORT = process.env.PORT || 3000;

connectDB();

app.get("/", (req, res) => {
  res.send("Welcome Rabbits Its API");
});

// API Routes
app.use("/api", paymentRoutes);
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/checkout", checkoutRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/upload", uploadRoutes);

//Admin
app.use("/api/admin/users", adminRoutes);
app.use("/api/admin/products", productAdminRoutes);
app.use("/api/admin/orders", adminOrderRoutes);

// Cron Job to Ping the Server (HTTP Request)
cron.schedule('*/5 * * * *', async () => { // Runs every 5 minutes
  try {
    // Send an HTTP request to your server's endpoint to keep it alive
    const response = await axios.get(`https://metafit-services-5skv.onrender.com/ping`);
  } catch (error) {
  }
});

// Define a simple ping route to respond to the cron job request
app.get('/ping', (req, res) => {
  res.status(200).send('Server is alive!');
});


app.listen(PORT, () => {
  console.log(
    `server is running on ${
      process.env.NODE_ENV === "production" ? "https" : "http"
    }://localhost:${PORT}`
  );
});
