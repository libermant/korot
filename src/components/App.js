import Header from './Header'
import Footer from './Footer';
import Section from './Section';
import '../handlers/font-handler.js'
function App() {

  const header1Title = "Microsoft Corporation"; 
  return (
    <div id='max'>
      
      <Header image='microsoft.png'/>      
      <Section/>
      <Footer names={"Tsipi Liberman St Hazabar 88 Dimona"} tel={"0533186086"} email={"tsipil@wabschool.co.il"}/>
    </div>
  );
}

export default App;
