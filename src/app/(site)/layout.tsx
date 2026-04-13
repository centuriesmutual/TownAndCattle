import { ScrollProgress } from "@/components/home/ScrollProgress";
import { SiteFooter } from "@/components/home/SiteFooter";
import { SiteHeader } from "@/components/home/SiteHeader";
import { getTcSession } from "@/lib/auth/session";

export default async function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getTcSession();
  const isLoggedIn = Boolean(session.user?.profileCompletedAt);
  const displayName = session.user?.name ?? session.user?.email;

  return (
    <>
      <ScrollProgress />
      <SiteHeader isLoggedIn={isLoggedIn} displayName={displayName} />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <SiteFooter />
    </>
  );
}
