import { DataTablePageEvent } from "primereact/datatable";
import { useState } from "react";

export type PaginateProps = DataTablePageEvent;

export type PaginateWithFilter<T> = {
  paginate: Partial<PaginateProps>;
  filter: Partial<T>;
};

type UsePaginateWithFilterConfig<T> = {
  initialFilter: Partial<T>;
};

export function usePaginateWithFilter<T = unknown>(
  config?: Partial<UsePaginateWithFilterConfig<T>>
) {
  const initialFilter =
    config && config.initialFilter ? config.initialFilter : ({} as T);

  const [paginateWithFilter, setPaginateWithFilter] = useState<
    PaginateWithFilter<T>
  >({
    filter: initialFilter,
    paginate: {
      first: 0,
      rows: 10,
      page: 0,
      pageCount: 0,
    },
  });

  function onFilter(filter: T) {
    setPaginateWithFilter((prev) => ({
      ...prev,
      filter,
    }));
  }

  function onPage(ev: DataTablePageEvent) {
    setPaginateWithFilter((prev) => ({
      ...prev,
      paginate: { ...ev },
    }));
  }

  return { paginateWithFilter, onFilter, onPage };
}
