
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn ={firstname:'Adrian',lastName:'ls'};// Replace with real user logic

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      
      {children}
    </main>
  );
}