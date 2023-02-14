import mongoose from 'mongoose';

const frontEndSchema = mongoose.Schema({
    name: String,
    description: String,
    image: String,
    github: String,
});

export default mongoose.model('FrontEnd', frontEndSchema);
