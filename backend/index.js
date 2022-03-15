const express = require('express');
const mongoose = require('mongoose');

const cors = require('./middleware/cors');

start();

async function start(){
    //TODO: Give DB appropriate name for the project
    const dbName = 'data';
    //TODO: Change PORT Number
    const PORT = 3030;
    try {
        await mongoose.connect(`mongodb://localhost:27017/${dbName}`, {
            useUnifiedTopology: true,
            useNewUrlParser: true
        });
        console.log('Database ready');
    } catch (error) {   
        console.error('Database connection failed');
        process.exit(1);
    }
    
    const app = express();
    app.use(express.json());
    app.use(cors());

    app.get('/', (req,res) => {
        res.json({message: 'REST servise operational'});
    });

    app.listen(PORT, () => console.log(`REST service started on port ${PORT}`));
}