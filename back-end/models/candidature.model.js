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
        post: {
            type: String,
            required: true
        },
        date: {
            type: Date,
            required: true,
            default: Date.now
        },    
    }, {
        timestamps: true
    }

)

export default mongoose.model('candidatures', candidatureSchema)