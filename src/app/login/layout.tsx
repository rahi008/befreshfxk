export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div>I am header </div>
        {children}
        <div>I am footer </div>
      </body>
    </html>
  );
}
