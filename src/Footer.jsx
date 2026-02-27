export default function Footer() {
    const currentYear = new Date().getFullYear(); 
    return <footer>
        <p>ID's Place (c) {currentYear}</p>
    </footer>
}