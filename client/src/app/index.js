import { useTranslation } from "react-i18next";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AppLayout, Canvas, TopBar, Footer } from "./components";

import Home from "../home";
import SignUp from "../sign.up";
import Search from "../search";
import CaseList from "../case.list";
import Tips from "../tips";
import Unsubscribe from "../unsubscribe";

export default function App() {
  return (
    <Router>
      <AppLayout>
        <TopBar />
        <Canvas>
          <Routes>
            <Route path="/tips" element={<Tips />} />
            <Route path="/" element={<Home />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/search" element={<Search />} />
            <Route path="/case-list/:id" element={<CaseList />} />
            <Route path="/unsubscribe" element={<Unsubscribe />} />
          </Routes>
        </Canvas>
        <Footer />
      </AppLayout>
    </Router>
  );
}
