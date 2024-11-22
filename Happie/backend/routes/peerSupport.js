// Import Express
const express = require("express");
const router = express.Router();

router.get("/peersupport", (req, res) => {
  res.json({ message: "Peer support route working!" });
});

// Export the router
module.exports = router;
