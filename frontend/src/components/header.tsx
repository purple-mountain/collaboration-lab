import { UserButton } from "@clerk/clerk-react";
import { ThemeSwitcher } from "./themeSwitcher";

export function Header() {
  return (
    <header className="flex items-center justify-between py-7">
      <UserButton afterSignOutUrl="/sign-in" />
      <ThemeSwitcher />
    </header>
  );
}
