import { Route, Routes } from "react-router-dom";
import { SharedLayout } from "../components/SharedLayout/SharedLayout";
import { Container } from "../components/container/Container";
import Home from "../pages/Home";
import  Register  from "../pages/Register";
import Login from "../pages/Login";


function App() {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/register"element={<Register />} />
          <Route path="/login"element={<Login />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Route>
      </Routes>
    </Container>
  );
}
export default App;

// function App() {
//   return (
//     <Container>
//       < Register></Register>
//     </Container>
//   );
// }
// export default App;