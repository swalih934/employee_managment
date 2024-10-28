require('dotenv').config()

const express = require('express')
const cors = require('cors')
const router = require('./Routes/routes')
require('./connection/fb')

const empServer = express()

empServer.use(cors())
empServer.use(express.json())
empServer.use(router)

const PORT = 3000 || process.env.PORT
empServer.listen(PORT, () => {
    console.log(`server running at : ${PORT}`);

})