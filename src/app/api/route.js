import express, { request } from 'express';
import bodyParser from 'body-parser';
import { Client, Environment } from 'square';
import {NextRequest, NextResponse} from 'next/server'

const client = new Client({
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
  environment: Environment.Production, // Change to Environment.Production for production
});



// Example API route handler
export async function POST(req, res) {
  try {
    const { cartItems, totalCost, address } = await req.json();
    const response = await client.checkoutApi.createPaymentLink({
      idempotencyKey: new Date().getTime().toString(),
      quickPay: {
        name: cartItems,
        priceMoney: {
          amount: totalCost * 100,
          currency: 'USD'
        },
        locationId: process.env.SQUARE_LOCATION_ID
      },
      checkoutOptions: {
        askForShippingAddress: true,
        acceptedPaymentMethods: {
          applePay: true,
          googlePay: true,
          cashAppPay: true,
          afterpayClearpay: true
        }
      }
    });

    return NextResponse.json({ url: response.result.paymentLink.url }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};