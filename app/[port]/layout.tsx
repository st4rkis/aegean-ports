// app/[airport]/layout.tsx

import PortShell from "@/components/PortShell";
// import AirportFooter from "@/components/AirportFooter";
// import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Header from "@/components/Header";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import FooterFAQ from "@/components/sections/FooterFAQ";

export default async function PortLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ port: string }>;
}) {
  const { port } = await params;

  return (
    <PortShell portCode={port}>
      <Header />

      {children}
      {/* Footer sits here, inside the Shell (Context) but after children */}
      {/* <FloatingWhatsApp />
      <AirportFooter /> */}
      <FloatingWhatsApp />
      <FooterFAQ />
    </PortShell>
  );
}
