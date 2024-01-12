const express = require('express')
const { createTask, getTask, updatetask } = require("../Controller/TaskController");

const router = express.Router()




router.post('/createtask/:statusId', createTask)
router.get('/gettask/:id',getTask)
router.put('/update/:id',updatetask)
module.exports = router