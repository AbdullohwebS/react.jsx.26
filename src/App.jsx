import React from "react";
import Header from "./component/header/Header";
import CategoryHero from "./component/categoryHero/CatygoryHero";
import Main from "./component/main/Main";
import Footer from "./component/footer/Footer";

export default function App() {
  return (
    <div className="App">
      <Header />
      <CategoryHero />
      <Main />
      <Footer />
    </div>
  );
}
