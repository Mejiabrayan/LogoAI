import { getUserAuth } from "@/lib/auth/utils";
import { redirect } from "next/navigation";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getUserAuth();
  if (session?.session) redirect("/dashboard");

  return ( <div className="bg-yellow-50 h-screen pt-8">{children}</div> );
}
