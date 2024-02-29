const { dbConnection } = require('../database/config');
const pkg = require('../../package.json');
const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.app.use(express.json())
        this.port = process.env.PORT;
        // Route default
        this.app.get('/info', (req, res) => {
            res.json({
                name: pkg.name,
                description: pkg.description,
                version: pkg.version,
            });
        });
        //CORS
        this.app.use(cors());
        // Index routes
        this.app.use('/api', require('../routes'));

        // Conectar a base de datos
        this.conectarDB();
    }

    async conectarDB() {
        await dbConnection();
    }

        
    listen() {

        this.app.listen(this.port, () => {
            console.log('Servidor https corriendo 🚀🔑 en puerto', this.port);
        });
    }

}




module.exports = Server;
