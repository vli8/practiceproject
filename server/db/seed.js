const { Students, Campuses, db } = require("./index");

const seed = async function() {
  console.log("Populating the database with default data");
  Campuses.create({
    name: "Lincoln Center",
    address: "10 Lincoln Center Plaza",
    description: "City life, busy, lively, pretty"
  });
  Campuses.create({
    name: "Rose Hill",
    address: "441 East Fordham Road",
    description: "Heaven among the Bronx"
  });

  Students.create({
    firstName: "Omri",
    lastName: "Bernstein",
    email: "omri@gmail.com",
    campusID: 1,
    age: "20"
  }),
    Students.create({
      firstName: "Geoff",
      lastName: "Bass",
      email: "geoff@gmail.com",
      campusID: 2
    });
};

module.exports = seed;
