import Image from "next/image";

export default function Sobre() {
  return (
    <section id="sobre" className="scroll-mt-20 min-h-[calc(100vh-5rem)] max-w-6xl mx-auto px-6 py-12 flex flex-col justify-center">
      <h2 className="text-3xl font-light tracking-wider text-white mb-8 uppercase border-b border-white/25 pb-2 inline-block">
        Sobre Mim
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-10 items-start">
        <div className="space-y-6 text-lg font-light text-zinc-200 leading-relaxed text-justify">
          <p>
            Olá! Sou o Ramon, sou um desenvolvedor Full-Stack, com conhecimento sólidos em backend em Spring Boot e Laravel, e frontend em Next.js. Comecei meus estudos de desenvolvimento em 2020 com HTML e CSS básicos, e desde então venho me aprimorando cada vez mais, sendo uma pessoa que busca sempre resolver os problemas da forma mais eficiente possível, e que adora aprender novas tecnologias. Sou apaixonado por criar soluções que sejam não apenas funcionais, mas também elegantes e intuitivas.
          </p>
          <p>
            Agora falando sobre mim um pouco, eu amo viajar e conhecer lugares novos, especialmente culturas diferentes. Sou um grande fã de quadrinhos e jogos, sendo os meus hobbies favoritos ler livros e jogar videogame. Também passar um tempo com a minha família é essencial dedicando sempre um tempo para isso, e por fim, sou um grande entusiasta de tecnologia, sempre buscando me manter atualizado com as últimas tendências e inovações no mundo do desenvolvimento.
          </p>
        </div>

        <div className="w-full max-w-sm mx-auto lg:mx-0 lg:justify-self-end relative">
          {/* Abstract Glow Background */}
          <div className="absolute -inset-4 bg-gradient-to-tr from-white/20 to-transparent rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] blur-2xl opacity-40" />
          
          <div className="relative aspect-[4/5] overflow-hidden rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] border border-white/20 bg-zinc-900 shadow-2xl">
            <Image
              src="/img/foto perfil.jpeg"
              alt="Ramon Romano"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
