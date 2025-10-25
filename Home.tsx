import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Plus, Copy, Edit2, Trash2, Code2 } from "lucide-react";
import { toast } from "sonner";

interface Script {
  id: string;
  name: string;
  code: string;
  createdAt: number;
  updatedAt: number;
}

export default function Home() {
  const [, navigate] = useLocation();
  const [scripts, setScripts] = useState<Script[]>([]);

  useEffect(() => {
    loadScripts();
  }, []);

  const loadScripts = () => {
    const stored = JSON.parse(localStorage.getItem("scripts") || "[]");
    setScripts(stored.sort((a: Script, b: Script) => b.updatedAt - a.updatedAt));
  };

  const handleDelete = (id: string) => {
    if (confirm("Tem certeza que deseja deletar este script?")) {
      const updated = scripts.filter((s) => s.id !== id);
      localStorage.setItem("scripts", JSON.stringify(updated));
      setScripts(updated);
      toast.success("Script deletado!");
    }
  };

  const encodeScriptToUrl = (code: string): string => {
    return btoa(unescape(encodeURIComponent(code)));
  };

  const handleCopyUrl = (script: Script) => {
    const encoded = encodeScriptToUrl(script.code);
    const url = `${window.location.origin}/raw.html?code=${encoded}`;
    navigator.clipboard.writeText(url);
    toast.success("URL copiada!");
  };

  const handleCopyLoadstring = (script: Script) => {
    const encoded = encodeScriptToUrl(script.code);
    const url = `${window.location.origin}/raw.html?code=${encoded}`;
    const loadstring = `loadstring(game:HttpGet("${url}"))()`;
    navigator.clipboard.writeText(loadstring);
    toast.success("Loadstring copiada!");
  };

  const formatDate = (timestamp: number) => {
    return new Date(timestamp).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-6xl py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold flex items-center gap-3">
              <Code2 className="w-10 h-10" />
              Script Raw Host
            </h1>
            <p className="text-muted-foreground mt-2">
              Hospede seus scripts Lua e acesse via loadstring
            </p>
          </div>
          <Button
            onClick={() => navigate("/editor")}
            size="lg"
            className="gap-2"
          >
            <Plus className="w-5 h-5" />
            Novo Script
          </Button>
        </div>

        {scripts.length === 0 ? (
          <Card className="p-12 text-center">
            <Code2 className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-xl font-semibold mb-2">Nenhum script ainda</h2>
            <p className="text-muted-foreground mb-4">
              Crie seu primeiro script para começar!
            </p>
            <Button onClick={() => navigate("/editor")}>
              Criar Primeiro Script
            </Button>
          </Card>
        ) : (
          <div className="grid gap-4">
            {scripts.map((script) => (
              <Card key={script.id} className="p-4 hover:shadow-lg transition">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold truncate">
                      {script.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      ID: <code className="bg-muted px-2 py-1 rounded">{script.id}</code>
                    </p>
                    <p className="text-xs text-muted-foreground mt-2">
                      Atualizado em {formatDate(script.updatedAt)}
                    </p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {script.code.length} caracteres
                    </p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => navigate(`/editor/${script.id}`)}
                      className="gap-2"
                    >
                      <Edit2 className="w-4 h-4" />
                      Editar
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleCopyUrl(script)}
                      className="gap-2"
                    >
                      <Copy className="w-4 h-4" />
                      URL
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleCopyLoadstring(script)}
                      className="gap-2 text-xs"
                    >
                      <Code2 className="w-4 h-4" />
                      Loadstring
                    </Button>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleDelete(script.id)}
                      className="gap-2"
                    >
                      <Trash2 className="w-4 h-4" />
                      Deletar
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

