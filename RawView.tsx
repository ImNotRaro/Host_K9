import { useParams } from "wouter";
import { useEffect, useState } from "react";

interface Script {
  id: string;
  name: string;
  code: string;
  createdAt: number;
  updatedAt: number;
}

export default function RawView() {
  const { id } = useParams<{ id: string }>();
  const [script, setScript] = useState<Script | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!id) {
      setNotFound(true);
      return;
    }

    // Buscar o script do localStorage
    const scripts = JSON.parse(localStorage.getItem("scripts") || "[]");
    const found = scripts.find((s: Script) => s.id === id);

    if (found) {
      setScript(found);
    } else {
      setNotFound(true);
    }
  }, [id]);

  // Se encontrou o script, renderizar apenas o código em uma pre tag
  if (script) {
    return (
      <pre style={{
        margin: 0,
        padding: 0,
        fontFamily: "monospace",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word",
        backgroundColor: "#fff",
        color: "#000"
      }}>
        {script.code}
      </pre>
    );
  }

  // Se não encontrou
  if (notFound) {
    return (
      <pre style={{
        margin: 0,
        padding: 0,
        fontFamily: "monospace",
        backgroundColor: "#fff",
        color: "#000"
      }}>
        Script nao encontrado
      </pre>
    );
  }

  // Carregando
  return (
    <pre style={{
      margin: 0,
      padding: 0,
      fontFamily: "monospace",
      backgroundColor: "#fff",
      color: "#000"
    }}>
      Carregando...
    </pre>
  );
}

