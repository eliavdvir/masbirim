import { useEffect, useState } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"

const platforms = [
  {
    id: 1,
    name: "Twitter",
    img: "/src/assets/twitter.png",
    route: "twitter",
  },
  { id: 2, name: "TikTok", img: "/src/assets/tik-tok.png", route: "tiktok" },
  {
    id: 3,
    name: "Instagram",
    img: "/src/assets/instagram.png",
    route: "instagram",
  },
  {
    id: 4,
    name: "Twitter",
    img: "/src/assets/twitter.png",
    route: "twitter",
  },
  {
    id: 5,
    name: "Twitter",
    img: "/src/assets/twitter.png",
    route: "twitter",
  },
]

function Platform() {
  const location = useLocation()
  const navigate = useNavigate()
  const [isHere, setIsHere] = useState(true)

  useEffect(() => {
    if (location.pathname === "/report" || location.pathname === "/share") {
      setIsHere(true)
    } else {
      setIsHere(false)
    }
  }, [location.pathname])

  let isReport = false

  if (location.pathname === "/report") {
    isReport = true
  } else if (location.pathname === "/share") {
    isReport = false
  }

  return (
    <>
      {isHere ? (
        <div className="platform-page">
          {isReport ? (
            <span
              className="text1 platform-first-text"
              style={{ color: "#FF0000" }}
            >
              דיווח על פוסטים שקריים
            </span>
          ) : (
            <span
              className="text1 platform-first-text"
              style={{ color: "#005E15" }}
            >
              שיתוף פוסטים של הסברה
            </span>
          )}
          <span className="text1 platform-second-text">:בחר פלטפורמה</span>
          <div className="platforms-container">
            {platforms.map((plat) => {
              return (
                <button
                  className="social-platform-div"
                  key={plat.id}
                  onClick={() => {
                    setIsHere(false)
                    navigate(`${plat.route}`)
                  }}
                >
                  <img src={plat.img} alt={plat.name} />
                  <span>{plat.name}</span>
                </button>
              )
            })}
          </div>
        </div>
      ) : (
        <Outlet />
      )}
    </>
  )
}

export default Platform
