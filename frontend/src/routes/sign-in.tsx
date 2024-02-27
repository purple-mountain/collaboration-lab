import { SignIn } from "@clerk/clerk-react";

export default function SignInPage() {
  return (
    <div className="flex h-screen justify-center items-center bg-white text-black antialiased dark:bg-bodyBackground dark:text-slate-200">
      <SignIn />
    </div>
  );
}
