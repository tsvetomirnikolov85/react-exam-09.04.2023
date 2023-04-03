import "./Recipes.css";

export const Recipes = () => {
  return (
    <section className="container">
      <div className="products">
        <div className="card">
          <div className="img">
            <img src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-376464.jpg&fm=jpg" alt="" />
          </div>
          <div className="title">Pancakes</div>
          <div className="count">
            Cooked: <div>5</div> times
          </div>
          <div className="box">
            <button className="btn">Details</button>
          </div>
        </div>
      </div>
    </section>
  );
};
