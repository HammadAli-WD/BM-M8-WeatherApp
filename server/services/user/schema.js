const { Schema } = require("mongoose")
const mongoose = require("mongoose")
const bcrypt = require("bcryptjs")

const UserSchema = new Schema(
    {
        name : {
            type: String,
            required: true
        },
        surname: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },

        gender: {
            type: String,
            enum: ["Male", "Female", "Non-binary"],
            required: false,
          },
          
        email: {
            type: String,
            required: true
        },
        refreshTokens: [
            {
                token:{
                    type: String,
                    required: true
                }
            }
        ],
        facebookId: String,
    },
    {timestamps: true}
)

UserSchema.methods.toJSON = function(){
    const user = this
    const userObject = user.toObject()

    delete userObject.password
    delete userObject.__v

    return userObject
}

UserSchema.statics.findByCredentials = async(email, password) => {
    const user = await UserModel.findOne({ email })
    const isMatch = await bcrypt.compare(password, user.password)

    if(!isMatch) {
        const err = new Error('Not Matching')
        err.httpStatusCode = 401
        throw err
    }

    return user
}

UserSchema.pre("save", async function (next) {
    const user = this

    if (user.isModified("password")){
        user.password = await bcrypt.hash(user.password, 8)
    }

    next()
})

const UserModel = mongoose.model("User", UserSchema)

module.exports = UserModel