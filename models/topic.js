import mongoose,{Mongoose, Schema} from "mongoose";

// Schema designing
const topicSchema = new Schema(
    {
        title:{
            type: String,
            required: true,
            trim: true
        },

        description: {
            type: String,
            required: true,
            trim: true
        }
    },
    {timestamps: true}
)

// Creating Model based on the Schema
const Topic = mongoose.models.Topic || mongoose.model("Topic", topicSchema);

export default Topic;