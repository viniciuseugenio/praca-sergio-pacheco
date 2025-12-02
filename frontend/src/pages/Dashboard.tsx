import { Calendar, Settings, Shrub, type LucideIcon } from "lucide-react";
import { useNavigate } from "react-router";
import DashboardNavbar from "../components/UI/DashboardNavbar";
import { useAuth } from "../contexts/AuthContext";

type ActionButton = {
  Icon: LucideIcon;
  to: string;
  title: string;
  description: string;
};

const ActionButton: React.FC<ActionButton> = ({
  Icon,
  to,
  title,
  description,
}) => {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(to)}
      className="group border-primary/20 hover:border-primary/40 rounded-xl border bg-white p-6 text-left shadow-md transition-all hover:shadow-lg"
    >
      <Icon className="text-primary mb-3 h-8 w-8" />
      <h3 className="text-primary mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-primary/70 text-sm">{description}</p>
    </button>
  );
};

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  return (
    <div className="bg-offwhite min-h-screen">
      <DashboardNavbar title="Painel Administrativo" />
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="title text-3xl">Bem-vindo, {user?.username}!</h2>
          <p className="text-primary/70 mt-2">
            Gerencie os eventos da Praça Sérgio Pacheco
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <ActionButton
            Icon={Calendar}
            title="Gerenciar Eventos"
            description="Visualize, crie, edite e exclua eventos"
            to="/admin/events"
          />

          <ActionButton
            Icon={Shrub}
            title="Gerenciar Plantas"
            description="Visualize, crie, edite e exclua elementos da natureza"
            to="/admin/nature-elements"
          />

          <ActionButton
            Icon={Settings}
            title="Configurações"
            description="Ajuste as configurações do painel"
            to="/admin/dashboard"
          />
        </div>

        <div className="border-primary/20 mt-8 rounded-xl border bg-white p-6 shadow-md">
          <h3 className="title mb-4 text-xl">Informações do Sistema</h3>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <p className="text-primary/70 text-sm">Nome de Usuário</p>
              <p className="text-primary font-medium">{user?.username}</p>
            </div>
            <div>
              <p className="text-primary/70 text-sm">Email</p>
              <p className="text-primary font-medium">
                {user?.email || "Não configurado"}
              </p>
            </div>
            <div>
              <p className="text-primary/70 text-sm">Nível de Acesso</p>
              <p className="text-primary font-medium">
                {user?.is_staff ? "Administrador" : "Usuário"}
              </p>
            </div>
            <div>
              <p className="text-primary/70 text-sm">ID do Usuário</p>
              <p className="text-primary font-medium">{user?.id}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
