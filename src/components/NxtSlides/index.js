import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import SlidePanel from '../SlidePanel'
import CurrentSlide from '../CurrentSlide'

import './index.css'

const initialSlidesList = [
  {
    id: 'cc6e1752-a063-11ec-b909-0242ac120002',
    heading: 'Welcome',
    description: 'Rahul',
  },
  {
    id: 'cc6e1aae-a063-11ec-b909-0242ac120002',
    heading: 'Agenda',
    description: 'Technologies in focus',
  },
  {
    id: 'cc6e1e78-a063-11ec-b909-0242ac120002',
    heading: 'Cyber Security',
    description: 'Ethical Hacking',
  },
  {
    id: 'cc6e1fc2-a063-11ec-b909-0242ac120002',
    heading: 'IoT',
    description: 'Wireless Technologies',
  },
  {
    id: 'cc6e20f8-a063-11ec-b909-0242ac120002',
    heading: 'AI-ML',
    description: 'Cutting-Edge Technology',
  },
  {
    id: 'cc6e2224-a063-11ec-b909-0242ac120002',
    heading: 'Blockchain',
    description: 'Emerging Technology',
  },
  {
    id: 'cc6e233c-a063-11ec-b909-0242ac120002',
    heading: 'XR Technologies',
    description: 'AR/VR Technologies',
  },
]

class NxtSlides extends Component {
  state = {
    slidesList: initialSlidesList,
    activeTabId: initialSlidesList[0].id,
  }

  createNewSlide = () => {
    const {slidesList, activeTabId} = this.state
    const newSlide = {
      id: uuidv4(),
      heading: 'Heading',
      description: 'Description',
    }
    const reqIndex = slidesList.findIndex(slide => slide.id === activeTabId)
    const firstCut = slidesList.slice(0, reqIndex + 1)
    this.setState(prevState => ({
      slidesList: [
        ...firstCut,
        newSlide,
        ...prevState.slidesList.slice(reqIndex + 1, slidesList.length + 1),
      ],
      activeTabId: newSlide.id,
    }))
  }

  render() {
    const {slidesList, activeTabId} = this.state
    console.log(slidesList)
    console.log(activeTabId)
    return (
      <>
        <nav className="nav-bar">
          <div className="logo-title-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-logo.png"
              alt="nxt slides logo"
              className="logo"
            />
            <h1 className="title"> Nxt Slides</h1>
          </div>
        </nav>
        <div className="home">
          <button type="button" onClick={this.createNewSlide}>
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-slides/nxt-slides-plus-icon.png"
              alt="new plus icon"
              className="plus-icon"
            />
            <p className="btn-para"> New </p>
          </button>
          <div className="main-cont">
            <SlidePanel slidesList={slidesList} activeTabId={activeTabId} />
            <CurrentSlide slidesList={slidesList} activeTabId={activeTabId} />
          </div>
        </div>
      </>
    )
  }
}

export default NxtSlides
