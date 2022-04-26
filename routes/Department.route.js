var express = require('express');
const router = express.Router();

const DepartmentController = require('../controllers/Department.controller')

router.get('/',function (req, res){

    return DepartmentController.get(req, res)
})

router.post('/',function (req, res){

    return DepartmentController.create(req, res)
})

router.get('/:id',function (req, res){

    return DepartmentController.getbyID(req, res)
})

router.patch('/:id', function(req, res) {
    return DepartmentController.update(req, res)
})

router.delete('/:id', function(req, res) {
    return DepartmentController.delete(req, res)
})

module.exports = router;