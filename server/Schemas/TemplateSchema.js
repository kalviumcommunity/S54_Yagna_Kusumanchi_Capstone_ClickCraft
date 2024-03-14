const mongoose = require('mongoose')

const TemplateSchema = new mongoose.Schema(
    {
        Preview:String,
        Image:String,
        Category:Array,
        Likes:Number,
        Views:Number
    }
)

const Templates = mongoose.model("Templates", userSchema);

module.exports = Templates