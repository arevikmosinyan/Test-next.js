"use client";

import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Table from "../../components/Table";
import Loading from "@/components/Loading";

interface fetchCryptoParams {
  start: number;
  limit: number;
  sort: string;
}

const fetchCryptos = async ({
  queryKey,
}: {
  queryKey: [any, fetchCryptoParams];
}) => {
  const [_key, { start, limit, sort }] = queryKey;

  const response = await fetch(
    `/api?start=${start}&limit=${limit}&sort=${sort}`,
    {
      headers: {
        "Content-Type": "application/json",
      },
      method: "GET",
    }
  );
  const json = await response.json();

  return json.data.data;
};

const fetchAllCryptos = async () => {
  const response = await fetch(`/api`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "GET",
  });
  const json = await response.json();
  return json.data.data;
};

const CryptoCurrency = () => {
  const [pageIndex, setPageIndex] = useState(0);
  const [pageSize, setPageSize] = useState(10);

  const {
    data: cryptos,
    isLoading,
    error,
  } = useQuery({
    queryKey: [
      "cryptoData",
      { start: pageIndex * pageSize + 1, limit: pageSize, sort: "market_cap" },
    ],
    queryFn: fetchCryptos,
  });

  const {
    data: allCryptos,
    isLoading: isLoadingAllCryptos,
    error: errorAllCryptos,
  } = useQuery({
    queryKey: ["allCryptos"],
    queryFn: fetchAllCryptos,
  });

  console.log({ allCryptos });

  if (isLoading)
    return (
      <div>
        <Loading />
      </div>
    );
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl sm:text-3xl md:text-5xl text-center m-6">
        CryptoCurrency page
      </h1>
      <Table
        allCryptos={allCryptos}
        page={pageIndex}
        limit={pageSize}
        cryptos={cryptos}
        setPageIndex={setPageIndex}
      />
    </div>
  );
};

export default CryptoCurrency;

// import { useQuery } from "@tanstack/react-query";
// import {
//   useReactTable,
//   getCoreRowModel,
//   getPaginationRowModel,
//   getSortedRowModel,
//   flexRender,
// } from "@tanstack/react-table";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// import SortIcon from "../../components/SortIcon";

// interface fetchCryptoParams {
//   start: number;
//   limit: number;
//   sort: string;
// }

// const fetchCryptos = async ({
//   queryKey,
// }: {
//   queryKey: [any, fetchCryptoParams];
// }) => {
//   const [_key, { start, limit, sort }] = queryKey;

//   const response = await fetch(
//     `/api?start=${start}&limit=${limit}&sort=${sort}`,
//     {
//       headers: {
//         "Content-Type": "application/json",
//       },
//       method: "GET",
//     }
//   );
//   const json = await response.json();

//   return json.data.data;
// };

// const columns = [
//   {
//     accessorKey: "name",
//     header: "Crypto Name",
//     cell: (props: any) => <span>{props.getValue()}</span>,
//   },
//   {
//     accessorKey: "symbol",
//     header: "Symbol",
//     enablesorting: false,
//     cell: (props: any) => <span>{props.getValue()}</span>,
//   },
//   {
//     accessorKey: "quote.USD.price",
//     header: "Price",
//     cell: (props: any) => <span>{props.getValue()}</span>,
//   },
//   {
//     accessorKey: "quote.USD.volume_24h",
//     header: "Volume-24h",
//     cell: (props: any) => <span>{props.getValue()}</span>,
//   },
// ];

// const CryptoCurency = () => {
//   const router = useRouter();
//   const [pageIndex, setPageIndex] = useState(0);
//   const [pageSize, setPageSize] = useState(5);

//   const {
//     data: cryptos,
//     isLoading,
//     error,
//   } = useQuery({
//     queryKey: [
//       "cryptoData",
//       { start: pageIndex * pageSize + 1, limit: pageSize, sort: "market_cap" },
//     ],
//     queryFn: fetchCryptos,
//   });
//   console.log("Fetched Cryptos:", cryptos);
//   const tableInstance = useReactTable({
//     columns,
//     data: cryptos ?? [],
//     getCoreRowModel: getCoreRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     state: {
//       pagination: {
//         pageIndex,
//         pageSize,
//       },
//     },
//   });

//   console.log("Fetched Cryptos:", cryptos);

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <div className="p-6">
//       <h1 className="text-2xl sm:text-3xl md:text-5xl text-center m-6">
//         CryptoCurency page
//       </h1>

//       <table className="m-auto">
//         <thead>
//           {tableInstance.getHeaderGroups().map((headerGroup: any) => (
//             <tr key={headerGroup.id}>
//               {headerGroup.headers.map((header: any) => (
//                 <th
//                   key={header.id}
//                   colSpan={header.colSpan}
//                   onClick={header.column.getToggleSortingHandler()}
//                   className="px-4 py-2 bg-gray-100 border-b border-gray-300 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider hover:bg-gray-50 cursor-pointer"
//                 >
//                   {header.column.columnDef.header}
//                   {header.column.getIsSorted() === "asc" && (
//                     <span className="ml-2 text-green-500">-up</span>
//                   )}
//                   {header.column.getIsSorted() === "desc" && (
//                     <span className="ml-2 text-red-500">-down</span>
//                   )}
//                   {/* {sortedUp ? "-up" : "-down"} */}
//                   {header.column.getCanSort() && (
//                     <SortIcon
//                       onClick={header.column.getToggleSortingHandler()}
//                     />
//                   )}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody>
//           {tableInstance.getRowModel().rows.map((row: any) => {
//             console.log({ row });
//             return (
//               <tr
//                 key={row.id}
//                 onClick={() => router.push(`/crypto/${row.original.symbol}`)}
//                 className="odd:bg-gray-50 hover:bg-gray-100 transition-colors duration-300 cursor-pointer"
//               >
//                 {row.getVisibleCells().map((cellEl: any) => {
//                   return (
//                     <td
//                       key={cellEl.id}
//                       className="p-4 border-b border-gray-200"
//                     >
//                       {flexRender(
//                         cellEl.column.columnDef.cell,
//                         cellEl.getContext()
//                       )}
//                     </td>
//                   );
//                 })}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       <br />
//       <div className="flex justify-center">
//         Page: {tableInstance.getState().pagination.pageIndex + 1} of
//         {tableInstance.getPageCount()}
//         <hr />
//         <div></div>
//         <hr />
//         <div>
//           <button
//             isDisabled={!tableInstance.getCanPreviousPage()}
//             // onClick={handleNextPage}
//             // onClick={() => tableInstance.previousPage()}
//             onClick={() => setPageIndex((prev) => Math.max(prev - 1, 0))}
//           >
//             {"<"}
//           </button>
//           <button
//             isDisabled={!tableInstance.getCanNextPage()}
//             // onClick={() => tableInstance.nextPage()}

//             onClick={() => setPageIndex((prev) => prev + 1)}
//           >
//             {">"}
//           </button>
//         </div>
//       </div>

//       <div className="flex justify-center">
//         Total pages: {tableInstance.getPageCount()}
//       </div>
//     </div>
//   );
// };

// export default CryptoCurency;
