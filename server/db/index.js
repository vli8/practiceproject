const db = require("./database");
const Sequelize = require("sequelize");

const Students = db.define("student", {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    validate: {
      isEmail: true
    }
  },
  age: {
    type: Sequelize.FLOAT,
    validate: {
      min: 0.0,
      max: 100.0
    }
  },
  campusID: {
    type: Sequelize.INTEGER,
    validate: {
      notEmpty: true
    }
  }
});

const Campuses = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: "favicon.ico"
  },
  address: {
    type: Sequelize.STRING,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  }
});

Students.belongsTo(Campuses);
Campuses.hasMany(Students);

module.exports = {
  db,
  Students,
  Campuses
};
