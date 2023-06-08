import '@styles/global.css'

import Nav from '@components/nav'




export const metadata = {
    title: "Second Brain",
    description: 'Productivity app that acts as a second brain'
}

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <html lang="en">
        <body>
            <div className='main'>
                <div className="gradient" />
            </div>
            <main className='app'>
                <Nav />
                {children}
                
            </main>
        </body>
    </html>
  )
}
