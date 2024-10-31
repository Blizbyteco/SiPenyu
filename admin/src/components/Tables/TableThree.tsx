import { Package } from '../../types/package';

const packageData: Package[] = [
  {
    name: 'Proppo',
    category: 'Pendidikan',
    subCategory: 'Pelajar Sekolah',
    year: '2024',
  },
];

interface TableProps {
  columns: string[];
  data?: string[][];
}

const TableThree: React.FC<TableProps> = ({ columns, data }) => {
  return (
    <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-2 text-left dark:bg-meta-4">
              {columns.map((column, index) => (
                <th
                  className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11 text-center"
                  key={index}
                >
                  {column}
                </th>
              ))}
              <th
                  className="min-w-[220px] py-4 px-4 font-medium text-black dark:text-white xl:pl-11 text-center"
                >
                  Aksi
                </th>
            </tr>
          </thead>
          <tbody>
            {data?.map(
              (
                row: any[],
                key: number, // Type row as any[] (array of any)
              ) => (
                <tr key={key}>
                  {row.map(
                    (
                      field: any,
                      keyField: number, // Type field and keyField as any
                    ) => (
                      <td
                        key={keyField}
                        className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11 text-center"
                      >
                        <h5 className="font-medium text-black dark:text-white">
                          {field}
                        </h5>
                      </td>
                    ),
                  )}
                   <td
                        className="border-b border-[#eee] py-5 px-4 pl-9 dark:border-strokedark xl:pl-11 text-center"
                      >
                           <button className='py-2 bg-red-500 text-white font-medium px-6'>Edit</button>
                      </td>
                
                </tr>
              ),
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableThree;
