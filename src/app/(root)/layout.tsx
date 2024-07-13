import React from "react";
import { ClerkProvider } from "@clerk/nextjs";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return <div>{children}</div>;
};

export default RootLayout;
