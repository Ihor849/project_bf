import React, { useState } from 'react';
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
  Title,
  WrapperCard,
} from './pages.styled/Pages.styled';

export const NewsPage = () => {
  console.log(news);
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
  console.log(currentNews);
  // Функция для обновления текущей страницы
  const handlePageChange = page => {
    setCurrentPage(page);
  };

  return (
    <NewsPageWrap className="newsPageWra">
      <Wrapper className="wrapper">
        <SearchContainer className="searchContainer">
          <SearchWrapper className="search-wrapper">
            <SearchIcon className="searchIcon">
              <BsSearch style={style} />
            </SearchIcon>
            <SearchInput type="text" placeholder="Search news" />
          </SearchWrapper>
        </SearchContainer>
        <Title>News</Title>
        <WrapperCard className="wrapperCard">
          {currentNews.map((item, index) => (
            <NewsCard
              key={index}
              news={item}
              imgUrl={item.imgUrl}
              title={item.title}
              text={item.text}
              date={item.date}
              url={item.url}
            />
          ))}
        </WrapperCard>
        <CustomPagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </Wrapper>
    </NewsPageWrap>
  );
};
