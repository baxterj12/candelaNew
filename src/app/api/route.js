import {express} from 'express'
import { Client, Environment } from 'square';
import {NextRequest, NextResponse} from 'next/server'

//const app = express();

const client = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: Environment.Sandbox, // Change to Environment.Production for production
});

//app.use(express.json());

export async function POST(res, req) {
  try {
    //app.use(express.bodyParser());
    //const {cartItems, totalCost} = req.body;
    const response = await client.checkoutApi.createPaymentLink({
      idempotencyKey: new Date().getTime().toString(),
      quickPay: {
        name: 'demo',
        priceMoney: {
          amount: 100,
          currency: 'USD'
        },
        locationId: process.env.SQUARE_LOCATION_ID
      }
    });

    return NextResponse.json({ url: response.result.paymentLink.url }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}