import './index.css'

const SlideItem = props => {
  const {details, activeTabId} = props
  const {heading, description, id} = details
  console.log(id)

  const slideItemTab = id === activeTabId ? 'selected-tab' : 'normal-tab'

  return (
    <button type="button" className={slideItemTab}>
      <h1 className="tab-hdg">{heading}</h1>
      <p className="tab-description">{description}</p>
    </button>
  )
}

export default SlideItem
