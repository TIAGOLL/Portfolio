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
    <html className='h-screen' lang="pt-br">
      <body className="h-screen bg-background">{children}</body>
    </html>
  )
}
