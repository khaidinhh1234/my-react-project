import { Banner, Blog, New, Services, Shop } from "@/components";

const HomePage1 = () => {
  return (
    <div>
      <Banner />
      <New featured={true} />

      <div className="container">
        <hr />
      </div>
      <Shop />
      <Blog />
      <Services />
    </div>
  );
};

export default HomePage1;
