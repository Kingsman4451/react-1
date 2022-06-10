import ServicesCards from "./Services-cards";

const servicesCardsInfo = [{id: 0, title: "Card 1",}, {id: 1, title: "Card 2",}, {id: 3, title: "Card 3",}, {id: 4, title: "Card 4",}]

const Services = ()=>{
  return (
    <>
      <section className="services mb-5">
        <div className="container">
          <ul className="services__list list-unstyled p-0">
            <ServicesCards servicesCardsInfo={servicesCardsInfo[0]}/>
            <ServicesCards servicesCardsInfo={servicesCardsInfo[1]}/>
            <ServicesCards servicesCardsInfo={servicesCardsInfo[2]}/>
            <ServicesCards servicesCardsInfo={servicesCardsInfo[3]}/>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Services;