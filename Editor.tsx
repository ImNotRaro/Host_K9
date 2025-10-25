import { useState, useEffect } from "react";
import { useParams, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Copy, Save, Plus, ArrowLeft } from "lucide-react";
import { toast } from "sonner";

interface Script {
  id: string;
  name: string;
  code: string;
  createdAt: number;
  updatedAt: number;
}

export default function Editor() {
  const { id } = useParams<{ id?: string }>();
  const [, navigate] = useLocation();
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (id) {
      const scripts = JSON.parse(localStorage.getItem("scripts") || "[]");
      const script = scripts.find((s: Script) => s.id === id);
      if (script) {
        setName(script.name);
        setCode(script.code);
      }
    }
  }, [id]);

  const generateId = () => {
    return Math.random().toString(36).substring(2, 10) +
           Math.random().toString(36).substring(2, 10);
  };

  const encodeScriptToUrl = (scriptCode: string): string => {
    return btoa(unescape(encodeURIComponent(scriptCode)));
  };

  const handleSave = () => {
    if (!name.trim()) {
      toast.error("Nome do script é obrigatório");
      return;
    }
    if (!code.trim()) {
      toast.error("Código do script é obrigatório");
      return;
    }

    setIsSaving(true);
    const scripts = JSON.parse(localStorage.getItem("scripts") || "[]");
    const now = Date.now();

    if (id) {
      const index = scripts.findIndex((s: Script) => s.id === id);
      if (index !== -1) {
        scripts[index] = {
          ...scripts[index],
          name,
          code,
          updatedAt: now,
        };
      }
    } else {
      const newId = generateId();
      scripts.push({
        id: newId,
        name,
        code,
        createdAt: now,
        updatedAt: now,
      });
    }

    localStorage.setItem("scripts", JSON.stringify(scripts));
    setIsSaving(false);
    toast.success(id ? "Script atualizado!" : "Script criado!");
    navigate("/");
  };

  const rawUrl = code ? `${window.location.origin}/raw.html?code=${encodeScriptToUrl(code)}` : null;

  const handleCopyUrl = () => {
    if (rawUrl) {
      navigator.clipboard.writeText(rawUrl);
      toast.success("URL copiada!");
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container max-w-6xl py-8">
        <div className="flex items-center gap-4 mb-8">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => navigate("/")}
          >
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <h1 className="text-3xl font-bold">
            {id ? "Editar Script" : "Novo Script"}
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-4">
            <Card className="p-4">
              <label className="block text-sm font-medium mb-2">
                Nome do Script
              </label>
              <Input
                placeholder="Ex: Meu Script Incrível"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Card>

            <Card className="p-4">
              <label className="block text-sm font-medium mb-2">
                Código Lua
              </label>
              <Textarea
                placeholder="Coloque seu código Lua aqui..."
                value={code}
                onChange={(e) => setCode(e.target.value)}
                className="font-mono text-sm min-h-96 resize-none"
              />
            </Card>

            <div className="flex gap-2">
              <Button
                onClick={handleSave}
                disabled={isSaving}
                className="flex-1"
              >
                <Save className="w-4 h-4 mr-2" />
                {isSaving ? "Salvando..." : "Salvar Script"}
              </Button>
              <Button
                variant="outline"
                onClick={() => navigate("/")}
              >
                Cancelar
              </Button>
            </div>
          </div>

          {rawUrl && (
            <div className="lg:col-span-1">
              <Card className="p-4 sticky top-4">
                <h2 className="font-bold mb-4">URL Raw</h2>
                <div className="space-y-3">
                  <div className="bg-muted p-3 rounded text-xs font-mono break-all">
                    {rawUrl}
                  </div>
                  <Button
                    onClick={handleCopyUrl}
                    className="w-full"
                    variant="default"
                  >
                    <Copy className="w-4 h-4 mr-2" />
                    Copiar URL
                  </Button>
                  <div className="bg-muted p-3 rounded text-xs">
                    <p className="font-bold mb-2">Exemplo de uso:</p>
                    <code className="block font-mono text-xs break-all">
                      loadstring(game:HttpGet("{rawUrl}"))()
                    </code>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

