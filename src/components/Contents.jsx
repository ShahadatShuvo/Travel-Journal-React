function Contents(props) {
  return (
    <section className="content">
      <div className="row mb-3">
        <div className="col-4 image-content">
          <img src={props.item.imageUrl} alt="" height="250px" width="200px" />
        </div>
        <div className="col-8 text-content">
          <div className="location">
            <i className="far fa-map-marker-alt"></i>
            <span>{props.item.location}</span>
            <a href={props.item.googleMapsUrl}>View on Google Maps</a>
          </div>
          <h1>{props.item.title}</h1>

          <h5>
            {props.item.startDate} - {props.item.endDate}
          </h5>
          <p>{props.item.description}</p>
        </div>
      </div>
    </section>
  );
}

export default Contents;
