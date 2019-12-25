import React from 'react';
import "./Card.sass";

const Card = props => {
    const newsItem = props.item;
    const says = " says:";
    return (
        <div class="news-item">
            <div className="news-item__content">
                <div className="news-item__author">
                    <span className="news-item__name">{newsItem.nickname}</span>
                    <span className="news-item__says">{says}</span>
                </div>
                <div className="news-item__text">
                    &quot;{newsItem.message}&quot;
                </div>
            </div>
        </div>
    );
};

export default Card;