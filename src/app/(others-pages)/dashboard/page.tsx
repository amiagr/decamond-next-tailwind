import type { Metadata } from "next";
import React from "react";
import Welcome from "@/components/Welcome";

export const metadata: Metadata = {
  title:
    "Next.js E-commerce Dashboard | Next.js Dashboard Template",
  description: "This is Next.js Home for Dashboard Template",
};

export default function Dashboard() {
  return (
    <Welcome />
  );
}
