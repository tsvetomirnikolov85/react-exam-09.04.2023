import "./Details.css";

export const Details = () => {
  return (
    <section id="details">
      <div id="details-wrapper">
        <img
          id="details-img"
          src="https://images.pexels.com/photos/376464/pexels-photo-376464.jpeg?cs=srgb&dl=pexels-ash-376464.jpg&fm=jpg"
          alt=""
        />
        <h1 id="details-title">American Panckakes</h1>

        <div id="info-wrapper">
          <h3>
            Coocked: <span id="cooked">0</span> times.
          </h3>

          <div id="products-description">
            <h1 id="products-title">PRODUCTS</h1>
            <ul className="products-list">
              <li>111111111111111111</li>
              <li>222222222222222222</li>
              <li>333333333333333333</li>
              <li>444444444444444444</li>
              <li>555555555555555555</li>
            </ul>
          </div>
          <div id="details-description">
            <h1 id="details-title">COOKING METHOD</h1>

            <span>
              Fond De Teint (Foundation) is a liquid, cream, or powder makeup applied to the face and neck to create an even, uniform color
              to the complexion, cover flaws and, sometimes, to change the natural skin tone. Some foundations also function as a
              moisturizer, sunscreen, astringent or base layer for more complex cosmetics. Foundation applied to the body is generally
              referred to as "body painting" or "body makeup"
            </span>
          </div>
        </div>

        <div id="action-buttons">
          <a href="" className="user-btn">
            Edit
          </a>
          <a href="" className="user-btn">
            Delete
          </a>
          <a href="" id="guest-btn">
            Cook Now
          </a>
        </div>
      </div>
    </section>
  );
};
