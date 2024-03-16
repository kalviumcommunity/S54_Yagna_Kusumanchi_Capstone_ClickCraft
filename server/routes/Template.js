const express = require("express")
const router = express.Router()

const {getTemplate, updateTemplateStats, getAllTemplates, createTemplate} = require("../controllers/TemplateController")

router.post("/", createTemplate)
router.get("/all", getAllTemplates)
router.get("/:id", getTemplate)
router.put("/:id", updateTemplateStats)

module.exports = router

