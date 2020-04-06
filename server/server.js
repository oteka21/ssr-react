import path from 'path'
import fs from 'fs'
import express from 'express'
import React from 'react'
import ReactDomServer from 'react-dom/server'
import { ServerLocation } from "@reach/router"


const app = express()
import App from '../src/app.js'


const PORT = 8000

app.use('/', express.static(path.resolve(__dirname, '..', "dist")))


app.use('/', (req,res,next) => {
  if(/\.(js)/.test(req.url)){
    next()
  }
  fs.readFile(path.resolve(__dirname, "..","dist/index.html"),"utf-8", (err, data)=> {
    if (err){
      return res.status(500).send("There was an error!")
    }
    res.send(data.replace(`<div id="app"></div>`, `<div id="app">${ReactDomServer.renderToString(<ServerLocation url={req.url}><App /></ServerLocation>)}</div>`))
  })
})

app.listen(PORT, ()=> {
  console.log(`App is listen in port ${PORT}!`)
})