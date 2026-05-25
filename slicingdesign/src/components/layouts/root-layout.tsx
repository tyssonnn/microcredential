import ReactQueryProvider from "./provider/react-query-provider";

export default function RootLayoutComponent({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryProvider>
      <html lang="en">
        <body>
          <div className="flex min-h-screen items-center justify-center bg-gray-300 font-sans">
            <main className="flex w-full max-w-3xl flex-col items-center justify-between py-4 px-4 bg-white sm:items-start rounded-lg">
              {children}
            </main>
          </div>
        </body>
      </html>
    </ReactQueryProvider>
  );
}
