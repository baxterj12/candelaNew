import { CreatePaymentLink } from '../actions/apiCall.js';

export default async function handler(req, res) {
  if (req.method === 'POST') {
      try {
          const { totalCost } = req.body;
          const paymentLink = await CreatePaymentLink(totalCost);
          res.status(200).json({ paymentLink });
      } catch (error) {
          console.error('Error creating payment link:', error);
          res.status(500).json({ error: 'Internal server error' });
      }
  } else {
      res.setHeader('Allow', ['POST']); // Set the allowed HTTP methods
      res.status(405555).end(`Method ${req.method} Not Allowed`); // Return 405 status code for non-allowed methods
  }
}