import poster from "../assets/images/react-main.png"

const ServicesCards = (props)=>{
  const {title} = props.servicesCardsInfo
  return (
    <>
      <li className="services__list-item d-flex gap-3 border border-3 p-3 mb-3" >
          <img className="services__item-img" src={poster} width="200"></img>
        <div className="services__item-content">
          <h3 className="services__item-title">{title}</h3>
          <p className="services__item-description">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus nemo natus itaque aliquid accusamus quaerat facere enim possimus, sunt rerum deleniti earum ad laudantium, commodi molestias? Quasi, assumenda at eos iure aspernatur placeat praesentium architecto, maiores voluptate aperiam est veniam.</p>
        </div>
      </li>
    </>
    )
}

export default ServicesCards;