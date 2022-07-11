import { storageService } from "./storage-service.js"
import { utilService } from "./util-service.js"

const KEY = "toys_db"
_createToys()

export const toyService = {
  query,
  getById,
  remove,
  save,
  getEmptyToy,
}

function query() {
  return storageService.query(KEY)
}

function getById(toyId) {
  return storageService.get(KEY, toyId)
}

function remove(toyId) {
  return storageService.remove(KEY, toyId)
}

function save(toy) {
  if (toy.id) return storageService.put(KEY, toy)
  return storageService.post(KEY, toy)
}

function getEmptyToy() {
  return {
    _id: utilService.makeId(),
    name: "Talking Doll",
    price: 123,
    labels: ["Doll", "Battery Powered", "Baby"],
    createdAt: Date.now(),
    inStock: true,
  }
}
const labels = [
  "On wheels",
  "Box game",
  "Art",
  "Baby",
  "Doll",
  "Puzzle",
  "Outdoor",
]
function _createToys() {
  let toys = utilService.loadFromStorage(KEY)
  if (!toys || !toys.length) {
    toys = [
      {
        _id: utilService.makeId(),
        name: "Talking Doll",
        lables: ["On wheels", "Box game", "Art"],
        price: 980,
        createdAt: Date.now(),
        inStock: true,
      },
      {
        _id: utilService.makeId(),
        name: "Hulk",
        lables: ["Baby", "Outdoor", "Art"],
        price: 500,
        createdAt: Date.now(),
        inStock: true,
      },
      {
        _id: utilService.makeId(),
        name: "Thor",
        lables: ["Puzzle", "Box game", "Baby"],
        price: 305,
        createdAt: Date.now(),
        inStock: true,
      },
    ]
    utilService.saveToStorage(KEY, toys)
  }
  return toys
}
