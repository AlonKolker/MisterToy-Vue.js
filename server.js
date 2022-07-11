const express = require('express')
const cookieParser = require('cookie-parser')

const toysService = require('./services/toys-service.js')
const app = express()
const port = 3030

// Express App Configuration:
app.use(express.static('public'))
app.use(cookieParser())
app.use(express.json())

app.get('/puki', (req, res) => {
  var visitCount = req.cookies.visitCount || 0
  visitCount++
  res.cookie('visitCount', visitCount)
  res.send('Hello Puki?!!')
})

app.get('/nono', (req, res) => {
  res.redirect('/')
})

// LIST
app.get('/api/car', (req, res) => {
  const { byVendor, pageIdx = 0 } = req.query

  const filterBy = {
    byVendor,
    pageIdx,
  }

  carService
    .query(filterBy)
    .then((cars) => res.send(cars))
    .catch((err) => res.status(500).send('Cannot get cars'))
})

// CREATE
app.post('/api/car', (req, res) => {
  const car = {
    vendor: req.body.vendor,
    price: +req.body.price,
  }
  carService
    .save(car)
    .then((savedCar) => res.send(savedCar))
    .catch((err) => res.status(500).send('Cannot save car'))
})

// UPDATE
app.put('/api/car/:carId', (req, res) => {
  const car = {
    _id: req.body._id,
    vendor: req.body.vendor,
    price: +req.body.price,
  }
  carService
    .save(car)
    .then((savedCar) => res.send(savedCar))
    .catch((err) => res.status(500).send('Cannot save car'))
})

// READ
app.get('/api/car/:carId', (req, res) => {
  const { carId } = req.params
  carService
    .getById(carId)
    .then((car) => res.send(car))
    .catch((err) => res.status(500).send('Cannot get car'))
})

// DELETE
app.delete('/api/car/:carId', (req, res) => {
  const { carId } = req.params
  carService
    .remove(carId)
    .then(() => res.send('Removed!'))
    .catch((err) => res.status(500).send('Cannot remove car'))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
