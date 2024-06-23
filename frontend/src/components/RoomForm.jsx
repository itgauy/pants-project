const RoomForm = () => {
  return (
    <>
      <div className="form-container">
        <form className="room-form">
          <h2>Join or create a room</h2>
          <div className="room-name">
            <input type="text" />
            <button>Enter</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default RoomForm