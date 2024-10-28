const mongoose=require('mongoose')

mongoose.connect(process.env.DATABASE).then(res=>{
    console.log("server connected to db");
    
}).catch(err=>{
    console.log(err);
    
})
