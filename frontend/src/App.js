import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Nav from './components/Nav'
import CreateBlog from './pages/CreateBlog'
import Home from './pages/Home'
import Blog from './components/Blog'
import Footer from './components/Footer'

function App () {
  return (
    <Router>
      <div className='App'>
        <Nav />
        <div className='content'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/new-blog'>
              <CreateBlog />
            </Route>
            <Route path='/blog/:id'>
              <Blog />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
