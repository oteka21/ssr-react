import path from 'path'
import fs from 'fs'
import express from 'express'
import React from 'react'
import ReactDomServer from 'react-dom/server'
import { ServerLocation } from '@reach/router'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'
import App from '../src/app.js'

const app = express()

const PORT = 8000

app.use(express.static(path.resolve(__dirname, '..', 'dist')))

app.use('/', (req, res, next) => {
  // if the request is for assets like js, jpg, png but i think this code can be better
  if (/\.(js)/.test(req.url)) {
    next()
  }

  // styled components ssr config
  const sheet = new ServerStyleSheet()
  let html = ''; let styleTags = ''
  try {
    html = ReactDomServer.renderToString(<StyleSheetManager sheet={sheet.instance}>
      <ServerLocation url={req.url}>
        <App />
      </ServerLocation>
    </StyleSheetManager>
    )
    styleTags = sheet.getStyleTags()
  } catch (err) {
    console.error(err)
  } finally {
    sheet.seal()
  }

  const data = fs.readFileSync(path.resolve(__dirname, '..', 'dist/index.html'), 'utf-8')
  const stylesregex = /(<head>.*)(<\/head>)/
  const htmlresponse = data.replace('<div id="app"></div>', `<div id="app">${html}</div>`).replace(stylesregex, `$1${styleTags}$2`)
  res.send(htmlresponse)
})

app.listen(PORT, () => {
  console.log(`App is listen in port ${PORT}!`)
})
