import Home from './pages/Home/index';
import UserProvider from './context/userContext';
function App() {

  return (
    <UserProvider>
      <Home />
    </UserProvider>
  )
}

export default App
