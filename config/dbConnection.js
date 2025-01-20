const mongoose = require("mongoose")


const connectDb = async () => {
    try {
        // const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        const connect = await mongoose.connect("mongodb+srv://thomas_fathy:admin@mycluster0.wsqfaak.mongodb.net/trainning_backend?retryWrites=true&w=majority");
        console.log("Database connected ", connect.connection.host, connect.connection.name)

    } catch (err) {
        console.log(err)
        process.exit(1)
    }
}

module.exports = connectDb