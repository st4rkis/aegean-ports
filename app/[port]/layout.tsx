// app/[airport]/layout.tsx

import PortShell from "@/components/PortShell";
// import AirportFooter from "@/components/AirportFooter";
// import FloatingWhatsApp from "@/components/FloatingWhatsApp";

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
      {children}
      {/* Footer sits here, inside the Shell (Context) but after children */}
      {/* <FloatingWhatsApp />
      <AirportFooter /> */}
    </PortShell>
  );
}
