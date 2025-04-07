import { Providers } from "./provider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: "#F7F8FC" }}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
