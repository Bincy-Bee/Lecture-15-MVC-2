const express = require('express');
const { connection } = require('./config/connection');
const { router } = require('./routes/user.routes');
const app = express();
app.use(express.json());
app.use(router)

app.listen(8090,()=>{
    console.log(`Server is listening on port : http://localhost:8090`);
    connection();
})