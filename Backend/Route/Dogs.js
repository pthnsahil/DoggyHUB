const express=require('express');
const router=express.Router();

const addDog=require('../Controllers/Dogs/addPet.js');
const editDog=require('../Controllers/Dogs/editPet.js');
const deleteDog=require('../Controllers/Dogs/deletePet.js');
const allDogs=require('../Controllers/Dogs/allPets.js');
const detailpage=require('../Controllers/Dogs/detailpage.js');
const availableDogs=require('../Controllers/Dogs/availableDogs.js');
const adoptedDogs=require('../Controllers/Dogs/adoptedDog.js')

router.post('/addPet',addDog);
router.post('/editPet',editDog);
router.post('/deletePet',deleteDog);
router.post('/allPets',allDogs);
router.post('/detailpage',detailpage);
router.post('/adopt',availableDogs);
router.post('/adoptedPets',adoptedDogs);

module.exports=router;

