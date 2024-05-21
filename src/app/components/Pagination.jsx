export default function Pagination({ currentPage, totalPages, onPageChange }) {
    const getPageNumbers = () => {
      const pageNumbers = [];
      const maxPagesToShow = 9;
      const half = Math.floor(maxPagesToShow / 2);
  
      if (currentPage >= 1) {
        pageNumbers.push(1);
      }
  
      if (currentPage > half + 2) {
        pageNumbers.push('...');
      }
  
      let startPage = Math.max(2, currentPage - half);
      let endPage = Math.min(totalPages - 1, currentPage + half);
  
      if (currentPage <= half) {
        endPage = Math.min(totalPages - 1, maxPagesToShow);
      } else if (currentPage + half >= totalPages) {
        startPage = Math.max(2, totalPages - maxPagesToShow + 1);
      }
  
      for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
      }
  
      if (currentPage + half + 1 < totalPages) {
        pageNumbers.push('...');
      }
  
      if (currentPage < totalPages) {
        pageNumbers.push(totalPages);
      }
  
      return pageNumbers;
    };
  
    return (
      <nav className="flex justify-center mt-8">
        <ul className="inline-flex space-x-2">
          {currentPage > 1 && (
            <li>
              <a
                onClick={() => onPageChange(currentPage - 1)}
                href="#"
                className="px-4 py-2 border rounded bg-white text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white"
              >
                Previous
              </a>
            </li>
          )}
          {getPageNumbers().map((number, index) => (
            <li key={index} className={`cursor-pointer ${number === currentPage ? "font-bold" : ""}`}>
              {typeof number === 'number' ? (
                <a
                  onClick={() => onPageChange(number)}
                  href="#"
                  className={`px-4 py-2 border rounded ${number === currentPage ? "bg-blue-600 text-white" : "bg-white text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white"}`}
                >
                  {number} 
                </a>
              ) : (
                <span className="px-4 py-2">{number}</span>
              )}
            </li>
          ))}
          {currentPage < totalPages && (
            <li>
              <a
                onClick={() => onPageChange(currentPage + 1)}
                href="#"
                className="px-4 py-2 border rounded bg-white text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white"
              >
                Next
              </a>
            </li>
          )}
        </ul>
      </nav>
    );
  }