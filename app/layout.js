import Menu from "../componentes/menu";
import './geral.css';

export const metadata = {
  title: 'MixLoc',
  description: 'Projeto Node.js com Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <header>
          <Menu />
        </header>
        <main>
          {children}
        </main>
        <footer>
          <p>Mateus.</p>
        </footer>
      </body>
    </html>
  )
}