export default function Docs({params}: {params: {slug: []}}) {
    params?.slug?.forEach((route, index) => {
        console.log(`Route param ${index}:`, route);
    })
    return (
        <h1>
            Check terminal output on server
        </h1>
    )
}