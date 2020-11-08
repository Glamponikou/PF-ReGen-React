import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout, Typography } from "antd";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
// Demos
// SSC
import {
  CharactersList,
  CharactersListContainer,
  CharactersListContainer2,
  UserCard,
} from "./examples/SSC/";
// HoC
import {
  CharactersListHoC,
  CharactersListHoC2,
  CharactersListHoC3,
  CharactersListHoC4,
  HoCUserCard,
} from "./examples/HoC/";

const { Content } = Layout;
const { Title } = Typography;

const App = () => {
  return (
    <Router>
      <Layout className="layout-container">
        <Header />
        <Layout>
          <Sidebar />
          <Content className="inner-content">
            <Switch>
              {/* SSC */}
              <Route exact path="/ssc/1" component={CharactersList} />
              <Route exact path="/ssc/2" component={CharactersListContainer} />
              <Route exact path="/ssc/3" component={CharactersListContainer2} />
              <Route exact path="/ssc/exercise">
                <UserCard title="My user card!" />
              </Route>
              {/* HoC */}
              <Route exact path="/hoc/1" component={CharactersListHoC} />
              <Route exact path="/hoc/2" component={CharactersListHoC2} />
              <Route exact path="/hoc/3" component={CharactersListHoC3} />
              <Route exact path="/hoc/4" component={CharactersListHoC4} />
              <Route exact path="/hoc/exercise">
                <HoCUserCard title="My user card!" />
              </Route>

              <Route exact path="/">
                <Title>Demos</Title>
              </Route>
            </Switch>
            <footer>
              Made with{" "}
              <span role="img" aria-label="love">
                ❤️
              </span>{" "}
              in Athens, Greece.
            </footer>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
