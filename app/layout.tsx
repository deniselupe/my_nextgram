import './globals.css'

export const metadata = {
  title: "NextGram",
  description: "A sample Next.js app showing dynamic routing with modals as a route.",
  metadataBase: new URL("https://nextgram.vercel.app"),
}

interface RootLayoutProps {
  children: React.ReactNode;
  modal: React.ReactNode;
}

export default function RootLayout({ children, modal }: RootLayoutProps) {
  return (
    <html>
      <body>
        {children}
        {modal}
      </body>
    </html>
  );
}