import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#172b4d] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="text-white">Bill</span>
              <span className="text-[#00897b]">Babu</span>
            </h3>
            <p className="text-gray-300 text-sm">
              Smart POS, inventory management, and digital ledger tool for
              Indian small businesses.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-300 hover:text-[#00897b] transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/tos"
                  className="text-gray-300 hover:text-[#00897b] transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/delete-account"
                  className="text-gray-300 hover:text-[#00897b] transition-colors"
                >
                  Delete Account
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-300 text-sm">Developer: SupplySprout</p>
            <a
              href="mailto:supplysproutcompany@gmail.com"
              className="text-[#00897b] hover:underline text-sm"
            >
              supplysproutcompany@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} SupplySprout. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
