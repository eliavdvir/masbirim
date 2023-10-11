import { useNavigate } from "react-router-dom"

function Home() {
  const navigate = useNavigate()

  return (
    <div className="home-page">
      <h2 className="second-text text1" style={{ color: "#002F5B" }}>
        בואו לעזור במלחמת ההסברה
      </h2>
      <button className="home-button" onClick={() => navigate("/report")}>
        <span className="text1">דיווח על פוסטים שקריים</span>
        <img src="/src/assets/block.png" alt="דיווח" />
      </button>
      <button
        className="home-button"
        style={{ top: "50%" }}
        onClick={() => navigate("/share")}
      >
        <span className="text1">שיתוף פוסטים להסברה</span>
        <img src="/src/assets/share.png" alt="שיתוף" />
      </button>
    </div>
  )
}

export default Home
