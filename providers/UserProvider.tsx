"use client";

import { MyUserContextProvider } from "@/hooks/useUser";
import { User } from "@supabase/auth-helpers-nextjs";

interface UserProviderProps {
  children: React.ReactNode;
}

const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  return <MyUserContextProvider>{children}</MyUserContextProvider>;
};

export default UserProvider;
