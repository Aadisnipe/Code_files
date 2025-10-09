import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function App() {
  return (
    <div>
      <Card picture="luffy.png" name="Luffy"/>
      <Card picture="Zoro.avif" name="Zoro"/>
    </div>
  );
}
function Card(props) {
  return (
    <div className="card">
      <img className="avatar" src={props.picture} alt={props.name} />
      <Data />
      <SkillList/>
    </div>
  );
}
function Data() {
  return (
    <div className="skill">
      <div>
        <h1>Monkey D Luffy</h1>
        <p>
          Hello My name is Monkey D Luffy and I will be the Man who will become
          the king of pirates ☠️ 🏴‍☠️
        </p>
      </div>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      <Skill gear="Gear 2" emoji="⚙️⚙️" colour="red" />
      <Skill gear="Gear 3" emoji="⚙️⚙️⚙️"colour="yellow" />
      <Skill gear="Gear 4" emoji="⚙️⚙️⚙️⚙️" colour="#8B0000"/>
      <Skill gear="Gear 5" emoji="⚙️⚙️⚙️⚙️⚙️" colour="#F5F5F5"/>
    </div>
  );
}
function Skill(props) {
  return (
    <div className="skill" style={{backgroundColor:props.colour}}>
      <span>{props.gear}</span>
      <span>{props.emoji}</span>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
