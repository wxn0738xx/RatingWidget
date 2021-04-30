import logo from './img/giveeasyLogo.png';
import { Layout} from 'antd';
import RatingWidgetPage from "./containers/RatingWidgetPage";
import 'antd/dist/antd.css';
import './App.css';

const { Header, Content, Footer } = Layout;


function App() {
  return (
      <Layout className="layout" style={{height:"100vh"}}>
        <Header>
            <div className="logo" ><img src={logo} style={{height: 60}}/></div>
        </Header>
          <Content style={{ padding: '0 50px' }}>
              <br/>
              <div className="site-layout-content"><RatingWidgetPage/></div>
          </Content>
        <Footer style={{ textAlign: 'center' }}>Code Test © 2021 GiveEasy</Footer>
      </Layout>

  );
}

export default App;
