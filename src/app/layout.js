import "./globals.css";
import Header from "../components/Header/Header";
import BackButton from "../components/BackButton/BackButton";
export const metadata = {
  title: "Reveal Studio",
  description: "Reveal Studio Medellín - Estudio de fotografía profesional en Medellín. Especialistas en retratos familiares, fotografía corporativa y sesiones artísticas. Capturamos momentos únicos con estilo excepcional.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <BackButton />
      </body>
    </html>
  );
}

