import Image from "next/image";
import fundo from "../../public/ipb-igraja-fundo.png"

export default function Home() {
  return (
    <main className="bg-gray-50 text-gray-800 dark:bg-gray-700 dark:text-gray-100 min-h-screen">
       <div className="relative w-full h-svh">
        {/* Imagem de fundo */}
        <Image
          src={fundo}
          alt="imagem da igreja presbiteriana"
          fill
          className="object-cover"
        />

        {/* Overlay semitransparente (opcional) */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Texto sobre a imagem */}
        <div className="absolute inset-0 flex flex-col items-stretch text-white z-10 px-4 py-6">
          <div className="text-center">
          <h1 className="text-4xl font-bold">Cantina da Igreja Presbiteriana</h1>
          <p className="mt-2 text-lg">Apoie nossos projetos!</p>
          </div>
        <section className="py-10 px-4 text-center">
          <h2 className="text-2xl font-semibold text-center mb-6">Sobre a Cantina</h2>
          <p className="max-w-2xl mx-auto text-center text-lg">
            A cantina da Igreja Presbiteriana tem como objetivo arrecadar fundos para ações sociais, eventos da juventude e manutenção do templo.
          </p>
        </section>
        <div className="items-center justify-center flex flex-col gap-4 mt-6">
          <span className="text-white text-2xl">Logo a baixo poderá ver os Itens a venda!</span>
        </div>
        </div>
      </div>
      <div className="">        
        {/* Produtos à venda */}
        <section className="py-10 px-4 bg-white dark:bg-gray-700">
          <h2 className="text-2xl font-semibold text-center mb-6">Produtos à Venda</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-4 border rounded shadow-sm dark:border-gray-700 dark:bg-gray-900">
              <h3 className="text-xl font-medium">Coxinha</h3>
              <p>R$ 5,00 - Feita com frango temperado e massa caseira.</p>
            </div>
            <div className="p-4 border rounded shadow-sm dark:border-gray-700 dark:bg-gray-900">
              <h3 className="text-xl font-medium">Refrigerante</h3>
              <p>R$ 4,00 - Lata 350ml (Coca, Guaraná, etc.)</p>
            </div>
            <div className="p-4 border rounded shadow-sm dark:border-gray-700 dark:bg-gray-900">
              <h3 className="text-xl font-medium">Pastel</h3>
              <p>R$ 6,00 - Sabores variados (carne, queijo, pizza).</p>
            </div>
          </div>
        </section>

        {/* Representantes */}
        <section className="py-10 px-4 bg-gray-100 dark:bg-gray-800">
          <h2 className="text-2xl font-semibold text-center mb-6">Representantes</h2>
          <div className="max-w-2xl mx-auto space-y-4 text-center">
            <p><strong>Maria Souza</strong> - (11) 99999-9999</p>
            <p><strong>João Pedro</strong> - (11) 98888-8888</p>
            <p><strong>Ana Clara</strong> - (11) 97777-7777</p>
          </div>
        </section>

        {/* Informações adicionais */}
        <section className="py-10 px-4">
          <h2 className="text-2xl font-semibold text-center mb-6">Informações Adicionais</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p>📍 Local: Salão Social da Igreja Presbiteriana Central</p>
            <p>🕒 Horário: Domingo, após o culto da manhã (10h às 12h)</p>
            <p>💳 Pagamento: Dinheiro, PIX ou cartão</p>
          </div>
        </section>
      </div>
    </main>
  );
}
