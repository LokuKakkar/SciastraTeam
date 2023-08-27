import Teams from "./components/Teams";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTelegram, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
library.add(fas, faTelegram, faFontAwesome);


function App() {
  return (
    <div className="App">
      <Teams />
    </div>
  );
}

export default App;
