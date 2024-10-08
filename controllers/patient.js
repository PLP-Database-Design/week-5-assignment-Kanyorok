const Patient = require('../models/patient');

// Get all products => /api/v1/patients
exports.getPatients = async (req, res, next) => {
    try {
        const resPerPage = 6;

        // Get the first name from the query string (i.e. /patients?first_name=John)
        const { first_name } = req.query;

        // Set up a where condition if first_name is provided
        const whereClause = first_name ? { first_name } : {};

        // Get all patients with specific fields
        const patients = await Patient.findAll({
            attributes: ['patient_id', 'first_name', 'last_name', 'date_of_birth'],
            limit: resPerPage
        });

        // Get total patient count
        const patientCount = await Patient.count({
            where: whereClause
        });

        res.status(200).json({
            success: true,
            patientCount,
            resPerPage,
            patients
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Server Error'
        });
    }
};
