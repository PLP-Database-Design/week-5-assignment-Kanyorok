const Provider = require('../models/provider');

// Get all products => /api/v1/providers
exports.getProviders = async (req, res, next) => {
    try {
        const resPerPage = 6;

        // Get all patients with specific fields
        const providers = await Provider.findAll({
            attributes: ['first_name', 'last_name', 'provider_speciality'],
            limit: resPerPage
        });

        // Get total patient count
        const providerCount = await Provider.count();

        res.status(200).json({
            success: true,
            providerCount,
            resPerPage,
            providers
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            success: false,
            message: 'Server Error'
        });
    }
};
