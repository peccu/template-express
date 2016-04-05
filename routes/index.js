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

router.post('/', function(req, res){
  console.log(req.body);
  response.data = req.body;
  response.datastr = JSON.stringify(req.body);

  if(!req.body || !req.body.message){
    response.error = {msg: 'message is not specified'};
    res.render('index', response);
  }

  res.render('index', response);
});

module.exports = router;
