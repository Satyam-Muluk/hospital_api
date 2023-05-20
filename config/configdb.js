const mongoose = require('mongoose');
 async function main(){
    await mongoose.connect( "mongodb+srv://muluksatyam7:BrFsvxHdOgQNSUYT@cluster0.csqafzz.mongodb.net/?retryWrites=true&w=majority");
    console.log("Connection SuccessFull !!");
}
main().catch((error) =>{console.log("Connection Not Success Full !!");})
