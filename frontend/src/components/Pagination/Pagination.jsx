import React from 'react';
// import { Pagination } from 'react-bootstrap';
// import {  PaginationCont } from './Pagination.styled';




// const CustomPagination = ({ currentPage, totalPages, onPageChange }) => {

//   const handlePageChange = (page) => {
//     onPageChange(page);
//   };

//   return (
//     <PaginationCont>
//       <Pagination>
//         {Array.from({ length: totalPages }, (_, index) => (
          
//             <Pagination.Item
//               key={index + 1}
//               active={index + 1 === currentPage}
//               onClick={() => handlePageChange(index + 1)}
//             >
//               {index + 1}
//             </Pagination.Item>
          
//         ))}
//       </Pagination>
//     </PaginationCont>
//   );
// };

// export default CustomPagination;



import Pagination from 'tui-pagination';
import 'tui-pagination/dist/tui-pagination.css';

const CustomPagination = () => {
  const options = {
    totalItems: 10,
    itemsPerPage: 10,
    visiblePages: 10,
    page: 1,
    centerAlign: false,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: '{{page}}',
      currentPage: '{{page}}',
      moveButton: '{{type}}',
      disabledMoveButton: '{{type}}',
      moreButton: '...'
    }
  };

  React.useEffect(() => {
    const container = document.getElementById('pagination');
    const pagination = new Pagination(container, options);

    return () => {
      pagination.destroy();
    };
  }, []);

  return (
    <div>
      {/* Your other JSX code */}
      <div id="pagination"></div>
    </div>
  );
};

export default CustomPagination;
