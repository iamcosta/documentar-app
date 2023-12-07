export type Pessoa = {
  id: number;
  nome: string;
  nascimento: string;
  idade: number;
  tipo: PessoaTipo;
}

export type PessoaTipo = "RESPONSAVEL" | "DEPENDENTE" | "PESSOA"; 