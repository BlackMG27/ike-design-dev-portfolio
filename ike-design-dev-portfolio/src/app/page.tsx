import React from "react";
import { Metadata } from "next";
import Header from "./components/layouts/header";

export const metadata: Metadata = {
  title: "Ike Design Dev ",
  description: "Portfolio site of IkeDesignDev; UI/UX Engineer",
};

export default function Home() {
  return (
    <>
      <Header title="Ogechi Ike" subtitle="Creative Technologist"/>
    </>
  );
}
