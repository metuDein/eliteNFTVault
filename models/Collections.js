import { Schema, models, model } from "mongoose";


const collectionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    banner: String,
    owner: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    gasFee: {
        type: String,
        default: 'unpaid'
    },
    gasFeeAmount: {
        type: Number,
        default: 0.0
    },
    withdrawalFee: {
        type: Number,
        default: 0
    },
    blockChain: {
        type: String,
        required: true
    },
    public_id: String,
}, {
    timestamps: true
})


const Collection = models.NftColletion || model('NftColletion', collectionSchema)

export default Collection
