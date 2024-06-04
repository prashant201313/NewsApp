import React from 'react';

const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
        <div className="my-3">
            <div className="card">
                <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'absolute', right: '0' }}>
                    <span className="badge rounded-pill bg-danger">{source}</span>
                </div>
                <img src={imageUrl ? imageUrl : "https://images.news18.com/ibnlive/uploads/2024/04/amit-shah-2024-04-3aca210421ce326319e90eab731eef44-16x9.jpg?impolicy=website&width=1200&height=675"} className="card-img-top" alt="..." />
                
                <div className="card-body">
                    <h5 className="card-title">{title}...</h5>
                    <p className="card-text">{description}...</p>
                    <p className="card-text"><small className="text-body-secondary">By {author ? author : "Unknown"} on {new Date(date).toUTCString()}</small></p>
                    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    );
}
export default NewsItem;
