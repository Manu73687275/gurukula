import Block1 from "../components/Block1";
import Block2 from "../components/Block2";
import Block3 from "../components/Block3";
import Block4 from "../components/Block4";
import Block5 from "../components/Block5";
import Footer from "../components/Footer";
import Nav from "../components/Nav";



export default function Home() {
  return (
    <div className=" overflow-x-hidden" >
      <Nav/>
      <Block1/>
     <Block2/>
     <Block3/>
     <Block4/>
     <Block5/>
     <Footer/>
    </div>
  )
}
