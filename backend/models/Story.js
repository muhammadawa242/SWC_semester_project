import mongoose from 'mongoose';

const StorySchema = new mongoose.Schema(
    {
        userId: { type: String, required: true },
        description: { type: String, max: 20 },
        videoPath: {type: String, required: true}
    },
    { timestamps: true}
);

export default mongoose.model("Story", StorySchema);
