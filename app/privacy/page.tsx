export default function PrivacyPolicy() {
  return (
    <div className="bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-[#172b4d] mb-4">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-12">Effective Date: April 21, 2026</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-[#172b4d] mb-4">
              1. Introduction
            </h2>
            <p className="text-gray-700 leading-relaxed">
              Welcome to BillBabu (the "App"), developed by SupplySprout. We
              value your trust and are committed to protecting your personal and
              business data. This Privacy Policy explains how we collect, use,
              and safeguard your information when you use our Point of Sale
              (POS), inventory management, and ledger ecosystem.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#172b4d] mb-4">
              2. Information We Collect
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              To provide you with a seamless billing experience, we collect the
              following data:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Account Information:</strong> When you sign up via
                Firebase Authentication, we collect your phone number and full
                name.
              </li>
              <li>
                <strong>Business Data:</strong> We store information related to
                your shop, including Shop Name, Address, GSTIN, and UI
                preferences (such as your chosen invoice template and brand
                color).
              </li>
              <li>
                <strong>Ledger & Transaction Data:</strong> The App securely
                stores the data you input regarding your Customers, Suppliers,
                Products, Bills, and Transactions.
              </li>
              <li>
                <strong>Anonymized Product Data:</strong> When you scan a
                barcode and manually enter a product name, we anonymously save
                the barcode number and product name to our global dictionary to
                improve the smart-scanning experience for all users. We never
                link this global data to your specific shop.
              </li>
              <li>
                <strong>Device Permissions:</strong> We request camera access
                exclusively for scanning product barcodes. We request storage
                permissions to allow you to save generated PDF invoices, master
                ledgers, and JPG receipts directly to your device.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#172b4d] mb-4">
              3. How We Use Your Information
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We use your data exclusively to make the App work for you.
              Specifically, we use it to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                Provide and maintain the core POS, ledger, and billing services.
              </li>
              <li>
                Generate "Smart Restock Alerts" by analyzing your recent sales
                velocity.
              </li>
              <li>
                Generate professional, shareable PDF statements and invoices.
              </li>
              <li>
                Sync your data across devices securely via our cloud backend.
              </li>
              <li>
                Facilitate automated account restoration and deletion processes.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#172b4d] mb-4">
              4. Data Sharing & Third Parties
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              We do not sell your personal or business data. We only share
              necessary encrypted information with trusted service providers
              required to operate the App:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Google Firebase:</strong> For secure, OTP-based phone
                authentication.
              </li>
              <li>
                <strong>Cloud Database Providers:</strong> For the secure,
                encrypted hosting of your PostgreSQL database records.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#172b4d] mb-4">
              5. Data Retention & The "Danger Zone"
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Active Data:</strong> We retain your data as long as
                your account remains active.
              </li>
              <li>
                <strong>Account Deletion:</strong> If you choose to delete your
                account via the "Danger Zone" in App Settings, your account is
                immediately deactivated and marked as "Pending Deletion."
              </li>
              <li>
                <strong>The 20-Day Grace Period:</strong> Your data remains
                securely on our servers for a 20-day grace period in case you
                change your mind and wish to restore your business data upon
                logging back in. After 20 days, our automated system permanently
                and irreversibly wipes all your records from our servers.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#172b4d] mb-4">
              6. Security
            </h2>
            <p className="text-gray-700 leading-relaxed">
              We implement industry-standard security measures. Every request
              your app makes to our servers is secured using Firebase ID Token
              verification, ensuring that absolutely no one else can access,
              modify, or read your business data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#172b4d] mb-4">
              7. Your Rights
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              You maintain full control over your data. You have the right to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              <li>
                <strong>Access & Export:</strong> Generate and download your
                complete Master Ledger or individual customer statements as PDFs
                at any time.
              </li>
              <li>
                <strong>Correction:</strong> Edit your profile, customer
                details, supplier details, or product inventory whenever
                necessary.
              </li>
              <li>
                <strong>Erasure:</strong> Delete individual manual transactions,
                remove specific bills, or schedule your entire account for
                permanent deletion.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#172b4d] mb-4">
              8. Contact Us
            </h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about this Privacy Policy or how your data
              is handled, please contact us at:
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
