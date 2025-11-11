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
        className="border-primary/10 mt-10 rounded-md border p-6 shadow-md"
      >
        <div className="grid grid-cols-[auto_1fr] gap-3">
          <div className="bg-primary/10 text-primary h-fit w-fit rounded-md p-3">
            <MessageSquare />
          </div>
          <div>
            <h3 className="title text-xl font-semibold sm:text-2xl">
              Formulário para feedback
            </h3>
            <p className="text-primary text-sm opacity-90 sm:text-base">
              Nos ajude a deixar a praça e o website ainda melhores!
            </p>
          </div>
        </div>
        <form className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
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
          <div className="col-span-2 flex flex-col gap-1">
            <label htmlFor="category" className="text-primary font-semibold">
              Categoria
            </label>
            <select
              id="category"
              className="border-primary/20 bg-background ring-offset-background focus-visible:ring-ring h-12 w-full rounded-md border px-3 py-2 text-base focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
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
          <div className="col-span-2 flex flex-col gap-1">
            <label
              htmlFor="mensagem"
              id="mensagem-label"
              className="text-primary font-semibold"
            >
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              aria-describedby="mensagem-label"
              className="border-primary/20 bg-background ring-offset-background focus-visible:ring-ring w-full rounded-md border px-3 py-2 text-base duration-300 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
              placeholder="Compartilhe seu feedback, sugestões ou críticas. Lemos cada mensagem com atenção."
              rows={4}
            />
          </div>
          <button
            type="button"
            className="hover:bg-primary-hover bg-primary col-span-2 mt-6 flex w-full cursor-pointer items-center justify-center gap-2 rounded-md px-5 py-3 text-white duration-300 md:col-span-1 md:w-fit md:justify-start"
          >
            <Send className="h-5 w-5" />
            <span className="text-lg font-medium">Enviar feedback</span>
          </button>
        </form>
      </motion.div>
    </SectionContainer>
  );
};

export default Feedback;
