export const metadata = {
    title: "Testing NodeJS",
    description: "I hate web development"
}

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="en">
            <body className="w-full h-full flex justify-center items-center">
                <div>
                    {children}
                </div>                
            </body>
        </html>
        
    )
}