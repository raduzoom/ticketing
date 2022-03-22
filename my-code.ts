
const connectMongoDb =async () => {
  
    require("dotenv").config();
    let mongodbAddress = "mongodb://auth-mongo-srv:27017/auth";
    console.log(process.env);
    if (process.env.ENV === "LOCAL") {
      console.log("it is local");
      mongodbAddress = "mongodb://localhost:27017/auth";
    }
    await mongoose.connect(mongodbAddress); 
  }
  