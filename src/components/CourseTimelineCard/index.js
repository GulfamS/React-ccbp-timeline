import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails

  return (
    <>
      <div className="course-title-and-duration-container">
        <h1 className="title">{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle color="#1e293b" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="tag-list">
        {tagsList.map(eachTag => (
          <li className="tag-items" key={eachTag.id}>
            <p className="course-tag">{eachTag.name}</p>
          </li>
        ))}
      </ul>
    </>
  )
}
export default CourseTimelineCard
