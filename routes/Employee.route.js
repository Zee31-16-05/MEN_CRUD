var express = require('express');
const router = express.Router();

const EmployeeController = require('../controllers/Employee.controller')

router.get('/', function(req, res) {
    return EmployeeController.get(req, res)
})

router.post('/', function(req, res) {
    return EmployeeController.create(req, res)
})

router.get('/:id', function(req, res) {
    return EmployeeController.getById(req, res)
})

router.patch('/:id', function(req, res) {
    return EmployeeController.update(req, res)
})

router.delete('/:id', function(req, res) {
    return EmployeeController.delete(req, res)
})

module.exports = router;