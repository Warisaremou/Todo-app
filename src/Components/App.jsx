import Header from "./Header/Header";
import TodoList from "./TodoList/TodoList";
import mobileBg from "../Images/bg-mobile-light.jpg"
import desktopBg from "../Images/bg-desktop-light.jpg"
import MatchMediaWrapper from "../js/MatchMediaWrapper";

function App() {

  const mobileBackground = (<img src={mobileBg} alt="mobile-bg" className="absolute top-0 left-0 right-0 -z-10 w-full" />)
  const desktopBackground = (<img src={desktopBg} alt="Desktop-bg" className="absolute top-0 left-0 right-0 -z-10 w-full" />)

  return (
    <div className="font-caudex relative">
      <div className="max-w-screen-md mx-auto pt-5 px-5 md:px-  14">
        <Header />
        <TodoList />
      </div>
      <div className="layout">
        <MatchMediaWrapper mobileBackground={mobileBackground} desktopBackground={desktopBackground} />
      </div>
    </div>
  );
}

export default App;
