import express from 'express'
// const express = require('express');

const app = express();

app.get('/',(req, res)=>{
    res.send('Hello Nodejs')
})

app.listen(3001,()=>{
    console.log("server is started on port '3001")
})