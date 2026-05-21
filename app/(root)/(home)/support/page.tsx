"use client";

import { PaystackButton } from "react-paystack";

export default function SupportPage() {

  const publicKey = "pk_test_xxxxxxxxxxxxxxxxx";
  const amount = 50000; // 500 KES if using kobo/cents
  const email = "supporter@example.com";

  const componentProps = {
    email,
    amount,
    publicKey,
    text: "Support This Project ❤️",
    onSuccess: () => {
      alert("Thank you for supporting the project!");
    },
    onClose: () => {
      alert("Payment window closed.");
    },
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex items-center justify-center p-6">

      <div className="max-w-xl w-full bg-[#1e293b] p-8 rounded-2xl text-center shadow-xl">

        <h1 className="text-4xl font-bold mb-4">
          Support Zoom Clone ❤️
        </h1>

        <p className="text-gray-300 mb-8">
          Help us improve servers, video quality,
          and build more amazing features.
        </p>

        <div className="flex justify-center">
          <PaystackButton
            className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-xl font-semibold"
            {...componentProps}
          />
        </div>

      </div>

    </div>
  );
}
