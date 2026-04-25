"use client";

import { useState } from "react";

export default function DeleteAccount() {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      // Placeholder API call - replace with your actual backend endpoint
      const response = await fetch("/api/delete-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phoneNumber }),
      });

      if (response.ok) {
        setMessage({
          type: "success",
          text: "Account deletion request submitted successfully. You will receive a confirmation shortly.",
        });
        setPhoneNumber("");
      } else {
        setMessage({
          type: "error",
          text: "Failed to submit deletion request. Please try again or contact support.",
        });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "An error occurred. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-[calc(100vh-4rem)]">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-[#172b4d] mb-4">
            Delete Your Account
          </h1>
          <p className="text-gray-600 mb-8">
            We're sorry to see you go. If you'd like to delete your BillBabu
            account and all associated data, please submit your request below.
          </p>

          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg
                  className="h-5 w-5 text-yellow-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-yellow-800">
                  Important Information
                </h3>
                <div className="mt-2 text-sm text-yellow-700">
                  <ul className="list-disc pl-5 space-y-1">
                    <li>
                      Your account will be suspended immediately upon request.
                    </li>
                    <li>
                      You have a 20-day grace period to restore your account if
                      you change your mind.
                    </li>
                    <li>
                      After 20 days, all your data (ledgers, bills, inventory,
                      customer records) will be permanently and irreversibly
                      deleted.
                    </li>
                    <li>
                      SupplySprout cannot recover your data once the grace
                      period expires.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label
                htmlFor="phoneNumber"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="phoneNumber"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="+91 XXXXXXXXXX"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00897b] focus:border-transparent outline-none transition-all"
              />
              <p className="mt-2 text-sm text-gray-500">
                Enter the phone number associated with your BillBabu account.
              </p>
            </div>

            {message && (
              <div
                className={`p-4 rounded-lg ${
                  message.type === "success"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {message.text}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-red-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-red-700 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Request Account Deletion"}
            </button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-[#172b4d] mb-3">
              Need Help?
            </h3>
            <p className="text-gray-600 mb-2">
              If you're experiencing issues or have questions, please contact us
              before deleting your account:
            </p>
            <a
              href="mailto:supplysproutcompany@gmail.com"
              className="text-[#00897b] hover:underline font-medium"
            >
              supplysproutcompany@gmail.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
