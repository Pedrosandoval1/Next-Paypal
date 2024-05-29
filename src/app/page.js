"use client";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function home() {
  return (
    <div className="h-screen bg-slate-950 flex justify-center items-center">
      <PayPalScriptProvider
        options={{
          clientId:
            "AdZ70B6hx_labFSo_dpgCLJdChC-nx9M5KfkR0zDFA2BLZCVq9UfMQjeeiONzd0WaCDGigbD6f9-Pt_X",
        }}
      >
        <PayPalButtons style={{ layout: "horizontal", color: "blue" }} />
      </PayPalScriptProvider>
    </div>
  );
}
