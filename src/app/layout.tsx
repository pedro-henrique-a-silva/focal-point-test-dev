import type { Metadata } from "next";
import "../styles/globals.scss";
import { ContextProvider } from "@/components/ContextProvider";


export const metadata: Metadata = {
  title: "Focal Point",
  description: "Não deixe de fazer nenhuma atividade",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <ContextProvider>
        <body>
          {children}
        </body>
      </ContextProvider>
    </html>
  );
}
