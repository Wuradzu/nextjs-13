import Search from "./Search";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex">
      <div>Search</div>
      <div className="flex-1 p-2">
        <Search />
        {children}
      </div>
    </main>
  );
}
