import { useEffect, useState } from "react";
import { addmonth, generate, submonth } from "./vanilla/vancal";
import "./styles/calendar.css"
function App() {
  const [value, setValue] = useState(new Date())
  const [cal, setCal] = useState([])

  useEffect(() => {
    console.log(cal)
  }, [])

  useEffect(() => {
    console.log(value)
    setCal(generate(value))
  }, [value])

  useEffect(() => {
    console.log(cal)
  }, [cal])

  return (
    <div className="app__main">
      <div className="app__header"></div>
      <div className="app__topsvg"></div>

      <section className="app__calsec">
        <div className="app__calbody">
          <div className="app__calhead">
            <div className="app__monyear">
              <div>
                 {value.toLocaleString('default', { month: 'short' })}
              </div>
              <div className="year">
                {value.getFullYear()}
              </div>
            </div>
            <div className="app__button">
              <div>
                <i className="bi bi-arrow-up-circle"
                  onClick={() => setValue(submonth(value))}
                ></i>
              </div>
              <div>
                <i className="bi bi-arrow-down-circle"
                  onClick={() => setValue(addmonth(value))}
                ></i>
              </div>
            </div>
          </div>
          <div className="app__week weekname">
            <div className="app__day">Dim</div>
            <div className="app__day">Lun</div>
            <div className="app__day">Mar</div>
            <div className="app__day">Mer</div>
            <div className="app__day">Jeu</div>
            <div className="app__day">Ven</div>
            <div className="app__day">Sam</div>
          </div>
          {cal.map((week, index) => (
            <div key={index} className="app__week">
              {week.map((day, index) => (
                <div
                  key={index}
                  onClick={() => setValue(day)}
                  className="app__day"
                >
                  {day.getDate()}
                </div>
              ))}
            </div>
          ))}
        </div>

      </section>

    </div>
  );
}

export default App;
