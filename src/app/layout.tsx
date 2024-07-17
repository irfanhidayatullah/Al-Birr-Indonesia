import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Providers } from "@/providers/ChakraProviders";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL_FE!),
  title: "Al-Birr Indonesia",
  description: "A local head company from Yogyakarta, Indonesia",
  keywords: [
    "Al-Birr Indonesia",
    "Al-Birr Klambi",
    "AB T-Shirt",
    "M66 T-Shirt",
    "Al-Birr Transportation",
    "Transportasi Murah Jogja",
    "City Tour Jogja",
    "Oleh-Oleh murah jogja",
    "Oleh-oleh khas jogja",
  ],
  openGraph: {
    images: ["/opengraph-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
