import {
  Banner,
  Blog,
  Footer,
  Header,
  New,
  Services,
  Shop,
} from "@/components";

const HomePage1 = () => {
  return (
    <div>
      <Header />
      <Banner />
      <New />

      <div className="container">
        <hr />
      </div>
      <Shop />
      <Blog />
      <Services />
      <Footer />
    </div>
  );
};

export default HomePage1;
