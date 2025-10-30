import { Link } from "react-router-dom";

const Card = ({ book }) => {
  return (
    <div className="card">
      <img src={book.image} height={250} className="card-img-top" />

      <div className="card-body">
        <h5 className="card-title">{book.title}</h5>

        <p className="card-text">{book.author}</p>

        <Link to={`/ürün/${book.id}`} className="btn btn-primary">
          Detay'a Git
        </Link>
      </div>
    </div>
  );
};

export default Card;
