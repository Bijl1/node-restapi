//index.js
const express = require('express')

const app = express()
const port = 3000

let movies = [
  {
    id: "1",
    title: "Inception",
    director: "Christopher Nolan",
    release_date: "2010-07-16"
  },
  {
    id: "2",
    title: "The Irishman",
    director: "Martin Scorses",
    release_date: "2019-09-27"
  },
];

//get the movie list in the form of JSON