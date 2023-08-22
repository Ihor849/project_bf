import React, { useEffect } from 'react';
import Pagination from 'tui-pagination';

const CustomPagination = () => {
    useEffect(() => {
      const container = document.getElementById('pagination');
      const pagination = new Pagination(container, {
        totalItems: 10,
        itemsPerPage: 10,
        visiblePages: 5,
        page: 1,
        centerAlign: false,
        firstItemClassName: 'tui-first-child',
        template: {
          page: '{{page}}',
          currentPage: '{{page}}',
          moveButton: '{{type}}',
          centerAlign: true,
        }
      });
  
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