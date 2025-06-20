import React from "react";
import { Metadata } from "next";
import TopNav from "@/components/layouts/nav";

export const metadata: Metadata = {
  title: "Ike Design Dev ",
  description: "Portfolio site of IkeDesignDev; UI/UX Engineer",
};

export default function Home() {
  return (
    <>
      <TopNav/>
      <h2>This is the landing page</h2>
    </>
  );
}
