/* tslint:disable */
import http = require("http");
import express = require("express");
var bodyParser = require("body-parser");
import * as config from './config';
import * as securityConfig from './security-config';
import * as data from 'nodedata/mongoose';
import {router} from 'nodedata/core/exports';
//---------sequelize setting-----------------------------
//import * as seqData  from "./sequelizeimp";
import * as Main from 'nodedata/core';
Main(config, securityConfig, __dirname, data.entityServiceInst, undefined);
//var Main = require('./core')(config, securityConfig, __dirname, data.entityServiceInst, seqData.sequelizeService);
data.connect();
data.generateSchema();

var app = express();
Main.register(app);// ff

app.use(bodyParser.json());
app.use("/", router);
var server = (<any>http).createServer(app);
server.listen(9000);
