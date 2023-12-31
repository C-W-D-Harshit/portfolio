import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function LayoutProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-[-webkit-fill-available] w-full bg-foreground border rounded-lg relative overflow-hidden">
      <Header />
      <div className="w-full h-full mb-16">{children}</div>

      <Footer />
    </div>
  );
}
