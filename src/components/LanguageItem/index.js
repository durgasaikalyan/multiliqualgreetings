const LanguageItem = props => {
  const {LanguageDetails} = props
  const {imageUrl, imageAltText} = LanguageDetails

  return (
    <li className="item-container">
      <img className="item-image" src={imageUrl} alt={imageAltText} />
    </li>
  )
}

export default LanguageItem
