import Image from "next/image";
import Sidebar from "@/components/Sidebar";
import MobileNav from "@/components/MobileNav";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const loggedIn ={firstname:'Adrian',lastName:'ls'};// Replace with real user logic

  return (
    <main className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />
      <div className="flex h-screen w-full font-inter">
        <div className="flex h-16 items-center justify-between p-5  sm:p-8 md:hidden">
            <Image src="/icons/logo.svg" width={30} height={30} alt="menu icon"/>
            <div>
              <MobileNav user={loggedIn}/>
            </div>
        </div>
        {children}
      </div>
    </main>
  );
}