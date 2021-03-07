function MovieCard({ title, poster, link }) {
    return (
      <div>
        <h2>{title}</h2>
        <div className="card" style={{ width: '18rem' }}>
        <img className="card-img-top" src={poster} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <a href={link} className="btn btn-primary">
            Descriptions
          </a>
        </div>
      </div>
      </div>
      
    );
  }
  
  export default MovieCard;