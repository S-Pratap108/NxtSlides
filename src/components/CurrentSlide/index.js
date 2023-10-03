import './index.css'

const CurrentSlide = props => {
  const {slidesList, activeTabId} = props
  const currentSlide = slidesList.filter(slide => slide.id === activeTabId)

  const onChangingHeading = () => (
      onHeadingChange(activeTabId)
  )

  const onChangingDescription = () = (
      onDescriptionChange(activeTabId)
  )

  return (
      <div className="current-slide-cont">
          <input type="text" value={currentSlide.heading} onChange={onChangingHeading} />
          <input type="text" value = {currentSlide.description} onChange={onChangingDescription} />
      </div>
  )
}

export default CurrentSlide