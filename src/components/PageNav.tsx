import { FcNext, FcPrevious } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import PageNumberIcon from "./PageNumberIcon";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

const PageNav: React.FC<PaginationProps> = ({ totalPages, currentPage }) => {
  const previousPage = currentPage > 1 ? currentPage - 1 : 1;
  const nextPage = currentPage < totalPages ? currentPage + 1 : totalPages;


  return (
    <div className="w-full p-1 md:p-2 lg:p-3 md:w-[80vw] lg:w-[70vw] mt-10 flex flex-row gap-1 md:gap-2 justify-center items-center">
      {/* Previous Button */}
      <NavLink
        to={`/${previousPage}`}
        className={`flex items-center justify-center rounded-full hover:shadow-md shadow-sm bg-gray-100 w-12 h-12 ${
          currentPage === 1 ? "opacity-50 pointer-events-none" : ""
        } bg-red-100`}
      >
        <FcPrevious />
      </NavLink>

      {/* Current Page */}
      {currentPage >= 1 && currentPage <= 3 ? (
        <>
          <PageNumberIcon
            currentPage={currentPage}
            upperBound={3}
            lowerBound={1}
          />
        </>
      ) : currentPage <= 8 ? (
        <>
          <PageNumberIcon
            currentPage={currentPage}
            upperBound={currentPage}
            lowerBound={currentPage - 2}
          />
        </>
      ) : (
        <>
          <PageNumberIcon
            currentPage={currentPage}
            upperBound={currentPage}
            lowerBound={currentPage - 2}
          />
        </>
      )}

      {/* Next Button */}
      <NavLink
        to={`/${nextPage}`}
        className={`flex items-center justify-center rounded-full hover:shadow-md shadow-sm bg-gray-100 w-12 h-12 ${
          currentPage === totalPages ? "opacity-50 pointer-events-none" : ""
        } bg-red-100`}
      >
        <FcNext />
      </NavLink>
    </div>
  );
};

export default PageNav;
