const mongoose = require('mongoose');
const connectToDB = async ()=>{
    try{
        const connection =await  mongoose.connect(process.env.CONNECTION_STRING);
        console.log(`connection with database is connection as ${connection.connection.host} and the name was ${connection.connection.name}`);
    }
    catch(err){
        console.log('Got Error In process as',err);
        process.exit(1);
    }
}

module.exports = connectToDB;