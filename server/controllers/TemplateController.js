const Templates = require("../Schemas/TemplateSchema")

const getTemplate = async (req, res)=>{
    const {id} = req.params

    try {
        const Template = await Users.findOne({ _id: id });

        if (!Template) {
            return res.status(404).json({ message: 'Template Not Found' });
        }

        res.status(200).json(Template);
    } catch (err) {
        console.error(err);
        res.status(500).json({ err: 'Internal Server Error' });
    }
}


const getAllTemplates = async (req, res) => {
    try {
        const allTemplates = await Templates.find();

        res.status(200).json(allTemplates);
    } catch (error) {
        console.error('Error getting templates:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


const updateTemplateStats = async (req, res) => {
    const id = req.params.id

    try {
        const template = await Templates.findById(id);

        if (!template) {
            return res.status(404).json({ error: 'Template not found' });
        }

        if (req.body.likes !== undefined) {
            template.Likes = req.body.likes;
        }

        if (req.body.views !== undefined) {
            template.Views = req.body.views;
        }

        const updatedTemplate = await template.save();

        res.status(200).json(updatedTemplate);
    } catch (error) {
        console.error('Error updating template:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

module.exports = {getTemplate, updateTemplateStats, getAllTemplates}