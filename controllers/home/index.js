const router = require("express").Router();
const path = require("path");
const fs = require("fs/promises");

router.get("/", async (req, res) => {
  const pathToFile = path.join(__dirname, "../../db/count.txt");
  const count = await fs.readFile(pathToFile, "utf-8");
  const newCount = parseInt(count) + 1;
  await fs.writeFile(pathToFile, newCount.toString());
  res.status(200).send(newCount);
});

module.exports = router;
