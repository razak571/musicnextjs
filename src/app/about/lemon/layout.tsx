

export default function RootLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
  <>
  <h2>Lemon Layout</h2>
  {children}
  </>
    );
  }
  