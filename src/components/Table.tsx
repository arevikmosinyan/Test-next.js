import { useRouter } from "next/navigation";
import { flexRender } from "@tanstack/react-table";
import SortIcon from "./SortIcon";

import {
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
} from "@tanstack/react-table";

const columns = [
  {
    accessorKey: "name",
    header: "Crypto Name",
    cell: (props: any) => <span>{props.getValue()}</span>,
  },
  {
    accessorKey: "symbol",
    header: "Symbol",
    enablesorting: false,
    cell: (props: any) => <span>{props.getValue()}</span>,
  },
  {
    accessorKey: "quote.USD.price",
    header: "Price",
    cell: (props: any) => <span>{props.getValue()}</span>,
  },
  {
    accessorKey: "quote.USD.volume_24h",
    header: "Volume-24h",
    cell: (props: any) => <span>{props.getValue()}</span>,
  },
];

interface TableProps {
  [key: string]: any;
}

const Table = ({
  cryptos,
  limit,
  page,
  setPageIndex,
  allCryptos,
}: TableProps) => {
  const router = useRouter();
  const tableInstance = useReactTable({
    columns,
    data: cryptos ?? [],
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
  });

  if (!cryptos) return <div>Loading...</div>;
  if (cryptos.length === 0) return <div>No data available.</div>;

  const totalCountOfPages = allCryptos.length / limit;

  return (
    <div>
      <table className="m-auto">
        <thead>
          {tableInstance.getHeaderGroups().map((headerGroup: any) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header: any) => (
                <th
                  key={header.id}
                  colSpan={header.colSpan}
                  onClick={header.column.getToggleSortingHandler()}
                  className="px-4 py-2 bg-gray-100 border-b border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider hover:bg-gray-50 cursor-pointer"
                >
                  {header.column.columnDef.header}
                  {header.column.getIsSorted() === "asc" && (
                    <span className="ml-2 text-green-500">-up</span>
                  )}
                  {header.column.getIsSorted() === "desc" && (
                    <span className="ml-2 text-red-500">-down</span>
                  )}
                  {header.column.getCanSort() && <SortIcon />}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {tableInstance.getRowModel().rows.map((row: any) => (
            <tr
              key={row.id}
              onClick={() => router.push(`/crypto/${row.original.symbol}`)}
              className="odd:bg-gray-50 hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
            >
              {row.getVisibleCells().map((cell: any) => (
                <td key={cell.id} className="p-4 border-b border-gray-200">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-center items-center mt-4">
        Page: {page} of {totalCountOfPages}
        <div className="flex m-4">
          <button
            className="px-3 py-1 rounded-md bg-gray-500 text-white disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed hover:bg-gray-600"
            isDisabled={!tableInstance.getCanPreviousPage()}
            onClick={() =>
              setPageIndex((prev: number) => Math.max(prev - 1, 0))
            }
          >
            {"<"}
          </button>
          <button
            className="ml-2 px-3 py-1 rounded-md bg-gray-500 text-white disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed hover:bg-gray-600"
            isDisabled={!tableInstance.getCanNextPage()}
            onClick={() => setPageIndex((prev: number) => prev + 1)}
          >
            {">"}
          </button>
        </div>
      </div>
      <div className="flex justify-center mt-2 text-sm text-gray-600">
        Total pages:{totalCountOfPages}
      </div>
    </div>
  );
};

export default Table;
