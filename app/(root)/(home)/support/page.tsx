"use client";

import { useState } from "react";
import { PaystackButton } from "react-paystack";

export default function SupportPage() {
  const [email, setEmail] = useState("");
  const [amount, setAmount] = useState(500);

  const publicKey =
    process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY || "";

  const componentProps = {
    email,
    amount: amount * 100,
    publicKey,
    text: "Support This Project ❤️",

    onSuccess: () => {
      alert("Thank you for supporting the project ❤️");
    },

    onClose: () => {
      alert("Payment cancelled.");
    },
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-white flex items-center justify-center p-6">

      <div className="w-full max-w-xl bg-[#1e293b] rounded-3xl p-8 shadow-2xl">

        <h1 className="text-4xl font-bold text-center mb-3">
          Support Zoom Clone ❤️
        </h1>

        <p className="text-gray-300 text-center mb-8">
          Your support helps maintain servers,
          improve video quality,
          and build more awesome features.
        </p>

        <div className="space-y-5">

          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Email Address
            </label>

            <input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#0f172a] border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-green-500"
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-300">
              Amount (KES)
            </label>

            <input
              type="number"
              placeholder="500"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full bg-[#0f172a] border border-gray-700 rounded-xl px-4 py-3 outline-none focus:border-green-500"
            />
          </div>

          <div className="pt-4">

            {email && amount > 0 ? (
              <PaystackButton
                {...componentProps}
                className="w-full bg-green-500 hover:bg-green-600 transition-all rounded-xl py-4 font-bold text-lg"
              />
            ) : (
              <button
                disabled
                className="w-full bg-gray-700 rounded-xl py-4 font-bold text-lg cursor-not-allowed"
              >
                Enter Email & Amount
              </button>
            )}

          </div>

        </div>

      </div>

    </div>
  );
}
