// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: (cb)=> {
    orm.all("burgers",(res)=> {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: (cols, vals, cb)=> {
    orm.create("burgers", cols, vals, (res)=> {
      cb(res);
    });
  },
  update: (objColVals, condition, cb)=> {
    orm.update("burgers", objColVals, condition, (res)=> {
      cb(res);
    });
  },
  delete: (condition, cb)=> {
    orm.delete("burgers", condition, (res)=> {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;
