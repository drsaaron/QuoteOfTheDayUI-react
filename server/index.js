const path = require('path');
const express = require('express');
const axios = require('axios');
const config = require('config');
const fs = require('fs');
const http = require('http');
const bodyParser = require("body-parser");
const AxiosLogger = require('axios-logger');

const PORT = config.get('SERVER_PORT');

const app = express();
app.use(express.static(path.resolve(__dirname, '../build')));

// setup axios
const instance = axios.create();
instance.interceptors.request.use(AxiosLogger.requestLogger);

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var httpServer = http.createServer(app);

// proxy error handler
const errorHandler = (error) => {
    // see https://axios-http.com/docs/handling_errors
    if (error.response) {
	// the request was made and the server responded with a status code
	// that falls out of the range of 2xx
	console.log(error.response.data);
	console.log(error.response.status);
	console.log(error.response.headers);
    } else if (error.request) {
	// the request was made by no response received
	console.log(error.request);
    } else {
	// something happened
	console.log("Error", error.message);
    }
    console.log(error.config);
}

// add proxy routings.
const DATA_SERVICE_URL = config.get("DATA_SERVICE_URL");
app.get('/api/:resource', (req, res) => {
    var resource = req.params.resource;
    var apiToken = req.headers.authorization;
    instance.get(DATA_SERVICE_URL + "/" + resource, { headers: { Authorization: apiToken }, params: req.query })
	.then(response => {
	    return res.json(response.data);
	})
	.catch(errorHandler);
});

app.get('/api/:resource/:key', (req, res) => {
    var resource = req.params.resource;
    var key = req.params.key;
    var apiToken = req.headers.authorization
    instance.get(DATA_SERVICE_URL + "/" + resource + "/" + key, { headers: { Authorization: apiToken },  params: req.query })
	.then(response => {
	    return res.json(response.data);
	})
	.catch(errorHandler);
});

app.post('/api/:resource', (req, res) => {
    var resource = req.params.resource;
    var object = req.body;
    var apiToken = req.headers.authorization;
    instance.post(DATA_SERVICE_URL + "/" + resource, object, { headers: { Authorization: apiToken } })
	.then(response => {
	    return res.json(response.data);
	})
	.catch(errorHandler);
});

app.put('/api/:resource/:key', (req, res) => {
    var resource = req.params.resource;
    var key = req.params.key;
    var object = req.body;
    var apiToken = req.headers.authorization;
    instance.put(DATA_SERVICE_URL + "/" + resource + "/" + key, object, { headers: { Authorization: apiToken } })
	.then(response => {
	    return res.json(response.data);
	})
	.catch(errorHandler);
});

const AUTH_SERVICE_URL = config.get("AUTH_SERVICE_URL");
app.post('/authenticate', (req, res) => {
    var object = req.body;
    instance.post(AUTH_SERVICE_URL + "/authenticate", object)
	.then(response => { return res.json(response.data); })
	.catch(errorHandler);
});

httpServer.listen(PORT, () => { console.log(`Application server listening on port ${PORT} (http)`); });
