import { FcNext, FcPrevious } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import PageNumberIcon from "./PageNumberIcon";
import { useState } from "react";

interface PaginationProps {
  totalPages: number;
  currentPage: number;
}

const PageNav: React.FC<PaginationProps> = ({ totalPages, currentPage }) => {
  const previousPage = currentPage > 1 ? currentPage - 1 : 1;
  const nextPage = currentPage < totalPages ? currentPage + 1 : totalPages;
  const [pressedNext, setPressedNext] = useState(false);

  return (
    <div className="w-full p-1 md:p-2 lg:p-3 md:w-[80vw] lg:w-[70vw] mt-10 flex flex-row gap-1 md:gap-2 justify-center items-center">
      {/* Previous Button */}
      <NavLink
        onClick={()=> setPressedNext(false)}
        to={`/${previousPage}`}
        className={`flex items-center justify-center rounded-full hover:shadow-md shadow-sm bg-gray-100 w-12 h-12 ${
          currentPage === 1 ? "opacity-50 pointer-events-none" : ""
        } bg-teal-100`}
      >
        <FcPrevious />
      </NavLink>

      {/* Current Page */}
      {currentPage >= 1 && currentPage <= 3 ? (
        <>
          <PageNumberIcon
            currentPage={pressedNext?currentPage:currentPage}
            upperBound={pressedNext?3:currentPage+2}
            lowerBound={pressedNext?1:currentPage}
          />
        </>
      ) : currentPage < totalPages-2 ? (
        <>
          <PageNumberIcon
            currentPage={pressedNext?currentPage:currentPage}
            upperBound={pressedNext?currentPage:currentPage+2}
            lowerBound={pressedNext?currentPage - 2:currentPage}
          />
        </>
      ) : (
        <>
          <PageNumberIcon
            currentPage={pressedNext?currentPage:currentPage}
            upperBound={pressedNext?currentPage:totalPages}
            lowerBound={pressedNext?currentPage - 2:totalPages-2}
          />
        </>
      )}

      {/* Next Button */}
      <NavLink onClick={()=> setPressedNext(true)}
        to={`/${nextPage}`}
        className={`flex items-center justify-center rounded-full hover:shadow-md shadow-sm bg-gray-100 w-12 h-12 ${
          currentPage === totalPages ? "opacity-50 pointer-events-none" : ""
        } bg-teal-100`}
      >
        <FcNext />
      </NavLink>
    </div>
  );
};

export default PageNav;
