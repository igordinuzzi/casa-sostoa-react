import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faCalendar, faNewspaper } from '@fortawesome/pro-light-svg-icons';

// Define a type for the news item props
type NewsItem = {
  title: string;
  description: string;
  imageUrl: string;
  articleUrl: string;
  date: string;
  source: string;
};

// Define props for the News component
type NewsProps = {
  items: NewsItem[];
};

const News: React.FC<NewsProps> = ({ items }) => {
  return (
    <section className="container my-5">
      <h2>Últimas Noticias</h2>
      <div className="row mt-4">
        {items.map((item, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="card news-card">
            <img src={item.imageUrl} className="card-img-top" alt="News" />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <p className="smaller-text"><FontAwesomeIcon icon={faNewspaper} /> {item.source}</p>
                <p className="smaller-text"><FontAwesomeIcon icon={faCalendar} /> {item.date}</p>
                <a href={item.articleUrl} target="_blank" rel="noopener noreferrer" className="btn-custom">Leer... <FontAwesomeIcon icon={faArrowRight} /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default News;
