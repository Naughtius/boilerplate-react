const path = require('path')
const express = require('express')

const app = express()

const PORT = process.env.PORT || 3000

app.use('/', express.static(path.join(__dirname, 'dist')))

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
})

app.listen(PORT, () => console.log(`App has been started on port ${PORT}`))

// http://127.0.0.1:3000
