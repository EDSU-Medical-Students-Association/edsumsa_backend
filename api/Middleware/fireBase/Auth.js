const admin = require('firebase-admin');
const {authCredentials} = require('../../Config/fireBase/credentials');
// const parsedCredentials = JSON.parse(credentials);

admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(authCredentials)),
});
const verifyToken = async(req,res,next)=>{
    try{

        const bearerHeader = req.headers['authorization']
        if(bearerHeader){
            const bearer = bearerHeader.split(' ')[1]
            //verify token
            await admin.auth().verifyIdToken(bearer)
            next();
        }
        else{
            res.status(404).send({error:'unauthorized access'})
        }
    }
    catch(err){
        res.status(404).send(err);
    }
}

const getUserId = async(req)=>{
    try{

        const bearerHeader = req.headers['authorization']
        if(bearerHeader){
            const bearer = bearerHeader.split(' ')[1]
            //verify token
           const decodedToken = await admin.auth().verifyIdToken(bearer);
            const userId = decodedToken.uid;
            return userId;
        }
        else{
            return({error:'unauthorized access'})
        }
    }
    catch(err){
        return(err);
    }
}


module.exports = {
    verifyToken,
    getUserId,
};
