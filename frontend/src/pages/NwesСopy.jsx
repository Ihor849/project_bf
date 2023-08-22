import React, { useState, useEffect } from 'react';
import Pagination from 'tui-pagination';
import CustomPagination from '../components/Pagination/Pagination';
import { BsSearch } from 'react-icons/bs';
import { NewsCard } from '../components/News/NewsCard';
import news from '../components/json/news.json';
import {
  NewsPageWrap,
  Wrapper,
  SearchContainer,
  SearchIcon,
  SearchInput,
  SearchWrapper,
 
  WrapperCard,
  NewsTitle,
} from './pages.styled/Pages.styled';
import { WrapPagin } from '../components/Pagination/PaginationСopy.styled';


// export const NewsPage = () => {
//   console.log(news);
//   const style = { color: 'blue', fontSize: '1em' };
//   const itemsPerPage = 5;
//   const [currentPage, setCurrentPage] = useState(1);

//   // Общее количество страниц
//   const totalPages = Math.ceil(news.length / itemsPerPage);
//   // Индексы новостей на текущей странице
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;

//   // Новости на текущей странице
//   const currentNews = news.slice(startIndex, endIndex);
//   console.log(currentNews);
//   // Функция для обновления текущей страницы
//   const handlePageChange = page => {
//     setCurrentPage(page);
//   };

//   return (
//     <NewsPageWrap className="newsPageWra">
//       <Wrapper className="wrapper">
//         <SearchContainer className="searchContainer">
//           <SearchWrapper className="search-wrapper">
//             <SearchIcon className="searchIcon">
//               <BsSearch style={style} />
//             </SearchIcon>
//             <SearchInput type="text" placeholder="Search news" />
//           </SearchWrapper>
//         </SearchContainer>
//         <Title>News</Title>
//         <WrapperCard className="wrapperCard">
//           {currentNews.map((item, index) => (
//             <NewsCard
//               key={index}
//               news={item}
//               imgUrl={item.imgUrl}
//               title={item.title}
//               text={item.text}
//               date={item.date}
//               url={item.url}
//             />
//           ))}
//         </WrapperCard>
//         <CustomPagination
//           currentPage={currentPage}
//           totalPages={totalPages}
//           onPageChange={handlePageChange}
//         />
//       </Wrapper>
//     </NewsPageWrap>
//   );
// };

export const NewsPage = () => {
  const style = { color: 'blue', fontSize: '1em' };
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);

  // Общее количество страниц
  const totalPages = Math.ceil(news.length / itemsPerPage);
  // Индексы новостей на текущей странице
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Новости на текущей странице
  const currentNews = news.slice(startIndex, endIndex);

  // Функция для обновления текущей страницы
  const handlePageChange = page => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const container = document.getElementById('pagination');

    const pagination = new Pagination(container, {
      totalItems: news.length,
      itemsPerPage,
      visiblePages: 5,
      page: currentPage,
      centerAlign: true,
      template: {
        page: '{{page}}',
        currentPage: '<strong>{{page}}</strong>',
        // moveButton: '<a href="#" class="tui-page-btn">{{type}}</a>',
        // disabledMoveButton: '<span class="tui-page-btn">{{type}}</span>',
        // moreButton: '<a href="#" class="tui-page-btn tui-is-disabled">{{type}}</a>',
      },
    });

    pagination.on('afterMove', event => {
      handlePageChange(event.page);
    });
  }, [currentPage]);

  return (
    <div>
      <SearchContainer className="searchContainer">
          <SearchWrapper className="search-wrapper">
            <SearchIcon className="searchIcon">
              <BsSearch style={style} />
            </SearchIcon>
            <SearchInput type="text" placeholder="Search news" />
          </SearchWrapper>
          
        </SearchContainer>
        <NewsTitle>News</NewsTitle>
      <WrapperCard>
        {currentNews.map((item, index) => (
          <div key={index}>
            <div>
              <NewsCard
                  key={index}
                  news={item}
                  imgUrl={item.imgUrl}
                  title={item.title}
                  text={item.text}
                  date={item.date}
                  url={item.url}
                />
            </div>
          </div>
        ))}
      </WrapperCard>
      <WrapPagin className="pagination" id="pagination"></WrapPagin>
    </div>
  );
};


