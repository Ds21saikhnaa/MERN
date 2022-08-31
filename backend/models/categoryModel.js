import mongoose from 'mongoose'

const categoryScheme = mongoose.Schema(
    {
    name:{
        type: String,
        required: [true, "category-in neriig oruulna uu!"],
        unique: true,
        trim: true,
        maxlength: [50, "category-in ner urt deed tal n 50 temdegt bh ystoi."],
    },
    description:{
        type: String,
        required: [true, "category-in tailbariig oruulna uu!"]
    }

})