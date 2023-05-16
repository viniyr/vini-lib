import {
    MdKeyboardDoubleArrowRight,
    MdKeyboardDoubleArrowLeft,
    MdKeyboardArrowRight,
    MdKeyboardArrowLeft,
    MdKeyboardArrowDown
  } from "react-icons/md";
  
  const Paginator = () => {
    return (
      <nav
        className="flex items-center justify-end py-[16px] px-4 bg-white rounded-b-xl"
        aria-label="Table navigation"
      >
        <div className="flex gap-4 items-center">
          <div className="w-auto flex gap-4 items-center">
            <label className="inline-block text-black">Itens por página: </label>
            <button
              id="dropdownDefaultButton"
              data-dropdown-toggle="dropdown"
              className="text-black hover:bg-blue-800  font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:hover:bg-gray-500 "
              type="button"
            >
              5
              <MdKeyboardArrowDown className="text-lg ml-2 "></MdKeyboardArrowDown>
            </button>
            <div
              id="dropdown"
              className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
            >
              <ul
                className="py-2 text-sm text-gray-700 dark:text-gray-200"
                aria-labelledby="dropdownDefaultButton"
              >
                <li>
                  <a
                    href="#"
                    className="block px-4 py-2 text-black hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white text-black"
                  >
                    Dashboard
                  </a>
                </li>
              </ul>
            </div>
            {/* <div className="w-[64px]">
                <Dropdown
                  dropdownLimit={() => { }}
                  customStyles=""
                  value={5}
                  optionSelect={(option: number) => {
                    handleItemsPerPage(option);
                  }}
                  options={[5, 15, 20]}
                >
                  {paginationDisplay.page_limit}
                </Dropdown>
              </div> */}
            <span className="font-regular text-black dark:text-black">
              <p className="mr-[5px] inline text-black">
                Página: 1
                {
                  // paginationDisplay?.page ? paginationDisplay?.page : 1
                }
              </p>
              de 5
              {/* {Number.isNaN(Math.ceil(totalItems / paginationDisplay.page_limit))
                  ? "1"
                  : empty ? "1" : Math.ceil(totalItems / paginationDisplay.page_limit)} */}
            </span>
          </div>
          <ul className="inline-flex items-center -space-x-px px-4">
            <li>
              <div
                // onClick={() => {
                    
                //     console.log("first-item")
                //   // handlePagination("first-item");
                // }}
                className={`block px-3 py-2 leading-tight text-black bg-transparent hover:bg-gray-100 hover:text-gray-700 dark:bg-transparent dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer }`}
              >
                <MdKeyboardDoubleArrowLeft></MdKeyboardDoubleArrowLeft>
              </div>
            </li>
            <li>
              <div
                // onClick={() => {
                //     console.log("previous")
                //   // handlePagination("previous");
                // }}
                className={`block px-3 py-2 ml-0 leading-tight text-black bg-transparent hover:bg-gray-100 hover:text-gray-700 dark:bg-transparent  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer }`}
              >
                <span className="sr-only">Previous</span>
                <MdKeyboardArrowLeft></MdKeyboardArrowLeft>
              </div>
            </li>
  
            <li>
              <div
                // onClick={() => {
                //     console.log("next")
                //   // handlePagination("next");
                // }}
                className={`block px-3 py-2 leading-tight text-black bg-transparent hover:bg-gray-100 hover:text-gray-700 dark:bg-transparent  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer `}
              >
                <span className="sr-only">Next</span>
                <MdKeyboardArrowRight></MdKeyboardArrowRight>
              </div>
            </li>
            <li>
              <div
                // onClick={() => {
                //     console.log("last-item")
                //   // handlePagination("last-item");
                // }}
                className={`block px-3 py-2 leading-tight text-black bg-transparent hover:bg-gray-100 hover:text-gray-700 dark:bg-transparent  dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer }`}
              >
                <MdKeyboardDoubleArrowRight></MdKeyboardDoubleArrowRight>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Paginator;
  