import React, {useEffect} from "react";

//components
import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

export default function Home() {

  useEffect(() => {
    document.title = 'Home | React App'
  }, [])

  return (
    <div>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
