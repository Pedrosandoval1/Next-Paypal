import paypal from "@paypal/checkout-server-sdk";
import { NextResponse } from "next/server";

// Son valores que en el paypal developer se adquieren realizando una creación
// y solo se pasa para decir que app se va a ejercutar

   const clientID =
   "ClientID";
 const clientSecret =
   "ClienteIDPassword";

// acá se crea una nueva instancia para decirle a la app que será ejecutado en entorno de prueba
const enviroment = new paypal.core.SandboxEnvironment(clientID, clientSecret);
// Enviar las ordenes de compra de node o next js
const client = new paypal.core.PayPalHttpClient(enviroment);

export async function POST() {
  // Este codigfo lo que va hacer es procesar las ordenes, como si fuera una compra real
  const request = new paypal.orders.OrdersCreateRequest();
  request.requestBody({
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: "100.00",
          breakdown: {
            item_total: {
              currency_code: "USD",
              value: "100.00",
            },
          },
        },
        items: [
          {
            name: "Book of react",
            description: "Book of react",
            quantity: "1",
            unit_amount: {
              currency_code: "USD",
              value: "50.00",
            },
          },
          {
            name: "Book of Next",
            description: "Book of react",
            quantity: "1",
            unit_amount: {
              currency_code: "USD",
              value: "50.00",
            },
          },
        ],
      },
    ],
  });
  // Ejecutando las ordenes
  const response = await client.execute(request);
  //  Response un message del result id, se le pasa al front
  return NextResponse.json({
    id: response.result.id,
  });
}
// Configuración básica
