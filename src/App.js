import Header from './components/header';
import Content from './components/content';

function App() {
  const top = "This data is from Parent component";
  const main = "2345";
  const companyName = "Tech Corp";

  return (
    <div className="App">
      <Header
        top={top}
        main={main}
        company={companyName}
      />

      <Content
        company={companyName}
      />

    </div>
  );
}

export default App;
