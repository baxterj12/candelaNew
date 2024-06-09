const { Client } = require('square');
import { randomUUID } from "crypto";

const client = new Client({
  accessToken: 'EAAAlzKljMo8CEkYO7K8oRmlAiCqc8h0ocVLFyjH8aqWKe2MytllRQLHPJLaVWQY',
  environment: 'sandbox'
});

export async function CreatePaymentLink(price) {
  try {
    const response = await client.checkoutApi.createPaymentLink({
      idempotencyKey: randomUUID(),
      quickPay: {
        name: 'sale',
        priceMoney: {
          amount: price, // Square API expects the amount in cents
          currency: 'USD'
        },
        locationId: 'LJPZEJ6EXFBFC'
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

    console.log(response.result);
    return response.result.paymentLink.url;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
