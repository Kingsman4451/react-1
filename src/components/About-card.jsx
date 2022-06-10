const AboutCard = (props)=>{
  const {title} = props.aboutCards
  return (
    <>
      <li className="about__list-item text-center p-4 border border-2 rounded-5">
        <h3 className="about__title">{title}</h3>
        <p className="about__description">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur natus numquam sapiente aliquid nihil ipsam. Alias ut veniam asperiores harum obcaecati voluptatum esse cumque sunt.
        </p>
        <button className="about__button btn btn-primary">Read More</button>
      </li>
    </>
  )
}
export default AboutCard;