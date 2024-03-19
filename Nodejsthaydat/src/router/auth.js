import express from "express";

const router = express.Router();

router.post("/signup", async (req, res) => {
  console.log("sigup");
});
router.post("/signin", async (req, res) => {
  console.log("sigin");
});
export default router;
