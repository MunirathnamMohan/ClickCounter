import './index.css'

const BannerCard = props => {
  const {cardList} = props
  const {headerText, description, className} = cardList
  return (
    <li className={className}>
      <h1 className="heading">{headerText}</h1>
      <p>{description}</p>
      <button className="btn">Show more</button>
    </li>
  )
}

export default BannerCard
