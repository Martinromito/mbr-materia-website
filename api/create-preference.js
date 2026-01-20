// This will be a Node.js serverless function in Vercel
const { MercadoPagoConfig, Preference } = require('mercadopago');

// Access Token should be set in Vercel environment variables
const client = new MercadoPagoConfig({ 
    accessToken: process.env.MP_ACCESS_TOKEN || 'YOUR_ACCESS_TOKEN_HERE' 
});

module.exports = async (req, res) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    try {
        const { items } = req.body;

        const preference = new Preference(client);
        
        const response = await preference.create({
            body: {
                items: items,
                back_urls: {
                    success: `${req.headers.origin}/?status=success`,
                    failure: `${req.headers.origin}/?status=failure`,
                    pending: `${req.headers.origin}/?status=pending`,
                },
                auto_return: 'approved',
            }
        });

        return res.status(200).json({ init_point: response.init_point });
    } catch (error) {
        console.error('Mercado Pago Error:', error);
        return res.status(500).json({ error: 'Error creating preference' });
    }
};
