import AboutCard from "./About-card";

const aboutCards = [{id: 0, title: "Our History"}, {id: 1, title: "About Directors"}, {id: 1, title: "Our Partners"}]



const About=()=>{
  return (
    <>
      <section className="about mb-5">
        <div className="container">
          <ul className="about__list  list-unstyled d-flex justify-content-between">
            <AboutCard aboutCards={aboutCards[0]}/>
            <AboutCard aboutCards={aboutCards[1]}/>
            <AboutCard aboutCards={aboutCards[2]}/>
          </ul>
        </div>
      </section>
    </>
  )
}
export default About;