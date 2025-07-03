import { ModeToggle } from "@/components/theme-button";

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'sans-serif' }} >
      <h1>Bem-vindo à Cantina 2</h1>
      <p>Esta é a página inicial do seu projeto Next.js!</p>
      <ModeToggle/>
    </main>
  );
}