import poster from "../assets/images/react-main.png";

const Home = () => {
  return (
    <>
      <div className="container">
        <section className="home d-flex align-items-center justify-content-between mb-5">
          <div className="home__content">
            <h2 className="home__content-title h1">Learn react</h2>
            <p className="home__content-text">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
              tenetur totam, neque omnis laborum, quibusdam doloremque beatae
              corporis repellat maiores ratione cumque sunt deleniti repellendus
              aspernatur facilis cupiditate earum sapiente tempora libero, at
              illum officia esse.
            </p>
            <button className="home__btn btn btn-primary">Start Learn</button>
          </div>
          <img className="home__poster" src={poster} width="500"></img>
        </section>
      </div>
    </>
  );
};

export default Home;
