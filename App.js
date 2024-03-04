import Head from "./Components/Head";
import Body from "./Components/Body";
import "../src/App.css";
import { Provider, useSelector } from "react-redux";
import store from "./Store/store";
import "react-router-dom";
import Infiscroll from "./Components/Infiscroll";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import WatchingPart from "./Components/WatchingPart";
import Error from "./Components/Error";
import VideoContainer from "./Components/VideoContainer";
import ResultPage from "./Components/ResultPage";
import InfiniteScroll from "./Components/InfiniteScroll";
import Demo from "./Components/Demo";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <VideoContainer />,
      },
      {
        path: "/Demo",
        element: <Demo />,
      },

      {
        path: "/infi",
        element: <Infiscroll />,
      },
      {
        path: "/results",
        element: <ResultPage />,
      },
      {
        path: "/watch",
        element: <WatchingPart />,
      },
    ],
    errorElement: <Error />,
  },
]);

function App() {
  return (
    <div>
      <Provider store={store}>
        <Head />
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
