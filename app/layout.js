export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>Header is here</header>
        {children}
        <footer>Footer is here</footer>
      </body>
    </html>
  );
}
