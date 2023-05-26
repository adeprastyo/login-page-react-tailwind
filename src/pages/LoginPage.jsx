import Footer from "../components/Footer";
import Form from "../components/Form";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";

export default function LoginPage() {
  return (
    <>
      <Wrapper>
        <Header
          title="LOGIN"
          text="Don't have an account yet?"
          path="/register"
          link="Register"
        />
        <Form />
      </Wrapper>
      <Footer />
    </>
  );
}
