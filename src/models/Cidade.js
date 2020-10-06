const mongoose = require('mongoose')
const { Schema } = mongoose

const schema = new Schema(
  {
    nome: {
      type: String,
      required: true,
      index: true
    },
    abreviacao: {
      type: String,
      required: true,
      index: true
    },
    estadoId: { 
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Dev'
    }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
)

module.exports = mongoose.model('Cidade', schema, 'cidade')
