"use strict"

// ---- Central -------------------------------------------------
const central  = require('./server/central')
central.memory = {}

// ---- Config --------------------------------------------------
const {config} = require('./server/config')
central.config = config

// ---- IPC -----------------------------------------------------
const {ipc} = require('./server/ipc')
central.ipc = ipc

// ---- Electron & Window ---------------------------------------
const {app} = require('./server/electron')
central.app = app