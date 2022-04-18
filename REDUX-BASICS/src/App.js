import Sidebar from "./components/Sidebar";
import Video from "./components/Video";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  return (
    <div>
      <Provider store={store}>
        <Video />
        <Sidebar />
      </Provider>
    </div>
  );
}
