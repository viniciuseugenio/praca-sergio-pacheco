import { Calendar, LogOut, Plus, Settings, User } from "lucide-react";
import { useNavigate } from "react-router";
import { useAuth } from "../contexts/AuthContext";

type ActionButton = {
  Icon: LucideProps;
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
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout.mutate(undefined, {
      onSuccess: () => {
        navigate("/admin");
      },
    });
  };

  return (
    <div className="bg-offwhite min-h-screen">
      <nav className="bg-primary shadow-lg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <h1 className="text-xl font-bold text-white">
                Painel Administrativo
              </h1>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-white">
                <User className="h-5 w-5" />
                <span className="text-sm font-medium">{user?.username}</span>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 rounded-lg bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white/20"
              >
                <LogOut className="h-4 w-4" />
                Sair
              </button>
            </div>
          </div>
        </div>
      </nav>

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
            description="Visualize, edite e exclua eventos"
            to="/admin/events"
          />

          <ActionButton
            Icon={Plus}
            title="Criar Novo Evento"
            description="Adicione um novo evento ao sistema"
            to="/admin/events"
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
