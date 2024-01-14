import mongoose from 'mongoose';

const StorySchema = new mongoose.Schema(
    {
        userPicturePath: { type: String, required: true },
        videoPath: {type: String, required: true}
    },
    { timestamps: true}
);

export default mongoose.model("Story", StorySchema);
