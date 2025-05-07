import { Provider } from "@/components/ui/provider";

export const metadata = {
  title: "GRH",
  description: "Gamem rate hub where we only care about rates",
};

export default function RootLayout({ children }) {
  return (
    <html suppressHydrationWarning>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
