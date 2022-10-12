import type { ReactNode } from "react";
import Footer from "./footer";
import NavBar from "./navbar";
export function Layout({
  children,
  title,
  navigation,
}: {
  children?: ReactNode;
  title?: string;
  navigation?: any;
}) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
