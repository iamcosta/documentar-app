import { Card } from "primereact/card";
import { PageHeader } from "../components/PageHeader";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import {
  PaginateWithFilter,
  usePaginateWithFilter,
} from "../hooks/PaginateWithFilter";
import {
  PessoaFilter,
  getPessoaPageByFilter,
} from "../service/controllers/PessoaController";
import { useQuery } from "@tanstack/react-query";

export function ResponsaveisPage() {
  const { paginateWithFilter, onPage } = usePaginateWithFilter<PessoaFilter>({
    initialFilter: {
      tipo: "RESPONSAVEL",
    },
  });

  const { data: reponsavelPage, isSuccess, isFetching } = useQuery({
    queryKey: ["reponsavelPage", paginateWithFilter],
    queryFn: ({ queryKey }) =>
      getPessoaPageByFilter(queryKey[1] as PaginateWithFilter<PessoaFilter>),
  });

  return (
    <Card className="w-full" header={<PageHeader title="Responsáveis" />}>
      <div className="flex w-full mb-4 border-1 border-gray-300">
        <form action="" className="grid"></form>
      </div>
      <DataTable
        emptyMessage="Nenhum responsável listado"
        showGridlines
        value={isSuccess ? reponsavelPage.data : []}
        paginator
        onPage={onPage}
        first={paginateWithFilter.paginate.first}
        rows={paginateWithFilter.paginate.rows}
        totalRecords={isSuccess ? reponsavelPage.totalElements : 0}
        lazy
        loading={isFetching}
      >
        <Column header="Ações" headerClassName="w-1" />
        <Column header="Nome" field="nome" />
        <Column header="Idade" field="idade" />
      </DataTable>
    </Card>
  );
}
