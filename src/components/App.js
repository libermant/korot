import Header from './Header'

import Footer from './Footer';
import Section from './Section';
function App() {

  const header1Title = "Microsoft Corporatio"; 
  return (
    <div id='max'>
      <Header header1={header1Title} header2="Herzliya, Israel" image='microsoft.png'/>      
      <Section/>
      <Footer names={"Tsipi Liberman St Hazabar 88 Dimona"} tel={"0533186086"} email={"tsipil@wabschool.co.il"}/>
    </div>
  );
}

export default App;
