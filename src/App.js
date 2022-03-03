import './App.css';

function Header(props) {
  return (
    <header>
      <h1>{props.name}'s Kitchen</h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <img
        src="http://github.com/wormholecowboy.png"
        height={30}
        alt="something describing the thing"
      />
      <p>
        We eat {props.adjective} babies and sometimes even woke people. Would
        you care to donate?
      </p>
      <ul style={{ textAlign: 'center', listStylePosition: 'inside' }}>
        {props.dishes.map((dish) => (
          <li key={dish.id}>{dish.title}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>Copyright {props.year}</p>
    </footer>
  );
}

const dishes = ['Mac & cheese', 'taters', 'perogis'];

const dishObj = dishes.map((dish, i) => ({ id: i, title: dish }));
console.log(dishObj);

function App() {
  return (
    <div className="App">
      <Header name="Shannon" />
      <Main adjective="savory" dishes={dishObj} />
      <Footer year={new Date().getFullYear()} />
    </div>
  );
}

export default App;
