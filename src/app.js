const database=require('./database.js')
const path=require('path')
const express= require('express')

const app=express()

//Define path for express config
const publicdirpath=path.join(__dirname,'../public')

//Setup static directory to serve
app.use(express.static(publicdirpath))

app.get('',(req,res)=>{
    res.render('index')
})

app.post("/company",express.json(), async (req, res) => {
    var responseFromService = database.SaveCompanyData(req.body, function(responseFromService,err) {
        res.send(responseFromService);
    });
 })

 app.post("/category",express.json(), async (req, res) => {
    var responseFromService = database.SaveCategoryDetails(req.body, function(responseFromService,err) {
        res.send(responseFromService);
    });
 })

app.listen(3000,()=>{
    console.log('Server is up');
})
