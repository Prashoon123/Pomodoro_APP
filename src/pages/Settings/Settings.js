import { useHistory } from "react-router";
import { useRecoilState } from "recoil";
import { globalWork, globalRest } from "../../atoms/atoms";
import "./Settings.css";

function Settings() {
  const history = useHistory();

  const [work, setWork] = useRecoilState(globalWork);
  const [rest, setRest] = useRecoilState(globalRest);

  return (
    <div className="Settings">
      <div className="Settings__sliderContainer">
        <h4>Work: {work} minutes</h4>
        <input
          type="range"
          min={1}
          max={100}
          value={work}
          onChange={(e) => setWork(e.target.value)}
          className="Settings__slider"
        />
      </div>

      <div className="Settings__sliderContainer">
        <h4>Break: {rest} minutes</h4>
        <input
          type="range"
          min={1}
          max={100}
          value={rest}
          onChange={(e) => setRest(e.target.value)}
          className="Settings__slider-green"
        />
      </div>

      <center>
        <div className="Settings__button" onClick={() => history.push("/")}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="white"
            style={{ height: 30, width: 30 }}
          >
            <path
              fill-rule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm.707-10.293a1 1 0 00-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L9.414 11H13a1 1 0 100-2H9.414l1.293-1.293z"
              clip-rule="evenodd"
            />
          </svg>

          <p style={{ color: "white" }}>Back</p>
        </div>
      </center>
    </div>
  );
}

export default Settings;
