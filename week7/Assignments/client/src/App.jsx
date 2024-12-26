import { RecoilRoot } from "recoil"
import TitleDes from "./components/TitleDes"
import ShowTodos from "./components/ShowTodos"

function App() {

  return (
    <div>
      <RecoilRoot>
        <TitleDes/>
        <ShowTodos/>
      </RecoilRoot>
    </div>
  )
}

export default App
