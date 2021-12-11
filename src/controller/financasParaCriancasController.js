const { Mongoose } = require('mongoose')
const noteSchema = require('../models/financasParaCriancasSchema')
const NoteSchema = require('../models/financasParaCriancasSchema')

const getAll = async (req, res) => {
    try {
        const financasParaCriancasSchema = await financasParaCriancasSchema.find()
        res.status(200).json(financasParaCriancasSchema)

    } catch (error) {
        res.status(500).json({
            message: error.message,
        })
    }
}












module.exports = {
    getAll
}