const express = require("express");
const connectDB = require("./dbConnect");
const app = express();
require("dotenv").config();
const cookieParser = require("cookie-parser");
const cors = require("cors");
const authRouter = require("./routes/authRouter");
const productRouter = require("./routes/productRouter");
const cartRouter = require("./routes/cartRouter");
const couponRouter = require("./routes/couponRouter");
const userRouter = require("./routes/userRouter");
const deliveryInfoRouter = require("./routes/deliveryInfoRouter");
const orderRouter = require("./routes/orderRouter");
const cloudinary = require("cloudinary").v2;
const path = require("path");


app.use(express.json({ limit: "10mb" }));
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: "https://checking-hr33.vercel.app/"
  
  })
);
cloudinary.config({
    secure: true,
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
  });

app.use("/auth", authRouter);
app.use("/product",productRouter);
app.use("/cart",cartRouter);
app.use("/coupon",couponRouter);
app.use("/user",userRouter);
app.use("/delivery",deliveryInfoRouter);
app.use("/order",orderRouter);




app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "client", "build")));
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});



connectDB().then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("Server is lisen on Port 4000")
    })

})