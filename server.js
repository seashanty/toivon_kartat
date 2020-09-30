console.log("tämä koodi on 100% egologinen")

const express = require('express')
const app = express()
const port = 3000
app.listen(3000, () => console.log("kuuntelen"));
app.use(express.static("public"));

console.log("serveri_kaynnissa")
