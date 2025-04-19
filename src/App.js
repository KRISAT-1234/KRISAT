import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";
import Layout from "./Layout/Main";
import Home from "./Pages/Home";
import About from "./Pages/About";
import StaticTemplate from "./Layout/StaticTemplate";
import ContentData from "./services/utils/json/contentData";
import Gallery from "./Pages/Gallery";

function App() {
  const { staticData } = ContentData();
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" index element={<Home />}></Route>
            <Route path="/Home" index element={<Home />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/Gallery" element={<Gallery />}></Route>
            <Route
              path="/AboutUs/:index?"
              element={
                <StaticTemplate
                  navItem={"AboutUs"}
                  label={"About Us"}
                  subNav={staticData["About Us"]}
                  content="About Us"
                />
              }
            />
            <Route
              path="/Farming/:index?"
              element={
                <StaticTemplate
                  navItem={"Farming"}
                  subNav={staticData["Farming"]}
                  content="Farming"
                />
              }
            />
            <Route
              path="/Academics/:index?"
              element={
                <StaticTemplate
                  navItem={"Academics"}
                  subNav={staticData["Academics"]}
                  content="Academics"
                />
              }
            />
            <Route
              path="/AcademicActivities/:index?"
              element={
                <StaticTemplate
                  navItem={"AcademicActivities"}
                  subNav={staticData["Academic Activities"]}
                  content="Academic Activities"
                />
              }
            />
            <Route
              path="/LifeKRISAT/:index?"
              element={
                <StaticTemplate
                  navItem={"LifeKRISAT"}
                  subNav={staticData["Life @ KRISAT"]}
                  content="Life @ KRISAT"
                />
              }
            />
            <Route
              path="/Facilities/:index?"
              element={
                <StaticTemplate
                  navItem={"Facilities"}
                  subNav={staticData["Facilities"]}
                  content="Facilities"
                />
              }
            />
            <Route
              path="/Nursery/:index?"
              element={
                <StaticTemplate
                  navItem={"Nursery"}
                  subNav={staticData["Nursery"]}
                  content="Nursery"
                />
              }
            />
            <Route
              path="/RulesRegulations/:index?"
              element={
                <StaticTemplate
                  navItem={"RulesRegulations"}
                  subNav={staticData["Rules & Regulations"]}
                  content="Rules & Regulations"
                />
              }
            />
          </Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
