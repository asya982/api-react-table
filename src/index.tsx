import ReactDOM from "react-dom/client";
import App from "./App";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import LoginPage from "./components/LoginPage/LoginPage";
import { Provider } from "react-redux";
import { store } from "./redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
    children: [
      {
        index: true,
        element: <Navigate to="/login" replace={true} />,
      },
      { path: "login", element: <LoginPage /> },
      { path: "main" },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<RouterProvider router={router} />);
