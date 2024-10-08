const Provider = require('../models/provider');

// Get all products => /api/v1/providers
exports.getProviders = async (req, res, next) => {
    try {
        const resPerPage = 6;

        // Get the first name from the query string (i.e. /patients?first_name=John)
        const { provider_speciality } = req.query;

        // Set up a where condition if first_name is provided
        const whereClause = provider_speciality ? { provider_speciality } : {};

        // Get all patients with specific fields
        const providers = await Provider.findAll({
            attributes: ['first_name', 'last_name', 'provider_speciality'],
            limit: resPerPage
        });

        // Get total patient count
        const providerCount = await Provider.count({
            where: whereClause
        });

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
