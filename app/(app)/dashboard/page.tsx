import SignOutBtn from "@/components/auth/SignOutBtn";
import { getUserAuth } from "@/lib/auth/utils";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import ImageGenerator from "@/components/ImageGenerator";

export default async function Home() {
  const { session } = await getUserAuth();
  if (!session) {
    return <div>Loading...</div>; // or redirect to login
  }
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold my-2 text-black dark:text-black">Profile</h1>
      <Card className="max-w-md mx-auto">
        <CardHeader>
          <CardTitle>{session.user.name || 'No Name'}</CardTitle>
          <CardDescription>Email: {session.user.email}</CardDescription>
          <CardDescription>ID: {session.user.id}</CardDescription>
        </CardHeader>
        <CardContent>
          <SignOutBtn />
        </CardContent>
      </Card>
     
    </main>
  );
}