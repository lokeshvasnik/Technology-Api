import frontendSchema from '../model/frontendSchema.js';

const frontEnd = async (req, res) => {
    try {
        const technologies = await frontendSchema.find();
        res.status(200).json(technologies);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

export { frontEnd };
