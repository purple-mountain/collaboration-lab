import { Outlet, useNavigate } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import { useIsDarkModeContext } from "../hooks/useIsDarkModeContext";
import { dark } from "@clerk/themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

const queryClient = new QueryClient();

export default function RootLayout() {
  const navigate = useNavigate();
  const { isDarkMode } = useIsDarkModeContext();
  return (
    <ClerkProvider
      navigate={navigate}
      publishableKey={PUBLISHABLE_KEY}
      appearance={{ baseTheme: isDarkMode ? dark : undefined }}
    >
      <QueryClientProvider client={queryClient}>
        <main className={isDarkMode ? "dark" : "light"}>
          <div className="bg-white text-black antialiased dark:bg-bodyBackground dark:text-slate-200">
            <Outlet />
          </div>
        </main>
      </QueryClientProvider>
    </ClerkProvider>
  );
}
