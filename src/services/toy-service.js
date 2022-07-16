import { storageService } from "./storage-service.js"
import { utilService } from "./util-service.js"
import Axios from "axios"
const axios = Axios.create({ withCredentials: true })

const KEY = "toys_db"
// const API = '//localhost:3030/api/toy/'
// AKA BASE URL
const API =
  process.env.NODE_ENV !== "development"
    ? "/api/toy/"
    : "//localhost:3030/api/toy/"
// _createToys()

export const toyService = {
  query,
  getById,
  remove,
  save,
  getEmptyToy,
}

async function query(filterBy) {
  try {
    const res = await axios.get(API, { params: filterBy })
    const toys = res.data
    return toys
  } catch (err) {
    throw err
  }

  //   return axios.get(API,{params:filterBy}).then((res) => res.data)
}

async function getById(toyId) {
  // console.log(toyId)
  try {
    const res = await axios.get(API + toyId)
    const toy = res.data
    return toy
  } catch (err) {
    throw err
  }
  //  return axios.get(API + toyId).then((res) => res.data).catch(err=> console.log('errr'));
}

async function remove(toyId) {
  try {
    const res = await axios.delete(API + toyId)
    const toys = res.data
    return toys
  } catch (err) {
    throw err
  }
  // return axios.delete(API + toyId).then((res) => res.data);
}

async function save(toy) {
  let updatedToy 
  try {
    if (toy._id) {
      const res = await axios.put(API + toy._id, toy)
      updatedToy = res.data
    } else {
      const res = await axios.post(API, toy)
      updatedToy = res.data
      
    }
    console.log('SERV',updatedToy);
    return updatedToy
  } catch (err) {
    throw err
  }

  //  if (toy._id) {
  //   console.log('save if have id');
  //   return axios.put(API + toy._id, toy).then((res) => res.data);
  // } else {

  //   console.log('save new');
  //   return axios.post(API, toy).then((res) => res.data).catch(err=>console.log('err'));
  // }
  // return storageService.post(KEY, toy)
}

function getEmptyToy() {
  return {
    // _id: utilService.makeId(),
    name: "",
    price: 0,
    labels: ["Doll", "Battery powered", "Baby"],
    createdAt: Date.now(),
    inStock: true,
  }
}
