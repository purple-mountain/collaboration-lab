import { SignedIn, useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/header";
import { Todos } from "../components/todos";
import { TodoCreateDialog } from "@/components/todoCreateDialog";

export default function IndexPage() {
  const navigate = useNavigate();
  const { isSignedIn, userId } = useAuth();

  if (!isSignedIn) {
    navigate("/sign-in");
    return;
  }

  return (
    <section className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <div className="flex h-screen flex-col font-sans">
        <SignedIn>
          <Header />
          <Todos userId={userId} />
          <TodoCreateDialog userId={userId} />
        </SignedIn>
      </div>
    </section>
  );
}
