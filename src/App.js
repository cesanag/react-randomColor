import "./styles.css";

export default function App() {
  const randomColor = Array(40)
    .fill()
    .map(() => Math.floor(Math.random() * 16777215).toString(16));

  const arrayed = randomColor.map((arr) => (
    <div style={{ backgroundColor: `#${arr}` }} key={arr} className="number">
      #{arr}
    </div>
  ));

  return (
    <div className="App">
      <div className="container">{arrayed}</div>
    </div>
  );
}
