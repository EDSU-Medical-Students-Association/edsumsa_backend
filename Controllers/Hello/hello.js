const hello = async(req,res)=>{
    res.send('Hello world !')
}

const test = async(req,res)=>{
    res.send('testing !!!!!!!')
}

module.exports={hello, test}
