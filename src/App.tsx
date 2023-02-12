import "./App.css";
import { CarouselView } from "./components/CarouselView/CarouselView";
import { VideoView } from "./components/VideoView/VideoView";

function App() {
  return (
    <div className="App ">
      <div className="bg-warning d-flex justify-content-center align-items-center p-3">
        <a
          href="http://imcrisam.site/libel_academy_temporal/"
          target="_blank"
          className="text-primary text-bold"
        >
          New Web Click Me
        </a>
      </div>
      <div className="bg-primary bg-opacity-10 pt-5">
        <VideoView></VideoView>
      </div>
      <div className="bg-dark bg-opacity-50">
        <CarouselView
          {...{
            title: "Actions & Drama Movies",
            isRigth: true,
          }}
        ></CarouselView>
      </div>
      <div className="bg-dark bg-opacity-25">
        <CarouselView
          {...{
            title: "Funniest Comedy Movies of 2018",
            isRigth: false,
          }}
        ></CarouselView>
      </div>
    </div>
  );
}

export default App;
