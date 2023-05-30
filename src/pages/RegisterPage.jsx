import Footer from "../components/Footer";
import FormContainer from "../components/FormContainer";
import FormRegister from "../components/FormRegister";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";

export default function RegisterPage() {
  return (
    <>
      <Wrapper>
        <FormContainer>
        <Header
          title="REGISTER"
          text="Already have an account?"
          path="/"
          link="Login"
        />
        <FormRegister />
        </FormContainer>
        <Footer/>
      </Wrapper>
    </>
  );
}
