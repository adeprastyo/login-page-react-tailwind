import Footer from "../components/Footer";
import FormContainer from "../components/FormContainer";
import FormLogin from "../components/FormLogin";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";

export default function LoginPage() {
  return (
    <>
      <Wrapper>
        <FormContainer>
          <Header
            title="LOGIN"
            text="Don't have an account yet?"
            path="/register"
            link="Register"
          />
          <FormLogin />
        </FormContainer>
        <Footer />
      </Wrapper>
    </>
  );
}
