import './globals.css'

export const metadata = {
  title: 'Portfólio de Tiago',
  description: 'Portfólio de projetos pessoais',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className='bg-bg-color h-screen'>{children}</body>
    </html>
  )
}
