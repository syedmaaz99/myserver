const express = require('express')
const app = express() // call express 
const port = 3000

app.use(express.json())



//  mongoose initializastion

const mongoose = require("mongoose")  // connet with atlas ==> online mongo db cloud
/// connection
 async function connectDb (){
   try{
    await mongoose.connect('mongodb+srv://syedmaaziqbal1:syedmaaz2045@cluster0.yhpatf4.mongodb.net/')
    console.log('database connected successfully')
  }
  catch (error){

    console.log(error)
    process.exit(1)
  }
}

connectDb() // calling

const userSchema = new mongoose.Schema({   // data ka naqsha
  username:String,
  email:String,
  phone:Number
})


const User = mongoose.model('user',userSchema)

app.post('/create',async(req,res)=>{
  const {username,email,phone}=req.body
  const user = new User ({
    username,email,phone
  })
  await user.save();
  res.status(200).json(user)

})

app.get('/getUser',async (req, res) => {
  const user = await User.find()
  res.status(200).json(user)
})

app.put('/update/:id', async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true})
  res.json(user)
})
app.delete('/delete/:id', async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id,req.body,{new:true})
  res.json(user)
})

app.get('/contact', (req, res) => {
  res.send('<h1>wellcome to contact pag</h1>')
})
app.get('/home-page', (req, res) => {
  res.send('<h2>wellcome to Home page</h2>')
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// mongodb+srv://syedmaaziqbal1:<syedmaaz2045>@cluster0.yhpatf4.mongodb.net/