import { PaginateWithFilter } from "../../hooks/PaginateWithFilter";
import { api } from "../api";
import { Pessoa, PessoaTipo } from "../model/Pessoa";

const BASE_PATH = "/pessoas";

export type Page<T> = {
  data: T[];
  number: number;
  size: number;
  totalPages: number;
  totalElements: number;
};

export type PessoaFilter = {
  nome: string;
  tipo: PessoaTipo;
  nascimento: string;
};

type GetPessoaPageByFilter = PaginateWithFilter<PessoaFilter>;

export async function getPessoaPageByFilter(
  props?: Partial<GetPessoaPageByFilter>
) {
  let query = `${BASE_PATH}?`;

  if (props) {
    const { paginate, filter } = props;
    if (paginate) {
      const { page, rows } = paginate;
      if (page) query += `page=${page}&`;
      if (rows) query += `size=${rows}&`;
    }
    if (filter) {
      const { nome, nascimento, tipo } = filter;
      if (nome) query += `nome=${nome}&`;
      if (nascimento) query += `nascimento=${nascimento}&`;
      if (tipo) query += `tipo=${tipo}`;
    }
  }

  return (await api.get<Page<Pessoa>>(query)).data;
}
