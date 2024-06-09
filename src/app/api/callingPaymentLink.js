import { CreatePaymentLink } from '../actions/apiCall.js';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { totalCost } = req.body;

    try {
      const paymentLink = await CreatePaymentLink(totalCost);
      res.status(200).json({ paymentLink });
    } catch (error) {
      res.status(500).json({ error: 'Failed to create payment link' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}