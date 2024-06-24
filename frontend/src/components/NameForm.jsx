import { Link } from "react-router-dom"

const NameForm = () => {
  return (
    <>
      <div className="form-container">
        <form className="room-form">
          <h2>Enter your display name</h2>
          <div className="room-name">
            <input type="text" />
            <button>Enter</button>
          </div>
          <Link to="/htp" className="htp"><u>How to play?</u></Link>
        </form>
      </div>
    </>
  )
}

export default NameForm