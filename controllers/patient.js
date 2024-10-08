const Patient = require('../models/patient');

// Get all products => /api/v1/products?keyword=apple
exports.getPatients = async (req, res, next) => {
    
    const resPerPage = 6;
    const patientCount = await Patient.findAll();
   

    res.status(200).json({
        success: true,
        patientCount,
        resPerPage
    })
}