import React from 'react';
import { Terminal, Mail, Search, Brain, Instagram, Disc as Discord, Send, Newspaper } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div 
        className="h-[90vh] flex flex-col items-center justify-center relative overflow-hidden"
        style={{
          backgroundImage: 'url("https://i.ibb.co/Fb0yw0h0/Captura-de-tela-2025-02-20-044402.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/90"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black"></div>
        
        <div className="absolute inset-0 opacity-20 bg-[linear-gradient(0deg,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[length:100%_4px] animate-matrix"></div>
        
        <div className="relative z-10 text-center">
          <div className="flex justify-center mb-12">
            <img 
              src="/src/logo.png" 
              alt="Logotipo KHF" 
              className="w-auto h-[45vh] animate-pulse"
              style={{ maxWidth: '70vw' }}
            />
          </div>
          <p className="text-3xl text-white mb-6 font-display tracking-[0.2em] font-black">NEVERLAND INVESTIGAÇÃO CIBERNÉTICA</p>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto px-4 font-mono mb-8">
          Cyber investigation initiative to apprehend cybercriminals and prevent massacres. We keep our friends close, and our enemies closer.
          </p>
          
          <div className="flex justify-center gap-8 items-center">
            <a href="https://discord.gg/arhUd4yjnH" target="_blank" rel="noopener noreferrer" className="group">
              <div className="flex flex-col items-center">
                <Discord className="w-8 h-8 text-white group-hover:text-purple-500 transition-colors" />
                <span className="text-sm font-mono mt-2 text-gray-400 group-hover:text-purple-500 transition-colors">Discord</span>
              </div>
            </a>
            <a href="https://instagram.com/neverland.nv" target="_blank" rel="noopener noreferrer" className="group">
              <div className="flex flex-col items-center">
                <Instagram className="w-8 h-8 text-white group-hover:text-pink-500 transition-colors" />
                <span className="text-sm font-mono mt-2 text-gray-400 group-hover:text-pink-500 transition-colors">Instagram</span>
              </div>
            </a>
            <a href="https://t.me/investigacaocybernetica" target="_blank" rel="noopener noreferrer" className="group">
              <div className="flex flex-col items-center">
                <Send className="w-8 h-8 text-white group-hover:text-blue-500 transition-colors" />
                <span className="text-sm font-mono mt-2 text-gray-400 group-hover:text-blue-500 transition-colors">Telegram</span>
              </div>
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"></div>
      </div>

      <section className="py-24 bg-black relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-12 text-white font-display tracking-[0.2em]">OBJETIVO</h2>
          <div className="space-y-8">
            <p className="text-2xl text-gray-300 font-mono leading-relaxed">
            A Neverland é composta por pessoas com o objetivo em comum de ajudar na apreensão de cibercriminosos.
            </p>
            <p className="text-2xl text-gray-300 font-mono leading-relaxed">
            Membros ajudam com infiltrações, engenharia social, informações e materiais pra denúncia.
            </p>
            <p className="text-2xl text-gray-300 font-mono leading-relaxed">
            Assim impedimos massacres escolares e contribuimos na prisão de mentores de massacres, pedófilos, cibercriminosos.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950 relative">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-16 text-center text-white font-display tracking-[0.2em]">MEMBROS</h2>
          <div className="grid grid-cols-1 gap-16">
         
            <CartaoMembro
              nome="DEUSDOMEDO"
              cargo="FUNDADOR"
              instagram="deusdomed0"
              habilidades={[
                { icone: <Search className="w-6 h-6" />, nome: "OSINT" },
                { icone: <Terminal className="w-6 h-6" />, nome: "HACKING" },
                { icone: <Brain className="w-6 h-6" />, nome: "ENGENHARIA SOCIAL" }
              ]}
              descricao="Apareceu na TV e nos maiores sites de tecnologia do país. Hackeou +500 sites e 20 mil computadores, incluindo orgãos grandes do poder judiciario, militar, politico, governamental, empresas internacionais, multimilionárias, pessoas & políticos. Cuida de casos em várias plataformas, impediu +10 massacres escolares, ajudou em +30 prisões e +200 casos."
            />
             <CartaoMembro 
              nome="DIVINITY"
              cargo="FUNDADOR"
              instagram="yciberlab"
              habilidades={[
                { icone: <Search className="w-6 h-6" />, nome: "OSINT" },
                { icone: <Terminal className="w-6 h-6" />, nome: "HACKING" },
                { icone: <Brain className="w-6 h-6" />, nome: "ENGENHARIA SOCIAL" }
              ]}
              descricao="Sempre odiou a pedofilia/doentes na rede e os puniu, mas agora tem feito isso da forma 'correta'. Ele é o melhor no quesito engenharia social (tendo usado disso a sua vida inteira) para beneficio próprio, fora da internet e em cenários reais. Com suas habilidades ele impediu diversos massacres escolares e ajudou na prisão dos piores cibercriminosos do Discord, Instagram, Telegram, Litchmatch, Etc."
            />
             <CartaoMembro 
              nome="BELFEGOR"
              cargo="ADMIN"
              instagram="belfegorlightt"
              habilidades={[
                { icone: <Search className="w-6 h-6" />, nome: "OSINT" },
                { icone: <Terminal className="w-6 h-6" />, nome: "HACKING" },
                { icone: <Brain className="w-6 h-6" />, nome: "ENGENHARIA SOCIAL" }
              ]}
              descricao="Travou o zap e Foi bloqueado pelo Presidente dos Estados Unidos. Hackeou 80% das pessoas que investigou. Metade do seu histórico no youtube é sobre Linux e Alexandre de moraes. Desde 2023 ajuda em quase todas prisões da Neverland."
            />
            <CartaoMembro 
              nome="KATANA"
              cargo="ADMIN"
              instagram="katanaz70"
              habilidades={[
                { icone: <Search className="w-6 h-6" />, nome: "OSINT" },
                { icone: <Terminal className="w-6 h-6" />, nome: "HACKING" },
                { icone: <Brain className="w-6 h-6" />, nome: "ENGENHARIA SOCIAL" }
              ]}
              descricao="Já liderou quatro grupos de Investigação Cibernética. Se infiltrou nos piores grupos e conseguiu informações e dados de centenas de pedófilos. É um dos que + contribuiu nos casos e prisões do Discord. "
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-black relative">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-5xl font-bold mb-16 text-center text-white font-display tracking-[0.2em]">CASOS EM QUE ATUAMOS</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <CartaoNoticia 
              icone={<Newspaper className="w-8 h-8" />}
              titulo="Operação policial prende suspeitos de pedofilia e estupros virtuais"
              descricao="Agentes cumpriram mandados de apreensão contra adolescentes envolvidos."
              url="https://agenciabrasil.ebc.com.br/geral/noticia/2024-11/operacao-policial-prende-suspeitos-de-pedofilia-e-estupros-virtuais"
            />
            <CartaoNoticia 
              icone={<Newspaper className="w-8 h-8" />}
              titulo="Jovem é detido em São Paulo acusado de gravíssimos crimes cibernéticos e pedofilia"
              descricao="Um jovem foi detido em São Paulo após ser acusado de crimes cibernéticos e pedofilia. A investigação revelou uma extensa rede de atividades criminosas online."
              url="https://newsic.com.br/jovem-e-detido-em-sao-paulo-acusado-de-gravissimos-crimes-ciberneticos-e-pedofilia/"
            />
            <CartaoNoticia 
              icone={<Newspaper className="w-8 h-8" />}
              titulo="PF e MJSP prendem homem que usava redes sociais para prática de crimes"
              descricao="Ação foi realizada pela PF com o apoio do Ministério da Justiça e Segurança Pública (MJSP), por meio do Laboratório de Operações Cibernéticas (Ciberlab)."
              url="https://www.gov.br/pf/pt-br/assuntos/noticias/2024/02/pf-e-mjsp-prendem-homem-que-usava-redes-sociais-para-pratica-de-crimes"
            />
                 <CartaoNoticia 
              icone={<Newspaper className="w-8 h-8" />}
              titulo="Adolescente de 17 anos é apreendido após estupro virtual no DF"
              descricao="Segundo a PCDF, jovem apreendido em flagrante vivia em uma residência com sinais de degradação tomada por baratas e sujeira."
              url="https://www.metropoles.com/distrito-federal/adolescente-de-17-anos-e-apreendido-apos-estupro-virtual-no-df"
            />
            <CartaoNoticia 
              icone={<Newspaper className="w-8 h-8" />}
              titulo="Em Itacajá, Polícia Civil apreende diversos equipamentos eletrônicos que podem estar ligados a crimes sexuais pela internet"
              descricao="Ação visa apurar os possíveis crimes que estariam sendo praticados contra vítimas do Tocantins e de outros Estados."
              url="https://www.to.gov.br/ssp/noticias/em-itacaja-policia-civil-apreende-diversos-equipamentos-eletronicos-que-podem-estar-ligados-a-crimes-sexuais-pela-internet/4xvequed9m8q"
            />
            <CartaoNoticia 
              icone={<Newspaper className="w-8 h-8" />}
              titulo="Adolescente suspeito de compartilhar conteúdos de terrorismo, nazismo e pornografia infantil em redes sociais é apreendido no Paraná"
              descricao="Polícia também afirma que adolescente incentivava automutilação de meninas através de ameaças, baseadas em dados e fotos íntimas das vítimas. g1 tenta identificar defesa dele."
              url="https://g1.globo.com/pr/norte-noroeste/noticia/2024/09/14/adolescente-suspeito-de-compartilhar-conteudos-de-terrorismo-nazismo-e-pornografia-infantil-em-redes-sociais-e-apreendido-no-parana.ghtml"
            />
          </div>
        </div>
      </section>

      <section className="py-24 bg-zinc-950 relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-12 text-white font-display tracking-[0.2em]">FAÇA SUA DENÚNCIA</h2>
          <div className="bg-black border border-white/10 p-8 rounded-lg">
            <div className="flex justify-center mb-8">
              <Mail className="w-16 h-16 text-red-500" />
            </div>
            <h3 className="text-2xl font-bold mb-6 font-display tracking-wider">Como Denunciar</h3>
            <div className="space-y-4 text-left max-w-2xl mx-auto">
              <p className="text-gray-300 font-mono">
                1. Envie sua denúncia para: <span className="text-red-500 font-bold">neverland@theneverland.xyz</span>
              </p>
              <p className="text-gray-300 font-mono">
                2. Inclua o máximo de informação possível sobre o caso
              </p>
              <p className="text-gray-300 font-mono">
                3. Adicione evidências como gravações de tela, links ou arquivos relevantes
              </p>
              <p className="text-gray-300 font-mono">
                4. Se possível, forneça informações sobre a localização ou identidade dos envolvidos
              </p>
            </div>
            <div className="mt-8 p-4 bg-red-500/10 rounded-lg">
              <p className="text-red-400 font-mono text-sm">
                Sua identidade será mantida em total sigilo. Todas as denúncias são tratadas com máxima seriedade e confidencialidade.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-zinc-950 relative">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-5xl font-bold mb-12 text-white font-display tracking-[0.2em]">RECRUTAMENTO</h2>
          <div className="bg-black border border-white/10 p-8 rounded-lg">
            <div className="flex justify-center mb-8">
              <Mail className="w-16 h-16 text-red-500" />
            </div>
            <h3 className="text-2xl font-bold mb-6 font-display tracking-wider">QUER SER MEMBRO DA NEVERLAND ?</h3>
            <div className="space-y-4 text-left max-w-2xl mx-auto">
              <p className="text-gray-300 font-mono">
                1. Passe no formulário: <span className="text-red-500 font-bold">https://forms.gle/u1ow2DSBMD3p3wyE9</span>
              </p>
              <p className="text-gray-300 font-mono">
                2. Após passar no formulário, passe na Entrevista.
              </p>
              <p className="text-gray-300 font-mono">
                3. Passando na entrevista, você receberá alguns casos...
              </p>
              <p className="text-gray-300 font-mono">
                4. Tendo êxito neles poderá fazer parte da Neverland.
              </p>
            </div>
            <div className="mt-8 p-4 bg-red-500/10 rounded-lg">
              <p className="text-red-400 font-mono text-sm">
                Isso costuma ser um processo longo, normalmente todos são eliminados no começo. 
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-black text-center border-t border-white/10">
        <p className="text-white font-display tracking-wider font-bold text-xl">Desenvolvido por Katana7z</p>
      </footer>
    </div>
  );
}

function CartaoMembro({ nome, cargo, habilidades, descricao, instagram }) {
  return (
    <div className="p-8 bg-black border border-white/10 hover:border-white/30 transition-all group">
      <div className="grid md:grid-cols-[1fr_2fr] gap-8">
        <div>
          <h3 className="text-4xl font-bold mb-2 font-display tracking-wider">{nome}</h3>
          <p className="text-xl text-gray-500 mb-4 font-mono">{cargo}</p>
          <a 
            href={`https://instagram.com/${instagram}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-pink-500 transition-colors mb-6 font-mono"
          >
            <Instagram className="w-5 h-5" />
            @{instagram}
          </a>
          <div className="flex flex-wrap gap-4">
            {habilidades.map((habilidade, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-400">
                {habilidade.icone}
                <span className="font-mono text-sm">{habilidade.nome}</span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="text-xl text-gray-300 font-mono leading-relaxed">{descricao}</p>
        </div>
      </div>
    </div>
  );
}

function CartaoNoticia({ icone, titulo, descricao, url }) {
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="block p-8 bg-black border border-white/10 hover:border-white/30 transition-all group"
    >
      <div className="mb-6 text-white group-hover:text-red-500 transition-colors">{icone}</div>
      <h3 className="text-2xl font-bold mb-4 font-display tracking-wider group-hover:text-red-500 transition-colors">{titulo}</h3>
      <p className="text-gray-400 font-mono">{descricao}</p>
      <div className="mt-4 text-red-500 font-mono text-sm">Clique para ler mais →</div>
    </a>
  );
}

export default App;