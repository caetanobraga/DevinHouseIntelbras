import { Footer, Header, Secao } from "@components";
import produtos from "@services/produtos.json";
import { FiltroSecao } from "@components";
import styles from "./App.module.css";
import { useState } from "react";
import { ProdutosSelecionadosProvider } from "./contexts/ProdutosSelecionados";

const subSecoesEntradas = new Set(produtos.entradas.map((p) => p.subSecao));
const subSecoesPrincipais = new Set(produtos.principais.map((p) => p.subSecao));

const secoes = [
  {
    nome: "Entradas",
    produtos: produtos.entradas,
    subSecoes: subSecoesEntradas,
  },
  {
    nome: "Principais",
    produtos: produtos.principais,
    subSecoes: subSecoesPrincipais,
  },
  { nome: "Sobremesas", produtos: produtos.sobremesas },
];

function App() {
  const [filtro, setFiltro] = useState(null);

  const handleSelecionarSecao = (titulo) => {
    if (filtro === titulo) {
      setFiltro(null);
    } else {
      setFiltro(titulo);
    }
  };

  const secoesFiltradas = filtro
    ? secoes.filter((secao) => secao.nome === filtro)
    : secoes;

  return (
    <div className={styles.app}>
      <ProdutosSelecionadosProvider>
        <Header />
        <FiltroSecao
          secoes={secoes}
          onSelecionarSecao={handleSelecionarSecao}
        ></FiltroSecao>
        <main className={styles.main}>
          {secoesFiltradas.map((secao) => {
            return (
              <Secao
                key={secao.nome}
                nome={secao.nome}
                produtos={secao.produtos}
                subSecoes={secao.subSecoes && Array.from(secao.subSecoes)}
              />
            );
          })}
        </main>
        <Footer />
      </ProdutosSelecionadosProvider>
    </div>
  );
}

export default App;
