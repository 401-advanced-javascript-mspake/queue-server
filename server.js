'use strict';

const Server = require('@nmq/q/server');

Server.start();

const database = new Server('database');

database.monitorEvent('create');
database.monitorEvent('update');
database.monitorEvent('delete');
database.monitorEvent('read');
database.monitorEvent('error');
