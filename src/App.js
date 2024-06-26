import React, { lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import PrivateRoutes from "./route/PrivateRoutes";

const TodoList = lazy(() => import("./pages/TodoList"));
const LoginPage = lazy(() => import("./pages/Login"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<PrivateRoutes />}>
            <Route index element={<Navigate to="/todo" />} />
            <Route path="todo" element={<TodoList />} />
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
