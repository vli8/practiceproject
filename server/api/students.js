const router = require("express").Router();
const { Students, Campuses, db } = require("../db/index");

router.get("/", async (req, res, next) => {
  try {
    const allStudents = await Students.findAll();
    res.send(allStudents);
  } catch (error) {
    console.log("error");
    res.status(404).send("ERROR");
  }
});
module.exports = router;
