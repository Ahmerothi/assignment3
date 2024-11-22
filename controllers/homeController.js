import StudentModel from "../models/studentSchema.js";

// Home controller function
const homeController = async (req, res) => {
    res.render("index");
};

// Create controller function
const createController = async (req, res) => {
    console.log(req.body); // Log the request body to the console

    try {
        const record = new StudentModel({
            name: req.body.name,
            city: req.body.city,
            email: req.body.email,
            contact: req.body.contact,
        });

        await record.save();
        console.log("Data saved..");
        res.render('index', { message: "Data saved successfully!" });
    } catch (error) {
        console.error("Error saving data:", error.message);
        res.render('index', { message: "Error saving data. Please try again." });
    }
};


// Export both controllers
export { homeController, createController };