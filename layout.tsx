import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Section 4 Football - Sports History Portal",
  description: "20+ years of scores, standings, and historical football records.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-slate-100 min-h-screen flex flex-col antialiased">
        {/* Navigation Bar */}
        <nav className="bg-slate-950 border-b border-slate-800 sticky top-0 z-50 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-20 items-center">
              {/* Brand Logo Identity */}
              <Link href="/" className="flex flex-col">
                <span className="text-2xl font-black tracking-wider text-red-500 uppercase leading-none">
                  Section 4
                </span>
                <span className="text-sm font-bold tracking-widest text-slate-400 uppercase">
                  Football History
                </span>
              </Link>

              {/* Main Site Controls */}
              <div className="flex space-x-6 items-center">
                <Link href="/" className="font-semibold hover:text-red-400 transition text-sm sm:text-base">
                  Home
                </Link>
                <Link href="/store" className="font-semibold hover:text-red-400 transition text-sm sm:text-base">
                  Store
                </Link>
                <Link href="/dashboard" className="bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded-md shadow transition text-sm">
                  Team Login
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Dynamic App Pages Shell */}
        <main className="flex-grow">
          {children}
        </main>

        {/* Global Footer */}
        <footer className="bg-slate-950 border-t border-slate-800 py-6 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Section 4 Football. All Historical Rights Reserved.</p>
        </footer>
      </body>
    </html>
  );
}