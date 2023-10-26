// components/NewsList.tsx
"use client";
import React, { useState, useEffect } from "react";
import { currency_news } from "@/app/models/semex";
import Link from "next/link";

interface NewsListProps {
  newsData: currency_news[];
  itemsPerPage: number;
}

const NewsList: React.FC<NewsListProps> = ({ newsData, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = newsData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="news-list flex m-3">
      {currentItems.map((news, index) => (
        <div key={index} className="card w-96 glass m-4">
          <figure>
            <img
              src={`https://befreshfx.com/public/news/${news.imageFileName}`}
              alt="news"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{news.headline}</h2>
            <p>{news.newsSource}</p>
            <div className="card-actions justify-end">
              <Link
                target="_blank"
                href={`${news.newsSource}`}
                className="flex justify-center btn-lblue md:mx-10"
              >
                Details
              </Link>
            </div>
          </div>
        </div>
      ))}
      <ul className="pagination">
        {newsData.length > itemsPerPage &&
          Array.from({ length: Math.ceil(newsData.length / itemsPerPage) }).map(
            (_, index) => (
              <li key={index} onClick={() => paginate(index + 1)}>
                {index + 1}
              </li>
            )
          )}
      </ul>
    </div>
  );
};

export default NewsList;
