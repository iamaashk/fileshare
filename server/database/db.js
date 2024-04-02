import mongoose from "mongoose";

const MONGODB_URL =`mongodb+srv://adnan:adnan@fileshare.qkpwc6o.mongodb.net/?retryWrites=true&w=majority&appName=fileshare`;
const DBConnection = async ()=>{
    try {
        
        const config = {
            autoIndex: false,
            useNewUrlParser: true,
          };

          console.log("Database is connected");
          return mongoose.connect(MONGODB_URL, {config});
          console.log("Database is connected");
    } catch (error) {
        console.error('Error while connecting to database',error.message);
    }
}

export default DBConnection;