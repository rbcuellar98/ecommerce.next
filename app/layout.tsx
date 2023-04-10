import './globals.css'
import Navbar from './components/Navbar'
import {getServerSession} from 'next-auth/next'
import {authOptions} from '@/pages/api/auth/[...nextauth]'

export const metadata = {
  title: 'Hyko Couture',
  description: 'Commerce Clothing',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Fetch the user
  const session = await getServerSession(authOptions)
  console.log(session);
  return (
    <html lang="en">
      <body className="mx-64">
        {/* Session will be null if the user is not sign-in so add the question mark */}
      <Navbar user={session?.user} expires={session?.expires as string} /> 
        {children}
        </body>
    </html>
  )
}
