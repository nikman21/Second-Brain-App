import '@styles/global.css'
import Nav from '@components/nav'
import SessionProvider from "./SessionProvider";


export const metadata = {
    title: "Second Brain",
    description: 'Productivity app that acts as a second brain'
}


export default async function RootLayout({

    children,
  }: {
    children: React.ReactNode;
    
  }) {
  
  

  
  return (
    <html lang="en">
      <SessionProvider session={null}>
        <body>
            <main className='app'>
                <Nav />
                {children}
            </main>
        </body>
      </SessionProvider>
    </html>
  )
}
