import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const NavBar = () => {
  return (
    <div className="fixed top-0 w-full h-14 px-4 border-b shadow-s bg-white flex items-center">
      {/* 最长宽度不超过 1536px，超过 1536 px 就因为 mx-auto 居中了 */}
      <div className="md:max-w-screen-2xl mx-auto flex items-center w-full justify-between">
        <Logo />

        <div className="space-x-4 md:block md:w-auto flex justify-between items-center w-full">
          <Button size="sm" variant="outline" asChild>
            <Link href="/sign-in">Login</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/sign-up">Get Taskify for free</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};
