import Footer from "./components/Footer";
import Form from "./components/Form";
import HeaderLogin from "./components/HeaderLogin";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <>
      <Wrapper>
        <HeaderLogin />
        <Form />
      </Wrapper>
      <Footer />
    </>
  );
}

export default App;
