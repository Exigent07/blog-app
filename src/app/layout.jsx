import "./globals.css";

export const metadata = {
  title: "Exigent",
  description: "Website?",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
