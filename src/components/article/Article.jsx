import React from 'react';
import PropTypes from 'prop-types';
import './article.css';

export const Article = ({ imgUrl, date, title, text }) => {
  return (
    <div className='news-container_article'>
      <div className='news-container_article-image'>
        <img src={imgUrl} alt='news_image' />
      </div>
      <div className='news-container_article-content'>
        <div>
          <h4>{date}</h4>
          <h2>{title}</h2>
        </div>
        <h4>{text}</h4>
      </div>
    </div>
  );
}
Article.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};