import Image from "next/image";
import { DarkModeToggle } from "./_components/dark-mode-toggle";
import { NavigationMenuDemo } from "./_components/navigation-menu";
import { Button } from "@/components/ui/button";
import { LoginModal } from "@/components/login-modal";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <div className="flex">
          <NavigationMenuDemo />
        </div>
        <div className="flex gap-3">
          <LoginModal />
          <DarkModeToggle />
        </div>
      </div>

    
    </main>
  );
}
