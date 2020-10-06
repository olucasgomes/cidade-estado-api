const mongoose = require('mongoose')
const { Schema } = mongoose

const schema = new Schema(
  {
    nome: {
      type: String,
      required: true,
      unique: true,
      index: true
    },
    abreviacao: {
      type: String,
      required: true,
      index: true
    }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
)

module.exports = mongoose.model('Estado', schema, 'estado')
