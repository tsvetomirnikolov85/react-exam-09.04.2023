import { useNavigate } from "react-router-dom"

export const Recipe = ({ _id, title, imageUrl }) => {
  const navigate = useNavigate()
  return (
    <div className="products">
      <div className="card">
        <div className="img">
          <img src={imageUrl} alt="" />
        </div>
        <div className="title">{title}</div>
        <div className="box">
          <button className="btn" onClick={() => navigate(`/recipes/${_id}`)}>Details</button>
        </div>
      </div>
    </div>
  );
};
