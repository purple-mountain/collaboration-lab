import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { Link } from "react-router-dom";
import { ThemeSwitcher } from "../components/themeSwitcher";

export default function IndexPage() {
  return (
    <div>
      <SignedIn>
        <UserButton afterSignOutUrl="/sign-in" />
      </SignedIn>
      <SignedOut>
        <Link to="/sign-in">Sign In</Link>
      </SignedOut>
      <ThemeSwitcher />
      <h1 className="dark:text-white text-black">This is the index page</h1>
      <div>
        <ul>
          <li>
            <Link to="/sign-up">Sign Up</Link>
          </li>
          <li>
            <Link to="/sign-in">Sign In</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
