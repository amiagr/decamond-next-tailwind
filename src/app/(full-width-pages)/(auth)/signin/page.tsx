import SignInForm from "@/components/auth/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Next.js SignIn Page | Next.js Dashboard",
  description: "This is Next.js Signin Page for Dashboard",
};

export default function SignIn() {
  return <SignInForm />;
}
