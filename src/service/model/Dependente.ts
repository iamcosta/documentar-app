import { Pessoa } from "./Pessoa";
import { Responsavel } from "./Responsavel";

export type Dependente = Pessoa & {
  responsavel: ResponsavelDependente;
}

export type ResponsavelDependente = Omit<Responsavel, "dependentes">