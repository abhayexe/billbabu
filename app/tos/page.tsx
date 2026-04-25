export default function TermsOfService() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-[#172b4d] mb-4">
          Terms of Service
        </h1>
        <p className="text-gray-600 mb-12">Effective Date: April 21, 2026</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-[#172b4d] mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              By downloading, accessing, or using BillBabu (the "App"),
              developed by SupplySprout, you agree to be bound by these Terms of
              Service. If you do not agree to these terms, please do not use the
              App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#172b4d] mb-4">
              2. Description of Service
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The App is a Point of Sale (POS), billing, and ledger management
              tool designed for retail and wholesale businesses. It allows users
              to generate invoices, track inventory, and manage customer or
              supplier balances securely.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#172b4d] mb-4">
              3. User Responsibilities
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Account Security:</strong> You are responsible for
                maintaining the confidentiality of your account, accessed via
                your phone number and OTP.
              </li>
              <li>
                <strong>Data Accuracy:</strong> You are solely responsible for
                the accuracy of the data you enter into the App, including
                product prices, bill amounts, customer details, and tax
                information (like GSTIN).
              </li>
              <li>
                <strong>Legal Compliance:</strong> You agree to use the App in
                compliance with all applicable local, state, and national laws.
                The App is not intended to facilitate illegal trade, tax
                evasion, or fraud.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#172b4d] mb-4">
              4. No Financial or Tax Advice
            </h2>
            <p className="text-gray-700 leading-relaxed">
              The App is a software tool, not a certified accounting firm. While
              we assist in calculating totals and tracking balances, we do not
              provide financial, legal, or tax advice. SupplySprout is not
              responsible for your tax filings, audits, or any financial
              discrepancies that occur within your business. You are encouraged
              to verify your ledgers with a qualified professional.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#172b4d] mb-4">
              5. Data and Privacy
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Your use of the App is also governed by our Privacy Policy. By
              using the App, you consent to the collection and use of your data
              as outlined in that policy, including the anonymous aggregation of
              barcode data to improve our global dictionary.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#172b4d] mb-4">
              6. Account Deletion and Data Loss
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You have the right to request account deletion at any time via the
              "Danger Zone" in the App settings.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Grace Period:</strong> Upon requesting deletion, your
                account is suspended for 20 days.
              </li>
              <li>
                <strong>Permanent Deletion:</strong> After 20 days, all your
                data (including ledgers, bills, and inventory) is permanently
                and irreversibly deleted from our servers. SupplySprout cannot
                recover this data once the grace period expires.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#172b4d] mb-4">
              7. Limitation of Liability
            </h2>
            <p className="text-gray-700 leading-relaxed">
              To the maximum extent permitted by law, SupplySprout shall not be
              liable for any indirect, incidental, special, consequential, or
              punitive damages, or any loss of profits or revenues, whether
              incurred directly or indirectly, or any loss of data, use,
              goodwill, or other intangible losses, resulting from your access
              to or use of or inability to access or use the App.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#172b4d] mb-4">
              8. Termination
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to suspend or terminate your account
              immediately, without prior notice or liability, for any reason,
              including without limitation if you breach these Terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#172b4d] mb-4">
              9. Changes to Terms
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify or replace these Terms at any time.
              We will provide notice of any major changes within the App. Your
              continued use of the App following the posting of any changes
              constitutes acceptance of those changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#172b4d] mb-4">
              10. Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you have any questions about these Terms, please contact us at:
            </p>
            <p className="text-gray-700 mt-4">
              <strong>Developer:</strong> SupplySprout
              <br />
              <strong>Email:</strong>{" "}
              <a
                href="mailto:supplysproutcompany@gmail.com"
                className="text-[#00897b] hover:underline"
              >
                supplysproutcompany@gmail.com
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
