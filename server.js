const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
require('dotenv').config()
const mongoose = require('mongoose')
const User = require("./User")


const run = async () => {
  // const user = new User({ name: "Luxi", age: 26 })
  // await user.save()
  const user = await User.create({ name: 'Luxii', age: 34})
  console.log(user)
}
// const user = new User({ name: "Luxi", age: 26 })
// user.save().then(() => console.log("User Saved"))
run()


mongoose.connect(
  process.env.DB_URL, ()=> {
  console.log('connected')
  }
  // e => console.error(e)
).catch(err => console.log(err), 'reason')

// const server = express()
// const PORT = 3500





// // console.log(process.env.DB_URL)
// server.listen(PORT, () => console.log('Listening on port ', PORT))