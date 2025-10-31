import { ChevronLeft } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "react-router";
import inaguracaoPraca from "../assets/inauguracao.jpg";
import maquete from "../assets/maquete.png";
import Timeline from "../components/Timeline";
import SectionContainer from "../components/UI/SectionContainer";

const History: React.FC = () => {
  return (
    <>
      <SectionContainer className="pt-24 sm:pt-36">
        <div className="flex flex-col items-center gap-12 md:flex-row md:items-stretch md:gap-24">
          <div className="relative flex grow flex-col justify-center">
            <Link
              to="/"
              className="hover:text-primary/60 text-primary static top-0 left-0 mb-8 flex items-center gap-1 rounded-md text-sm font-medium duration-300 lg:absolute"
            >
              <ChevronLeft className="h-4 w-4" />
              Voltar ao início
            </Link>
            <motion.div
              initial={{ opacity: 0, x: -80, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            >
              <h1 className="text-primary/80 font-serif text-4xl font-semibold md:text-5xl lg:text-6xl xl:text-8xl">
                A <span className="text-primary">história</span> do{" "}
                <span className="text-primary">Parque Sérgio Pacheco</span>
              </h1>
              <p className="mt-3 text-base md:mt-6 md:text-xl lg:text-2xl">
                Descubra quando a praça foi criada, quem foram os idealizadores,
                quem a praça homenageia e muito mais!
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 80, filter: "blur(10px)" }}
            animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            className="aspect-square max-w-4xl sm:w-[480px] md:w-[1500px]"
            transition={{
              delay: 0.2,
              bounce: 0,
              type: "spring",
              duration: 0.4,
            }}
          >
            <img
              className="h-full w-full rounded-md"
              src="https://images.unsplash.com/photo-1610103711589-618f3812b0d6?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470"
            />
          </motion.div>
        </div>
      </SectionContainer>
      <SectionContainer className="mt-32">
        <h2 className="title mb-3 text-3xl">
          Quando a praça foi criada e por qual motivo?
        </h2>
        <p>
          Em novembro de 1976, a praça foi inaugurada sob o prefeito Renato de
          Freitas. Apenas a parte recreativa estava concluída, com espelhos
          d’água, árvores e canteiros elevados. A praça ocupa o terreno da
          antiga Estação Ferroviária da Companhia Mogiana de Estradas de Ferro,
          instalada por volta de 1895. Com o crescimento urbano, a estação foi
          transferida, liberando o espaço. Em 1964, lei municipal garantiu que a
          área fosse destinada a fins cívicos e sociais.
        </p>
        <div className="mt-6 flex flex-col items-center">
          <img src={inaguracaoPraca} className="w-12/12 rounded-md md:w-7/12" />
          <span className="mt-1 text-sm opacity-80">
            Imagem da inauguração da praça, em 1976.
          </span>
        </div>
      </SectionContainer>
      <SectionContainer className="mt-32">
        <h2 className="title mb-3 text-3xl">
          Quem foi o idealizador ou responsável pela obra?
        </h2>
        <div className="flex flex-col gap-6 leading-relaxed">
          <p>
            O primeiro projeto da praça foi feito em 1962, pelo arquiteto João
            Jorge Coury, que não foi para frente naquele período. Coury também
            foi responsável pelo projeto da Praça Tubal Vilela. Ele previa a
            implantação de rodoviária, hotel, Prefeitura, Câmara Municipal,
            fonte, monumento e um parque no local. Em 1972, um segundo projeto
            foi feito por diversos arquitetos e engenheiros, durante a primeira
            gestão do prefeito Virgílio Galassi. Esses arquitetos também
            buscavam a construção dos poderes Executivo, Legislativo e
            Judiciário na praça, que ainda contaria com biblioteca, agência dos
            correios, centro cultural e rodoviária.
          </p>
          <p>
            <span className="font-medium">
              “Esse projeto tinha uma função administrativa, era pra Câmara
              Municipal ser lá, a Prefeitura também. Mas também colocaram uma
              área de lazer”
            </span>
            , detalhou o professor Markus Felipe de Oliveira. Com a mudança de
            governo, o próximo prefeito Renato de Freitas decide paralisar as
            obras e formular um novo projeto, com os arquitetos cariocas Ary
            Garcia Rosa e Roberto Burle Marx. Entenda: Roberto Burle Marx é um
            paisagista conhecido internacionalmente. Entre os trabalhos mais
            conhecidos estão o complexo da Pampulha, em Belo Horizonte, e o
            planejamento do calçadão da Avenida Atlântica, de toda a orla da
            Zona Sul do Rio de Janeiro.{" "}
            <span className="font-medium">
              “A maior crítica que o Burle Marx fez é que o projeto não dava
              espaço para o pedestre e para vivências coletivas. Ele achava que
              deveria tirar as partes que a avenida cruzava dentro das praças”
            </span>
            , completou Oliveira.
          </p>
          <div className="flex flex-col items-center">
            <img src={maquete} className="w-10/12 md:w-4/12" />
            <span className="mt-3 text-sm opacity-80">
              Fotografia da Maquete do Projeto de Ary Garcia Roza e Roberto
              Burle Marx para a praça
            </span>
          </div>
        </div>
      </SectionContainer>
      <SectionContainer className="mt-32">
        <h2 className="title mb-3 text-3xl">
          A praça homenageia alguém? Qual a história dessa pessoa?
        </h2>
        <div className="flex flex-col gap-6 leading-relaxed">
          <p>
            A denominação da praça central da cidade configura-se como um ato de
            memória e reconhecimento histórico. O espaço foi nomeado em
            homenagem a Sérgio de Freitas Pacheco, jovem uberlandense, filho do
            político mineiro Rondon Pacheco, ex-governador de Minas Gerais e
            personalidade de destaque no cenário político nacional.
          </p>
          <p>
            O trágico falecimento de Sérgio, ocorrido em 1º de setembro de 1968,
            quando tinha apenas 23 anos, em decorrência de um acidente
            automobilístico, causou profundo abalo à sua família e à comunidade
            local. Tal episódio conferiu à sua memória um caráter simbólico de
            preservação e respeito, perpetuado por meio da nomeação da principal
            praça da cidade.
          </p>
          <p>
            A escolha de seu nome não se limitou a um gesto simbólico, mas
            consolidou- se como instrumento de preservação da memória coletiva.
            Posteriormente, essa homenagem estendeu-se a outras instituições de
            Minas Gerais, a exemplo de escolas estaduais que também adotaram sua
            denominação, reforçando o legado de Sérgio na esfera educacional e
            social.
          </p>
          <p>
            Dessa forma, a memória de Sérgio de Freitas Pacheco permanece viva,
            não apenas como lembrança afetiva familiar, mas como um marco
            histórico que integra a identidade cultural e cotidiana de milhares
            de cidadãos
          </p>
        </div>
      </SectionContainer>
      <Timeline />
    </>
  );
};

export default History;
