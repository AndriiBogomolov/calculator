import "./globals.css";

export const metadata = {
  title: 'calculator',
  description: "It's a place where you can count everything",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
