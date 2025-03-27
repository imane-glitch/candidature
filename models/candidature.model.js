import mongoose from 'mongoose'

const candidatureSchema = mongoose.Schema (
    {
        entreprise: {
            type: String,
            minLength: 3,
            require: true
        },
        status: {
            type: String,
            enum: ['En attente', 'Accepté', 'Refusé'],
            default: 'En attente'
        },
     
    } , {
        timestamps: true
    }

)

export default mongoose.model('candidatures', candidatureSchema)