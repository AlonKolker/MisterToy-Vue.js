import { storageService } from "./storage-service.js"
import { utilService } from "./util-service.js"
import axios from 'axios'


const KEY = "toys_db"
// const API = '//localhost:3030/api/toys/'
// AKA BASE URL
const API = (process.env.NODE_ENV !== 'development') ? '/api/toys/' : '//localhost:3030/api/toys/';
// _createToys()

export const toyService = {
  query,
  getById,
  remove,
  save,
  getEmptyToy,
}

function query(filterBy) {
  return axios.get(API,{params:filterBy}).then((res) => res.data)
  // return storageService.query(TOY_KEY);

}

function getById(toyId) {
  console.log(toyId)
   return axios.get(API + toyId).then((res) => res.data).catch(err=> console.log('errr'));
  // return storageService.get(KEY, toyId)
}

function remove(toyId) {
    return axios.delete(API + toyId).then((res) => res.data);
  // return storageService.remove(KEY, toyId)
}

function save(toy) {
  console.log('save func service',toy);

   if (toy._id) {
    console.log('save if have id');
    return axios.put(API + toy._id, toy).then((res) => res.data);
  } else {

    console.log('save new');
    return axios.post(API, toy).then((res) => res.data).catch(err=>console.log('err'));
  }
  // return storageService.post(KEY, toy)
}

function getEmptyToy() {
  return {
    // _id: utilService.makeId(),
    name: "",
    price: 0,
    labels: ["Doll", "Battery Powered", "Baby"],
    createdAt: Date.now(),
    inStock: true,
  }
}
// const labels = [
//   "On wheels",
//   "Box game",
//   "Art",
//   "Baby",
//   "Doll",
//   "Puzzle",
//   "Outdoor",
// ]
// function _createToys() {
//   let toys = utilService.loadFromStorage(KEY)
//   if (!toys || !toys.length) {
//     toys = [
//       {
//         _id: utilService.makeId(),
//         name: "Talking Doll",
//         lables: ["On wheels", "Box game", "Art"],
//         price: 980,
//         createdAt: Date.now(),
//         inStock: true,
//       },
//       {
//         _id: utilService.makeId(),
//         name: "Hulk",
//         lables: ["Baby", "Outdoor", "Art"],
//         price: 500,
//         createdAt: Date.now(),
//         inStock: true,
//       },
//       {
//         _id: utilService.makeId(),
//         name: "Thor",
//         lables: ["Puzzle", "Box game", "Baby"],
//         price: 305,
//         createdAt: Date.now(),
//         inStock: true,
//       },
//     ]
//     utilService.saveToStorage(KEY, toys)
//   }
//   return toys
// }
