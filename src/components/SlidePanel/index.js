import SlideItem from '../SlideItem'
import './index.css'

const SlidePanel = props => {
  const {slidesList, activeTabId} = props

  return (
    <ol className="slide-panel-cont">
      {slidesList.map(eachSlide => (
        <li key={eachSlide.id} className="list-style">
          <SlideItem details={eachSlide} activeTabId={activeTabId} />
        </li>
      ))}
    </ol>
  )
}

export default SlidePanel
