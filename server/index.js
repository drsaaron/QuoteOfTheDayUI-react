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
    instance.get(DATA_SERVICE_URL + "/" + resource, { params: req.query })
	.then(response => {
	    return res.json(response.data);
	})
	.catch(errorHandler);
});

app.get('/api/:resource/:key', (req, res) => {
    var resource = req.params.resource;
    var key = req.params.key;
    instance.get(DATA_SERVICE_URL + "/" + resource + "/" + key, { params: req.query })
	.then(response => {
	    return res.json(response.data);
	})
	.catch(errorHandler);
});

// if all else fails, return the react app
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../build', 'index.html'));
});

httpServer.listen(PORT, () => { console.log(`Application server listening on port ${PORT} (http)`); });
