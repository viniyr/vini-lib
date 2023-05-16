import React from "react";
import Table from "../../components/table";
import Paginator from "@/components/paginator";

const TablePage = () => {
  const dataSource = [
    {
      aa: "value1",
      bb: "value2",
      cc: "value3",
      dd: "value4",
      ee: "two in one",
    },
    {
      aa: "value1",
      bb: "value2",
      cc: "value3",
      dd: "value4",
      ee: "two in one",
    },
  ];

  const columns = ["Column 1", "Column 2", "Column 3", "Column 4"];
  const responseFields = ["aa", "bb", "cc", "dd"];

  // You can map the datasource and put JSX as value.
  //   i.e: include icons, style the element in general

  const mappedDataSource = dataSource.map((data) => {
    const firstValue = (
      <div className="flex flex-col">
        <div className="text-base font-semibold">{data.aa}</div>
        <div className="font-normal text-gray-500">{data.ee}</div>
      </div>
    );

    return {
      ...data,
      aa: firstValue,
    };
  });

  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <div className="flex flex-col gap-10">
        <h6 className="text-white text-[48px] text-center uppercase tracking-wide">
          My table
        </h6>
        <div className="rounded-lg w-fit h-fit">
          <Table
            dataSource={mappedDataSource}
            columns={columns}
            responseFields={responseFields}
          ></Table>
          <Paginator></Paginator>
        </div>
      </div>
    </main>
  );
};

export default TablePage;
