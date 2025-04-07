import { ReactNode } from "react";

export function NavBar({ children }: { children: ReactNode }) {
  return (
    <nav className="flex items-center gap-4 border-b-2 px-4 py-4">
      {children}
    </nav>
  );
}
