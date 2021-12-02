import "./styles.css";

function makeDiv(name) {
  return <div>Hello {name}!</div>;
}

export default function App() {
  let names = [
    "Victor",
    "Traci",
    "Ida",
    "Ana",
    "Aidan",
    "Kyle",
    "Enjun",
    "Luis",
    "Amanda",
    "Yifei",
    "Hector"
  ];
  let lastName = [
    "Lymar",
    "Sibel",
    "Voong",
    "Rivera",
    "Fuller",
    "Wan",
    "Li",
    "Garcia",
    "Yu",
    "Du",
    "Del Valle"
  ];

  let divs = [];
  for (const name of names) {
    divs.push(makeDiv(name));
  }

  return (
    <div className="App">
      <h1>Hello Team</h1>
      <h2>Start editing to see some magic happen!</h2>

      {divs}
    </div>
  );
}
