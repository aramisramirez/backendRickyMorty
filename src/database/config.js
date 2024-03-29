const mongoose = require('mongoose');



const dbConnection = async () => {

    try {

        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log('Base de datos online');

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de iniciar la base de datos');
    }


}

const secret = 'LOGIN__EXPRESSJS2021'



module.exports = {
    dbConnection,
    secret
}
