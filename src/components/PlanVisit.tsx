import { Accessibility, Bus, Car, Phone } from "lucide-react";
import { motion } from "motion/react";
import type { LucideIcon } from "../types/global";
import SectionContainer from "./UI/SectionContainer";
import SectionTitle from "./UI/SectionTitle";

type TrajectBoxProps = React.PropsWithChildren<{
  Icon: LucideIcon;
  title: string;
  delay?: number;
}>;

const TrajectBox: React.FC<TrajectBoxProps> = ({
  Icon,
  title,
  children,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay }}
      viewport={{ once: true }}
      className="border-primary/10 mt-5 grid grid-cols-[auto_1fr] gap-4 rounded-md border bg-white p-6 shadow-sm"
    >
      <div className="bg-primary/20 text-primary h-fit w-fit rounded-md p-3">
        <Icon aria-hidden="true" />
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="text-primary font-serif text-xl font-semibold">
          {title}
        </h3>
        {children}
      </div>
    </motion.div>
  );
};

type VisitorInfoProps = React.PropsWithChildren<{
  Icon: LucideIcon;
  title: string;
  delay?: number;
}>;

const VisitorInfo: React.FC<VisitorInfoProps> = ({
  Icon,
  title,
  children,
  delay = 0,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="border-primary/10 mt-5 w-full rounded-md border bg-white p-6 shadow-sm"
    >
      <div className="flex items-center gap-3">
        <Icon className="h-5 w-5" />
        <h3 className="text-primary font-serif text-xl font-semibold">
          {title}
        </h3>
      </div>
      <ul className="text-primary mt-3 flex flex-col gap-2 text-sm opacity-90 sm:text-base">
        {children}
      </ul>
    </motion.div>
  );
};

const PlanVisit: React.FC = () => {
  return (
    <div className="bg-primary/5 mt-32 py-16">
      <SectionContainer id="direcoes" className="pt-24">
        <SectionTitle
          title="Planeje sua visita"
          description="Obtenha direções, informações sobre o clima e acessibilidade"
        />
        <div className="mt-12 grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-primary font-serif text-2xl font-semibold">
              Como chegar aqui
            </h2>
            <TrajectBox delay={0.3} Icon={Car} title="De carro">
              <div className="mt-2 flex flex-col gap-2 text-sm sm:text-base">
                <p className="opacity-90">
                  <span className="text-primary font-semibold">Endereço: </span>{" "}
                  Próximo à avenida João Pessoa, avenida Brasil e avenida
                  Fernando Vilela
                </p>
                <p className="opacity-80">
                  Estacionamento gratuito disponível com espaço para 200 vagas.
                </p>
                <a
                  href="https://maps.app.goo.gl/XbfRvZFugMRaqiYr7"
                  className="text-primary cursor-pointer text-sm underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Veja no Google Maps
                </a>
              </div>
            </TrajectBox>
            <TrajectBox delay={0.6} Icon={Bus} title="De ônibus">
              <div className="mt-2 flex flex-col gap-2 text-sm sm:text-base">
                <p className="opacity-90">
                  <span className="text-primary font-semibold">Trajeto:</span>{" "}
                  Qualquer ônibus que vá em direção ao Terminal Central
                </p>
                <p className="opacity-80">
                  Ao desembarcar, saia pela avenida João Pessoa e suba até
                  chegar à praça.
                </p>
              </div>
            </TrajectBox>
          </div>
          <div>
            <h2 className="text-primary font-serif text-2xl font-semibold">
              Informações para visitantes
            </h2>
            <div>
              <VisitorInfo
                delay={0.3}
                Icon={Accessibility}
                title="Acessibilidade"
              >
                <li>• Acessibilidade para cadeira de rodas</li>
                <li>• Banheiros acessiveis em três pontos diferentes</li>
                <li>• Vagas de estacionamento reservadas</li>
                <li>• Guias de áudio para deficientes visuais</li>
                <li>• Sinalização em braille em locais estratégicos</li>
              </VisitorInfo>

              <VisitorInfo
                Icon={Phone}
                delay={0.6}
                title="Informações para Contato"
              >
                <li>
                  <span className="text-primary font-bold">
                    Informações gerais:
                  </span>{" "}
                  (34) 9544-2933
                </li>
                <li>
                  <span className="text-primary font-bold">Eventos:</span>{" "}
                  eventos@sergiopacheco.gov
                </li>
                <li>
                  <span className="text-primary font-bold">Website:</span>{" "}
                  sergiopacheco.netlify.app
                </li>
              </VisitorInfo>
            </div>
          </div>
        </div>
      </SectionContainer>
    </div>
  );
};

export default PlanVisit;
