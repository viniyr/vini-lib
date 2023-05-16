import React from "react";

const Table = (props: {
  responseFields: any[];
  columns: string[];
  dataSource: any[];
}) => {
  return (
    <table className="w-full text-left text-gray-500 dark:text-gray-400">
      <thead className="text-black font-gilroy text-lg capitalize bg-gray-500 bg-sky-600 dark:text-neutral-100 border-b dark:border-gray-700">
        <tr>
          {props.columns.map((column) => {
            return (
              <th key={column} scope="col" className="px-6 py-4">
                {column}
              </th>
            );
          })}
        </tr>
      </thead>
      {props.dataSource.length > 0 && (
        <tbody>
          {props.dataSource.map((entry, index) => {
            return (
              <tr
                key={entry._id}
                className="bg-white cursor-pointer border-b dark:bg-white dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-main-hover-dark"
              >
                {props.responseFields.map((field, idx) => {



                  return (
                    <td  key={idx + " field"} id={idx + " field"} className="px-6 py-4">
                      <div className="flex items-center font-gilroy font-[400] capitalize text-black">
                        {entry[field] ? entry[field] : field ? field : '-'}
                      </div>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      )}
    </table>
  );
};

export default Table;
