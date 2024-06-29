const express = require('express');
const  mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./Routes/index')
require('dotenv').config();
const limiter = require('./MiddleWare/limiter/limiter');  
const DB = require('./Config/mongoDb/mongoDb')
const app = express();
app.use(express.json());
app.use(cors({
    origin:'*',
}));
app.use(limiter);



try{
    if(DB!=''){
        mongoose.connect(DB)
          .then(() => console.log('DB connected'))
            .catch(err => console.error('Failed to connect to DB:', err));
    }

}
catch(err){
    console.log(err)
}



app.use('/',routes);






const port = 8001 || process.env.port;
app.listen(port,()=>{
    console.log('server running on port ' + port)
});
