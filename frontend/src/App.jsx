import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import { CardPage } from './pages/CardPage';
import { Member } from "./pages/Member";
import { MemberLogin } from "./components/member/member-login";
import { MemberRegister } from "./components/member/member-register";
import './index.css';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<CardPage />} />

        <Route path="/member" element={<Member />}>
          <Route path="login" element={<MemberLogin />} />
          <Route path="register" element={<MemberRegister />} />
        </Route>

        {/* 其他路由 */}
      </Routes>
    </BrowserRouter >
  )
}

export default App
