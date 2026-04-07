import Image from "next/image";
import { useLanguage } from "@/src/context/LanguageContext";

export default function Sobre() {
  const { t } = useLanguage();
  return (
    <section id="sobre" className="scroll-mt-20 min-h-[calc(100vh-5rem)] max-w-6xl mx-auto px-6 py-12 flex flex-col justify-center">
      <h2 className="text-3xl font-light tracking-wider text-white mb-8 uppercase border-b border-white/25 pb-2 inline-block">
        {t.about.title}
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.7fr] gap-10 items-start">
        <div className="space-y-6 text-lg font-light text-zinc-200 leading-relaxed text-justify">
          <p>
            {t.about.text1}
          </p>
          <p>
            {t.about.text2}
          </p>
        </div>

        <div className="w-full max-w-sm mx-auto lg:mx-0 lg:justify-self-end relative">
          {/* Abstract Glow Background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent rounded-[60%_40%_30%_70%_/_60%_30%_70%_40%] blur-2xl opacity-40" />
          
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
