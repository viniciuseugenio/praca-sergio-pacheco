import { MessageSquare, Send } from "lucide-react";
import SectionContainer from "./UI/SectionContainer";
import SectionTitle from "./UI/SectionTitle";
import InputField from "./UI/InputField";
import { motion } from "motion/react";

const Feedback: React.FC = () => {
  return (
    <SectionContainer className="mt-16">
      <SectionTitle
        title="Compartilhe seus pensamentos"
        description="O seu feedback nos ajuda a aprimorar tanto nosso website quanto a praça. Seja sugestões, críticas ou compartilhar sua experiência, adoraríamos saber sua opinião!"
      />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", bounce: 0 }}
        viewport={{ once: true }}
        className="shadow-md border-primary/10 border p-6 mt-10 rounded-md"
      >
        <div className="grid-cols-[auto_1fr] grid gap-3">
          <div className="bg-primary/10 p-3 h-fit w-fit rounded-md text-primary">
            <MessageSquare />
          </div>
          <div>
            <h3 className="title text-xl sm:text-2xl font-semibold">
              Formulário para feedback
            </h3>
            <p className="opacity-90 text-primary text-sm sm:text-base">
              Nos ajude a deixar a praça e o website ainda melhores!
            </p>
          </div>
        </div>
        <form className="grid-cols-1 md:grid-cols-2 grid gap-6 mt-6">
          <InputField
            id="name"
            name="name"
            label="Seu nome"
            placeholder="Digite seu nome completo"
            type="text"
          />
          <InputField
            id="email"
            name="email"
            label="Endereço de e-mail"
            placeholder="seu.email@exemplo.com"
            type="email"
          />
          <div className="flex col-span-2 flex-col gap-1">
            <label htmlFor="category" className="font-semibold text-primary">
              Categoria
            </label>
            <select
              id="category"
              className="h-12 w-full rounded-md border border-primary/20 bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <option value="website">Website</option>
              <option value="praca">Praça</option>
              <option value="eventos">Eventos</option>
              <option value="vendedores">Vendedores de rua</option>
              <option value="acessibilidade">Acessibilidade</option>
              <option value="seguranca">Segurança</option>
              <option value="sugestao">Sugestão</option>
              <option value="outro">Outro</option>
            </select>
          </div>
          <InputField
            id="subject"
            name="subject"
            type="text"
            placeholder="Descrição breve do seu feedback"
            label="Assunto"
            col_span
          />
          <div className="flex flex-col gap-1 col-span-2">
            <label htmlFor="mensagem" className="font-semibold text-primary">
              Categoria
            </label>
            <textarea
              id="mensagem"
              className="w-full rounded-md border duration-300 border-primary/20 bg-background px-3 py-2 text-base ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              placeholder="Compartilhe seu feedback, sugestões ou críticas. Lemos cada mensagem com atenção."
              rows={4}
            />
          </div>
          <button
            type="button"
            className="flex mt-6 gap-2 col-span-2 text-white w-full justify-center md:justify-start md:col-span-1 md:w-fit px-5 py-3 rounded-md duration-300 hover:bg-primary-hover cursor-pointer bg-primary items-center"
          >
            <Send className="h-5 w-5" />
            <span className="font-medium text-lg">Enviar feedback</span>
          </button>
        </form>
      </motion.div>
    </SectionContainer>
  );
};

export default Feedback;
