import { BrowserRouter } from 'react-router-dom'

import Header from './Components/Header'
import { GlobalCss } from './styles'

import Rotas from './routes'
import Footer from './Components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <div className="container">
        <Header />
      </div>
      <Rotas />
      <Footer />
    </BrowserRouter>
  )
}

export default App
