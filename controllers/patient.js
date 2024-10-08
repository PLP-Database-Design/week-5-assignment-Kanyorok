const Patient = require('../models/patient');

// Get all products => /api/v1/patients
exports.getPatients = async (req, res, next) => {
    try {
        const resPerPage = 6;

        // Get all patients with specific fields
        const patients = await Patient.findAll({
            attributes: ['patient_id', 'first_name', 'last_name', 'date_of_birth'],
            limit: resPerPage
        });

        // Get total patient count
        const patientCount = await Patient.count();

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
