'use strict';
var express = require('express');
var router = express.Router();

// default parameter
var defaultData = require('../lib/default');
var response = {
  title: 'Express Template',
  error: {msg: ''}
};

router.get('/', function(req, res){
  response.data = defaultData;
  res.render('index', response);
});

module.exports = router;
