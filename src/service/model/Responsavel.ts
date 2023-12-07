import { Dependente } from "./Dependente";
import { Pessoa } from "./Pessoa";

export type Responsavel = Pessoa & {
  dependentes: DependenteResponsavel[]
}

export type DependenteResponsavel = Omit<Dependente, "responsavel">
