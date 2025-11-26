import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import InputField from "../components/UI/InputField";
import { Lock } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";

const Admin: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/admin/dashboard");
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    login.mutate(
      { username, password, rememberMe },
      {
        onSuccess: () => {
          navigate("/admin/dashboard");
        },
      }
    );
  };

  return (
    <div className="from-primary/5 via-offwhite to-primary/20 flex min-h-screen w-screen items-center justify-center bg-gradient-to-br px-4 py-12">
      <div className="w-full max-w-md">
        <div className="border-primary/20 rounded-2xl border bg-white/80 p-8 py-10 shadow-2xl backdrop-blur-sm md:p-12 md:py-14">
          <div className="mb-8 text-center">
            <div className="bg-primary/10 mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
              <Lock className="h-7 w-7" />
            </div>
            <h1 className="title mb-2 text-3xl md:text-4xl">
              Praça Sérgio Pacheco
            </h1>
            <p className="text-primary/70 text-sm font-medium">
              Faça login para acessar o painel administrativo
            </p>
          </div>

          {login.isError && (
            <div className="mb-4 rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600">
              {login.error?.message || "Erro ao fazer login"}
            </div>
          )}

          <form className="space-y-5" onSubmit={handleSubmit}>
            <InputField
              label="Username"
              id="username"
              placeholder="Insira seu username"
              name="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <InputField
              label="Senha"
              id="senha"
              placeholder="Insira sua senha"
              name="senha"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  className="border-primary/30 text-primary focus:ring-primary h-4 w-4 rounded"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <span className="text-primary/70">Lembrar de mim</span>
              </label>
              <a
                href="#"
                className="text-primary hover:text-primary-hover font-medium transition-colors"
              >
                Esqueceu a senha?
              </a>
            </div>
            <button
              type="submit"
              disabled={login.isPending}
              className="bg-primary hover:bg-primary-hover group relative w-full cursor-pointer overflow-hidden rounded-lg px-4 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
            >
              <span className="relative z-10">
                {login.isPending ? "Entrando..." : "Entrar"}
              </span>
              <div className="absolute inset-0 -z-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-[100%]"></div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Admin;
