import path from 'path'
import fs from 'fs'
import express from 'express'
import React from 'react'
import ReactDomServer from 'react-dom/server'


const app = express()
import App from '../src/app.js'


const PORT = 8000


app.use('^/$', (req,res,next) => {
  fs.readFile(path.resolve(__dirname, "..","dist/index.html"),"utf-8", (err, data)=> {
    if (err){
      return res.status(500).send("There was an error!")
    }
    res.send(data.replace(`<div id="app"></div>`, `<div id="app">${ReactDomServer.renderToString(<App />)}</div>`))
  })
})


app.use(express.static(path.resolve(__dirname, '..', "dist")))

app.listen(PORT, ()=> {
  console.log(`App is listen in port ${PORT}!`)
})