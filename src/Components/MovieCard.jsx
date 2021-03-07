function MovieCard({ title, poster, link }) {
    return (
      <div style={{marginRight: 10 + "rem", marginBottom: 2 + "rem"}}>
          <h3  style={{background:"#0d6efd",color:"white",borderRadius:0.5 + "rem",display:"flex",justifyContent:"center"}} className="card-title">{title}</h3>
        <div className="card" style={{ width: '18rem' }}>
        <img className="card-img-top" src={poster} alt="Card cap of this movie"  />
        <div className="card-body">
          <a href={link} rel="noreferrer" target="_blank" className="btn btn-primary"  style={{display:"flex",justifyContent:"center"}}>
            Description 
          </a>
        </div>
      </div>
      </div>
      
    );
  }
  
  export default MovieCard;