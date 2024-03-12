const express = require("express")
const router = express.Router()

const {getTemplate, updateTemplateStats} = require("../controllers/TemplateController")

router.get("/:id", getTemplate)
router.put("/:id", updateTemplateStats)

module.exports = router

