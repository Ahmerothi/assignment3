import StudentModel from "../models/studentSchema.js";

// Edit controller
const editController = async (req, res) => {
    try {
        console.log(req.params.id); // Log the ID from the route parameters
        const record = await StudentModel.findById(req.params.id);
        if (record) {
            res.render('edit', { record });
        } else {
            res.status(404).send('Record not found');
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Server Error");
    }
};

// Update controller
const updateController = async (req, res) => {
    try {
        const updatedRecord = await StudentModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (updatedRecord) {
            res.redirect('/');
        } else {
            res.redirect('/read');
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).send("Server Error");
    }
};

// Delete controller
const deleteController = async (req, res) => {
    try {
        const deletedRecord = await StudentModel.findByIdAndDelete(req.params.id);
        if (deletedRecord) {
            res.redirect('/read');
        } else {
            res.redirect('/');
        }
    } catch (error) {
        console.log(error.message); // Added error logging
        res.status(500).send("Server Error"); // Added proper error response
    }
};

// Export the controllers
export { editController, updateController, deleteController };
