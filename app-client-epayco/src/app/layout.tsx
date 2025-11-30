import "@/styles/globals.css";
import "@/styles/theme.css";
import "bootstrap/dist/css/bootstrap.css";
import NavBar from "@/components/ui/navbar/navbar-menu"; 
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "App Clientes ePayco",
  description: "Aplicación para Demo de Monedero Electrónico",
};

export default function RootLayout({children}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" defer></script>
      </head>
      <body>
        <NavBar/>
        {children}
      </body>
    </html>
  );
};