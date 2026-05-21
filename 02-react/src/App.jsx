import { Header } from './components/Header.jsx'
import { Footer } from './components/Footer.jsx'
import { SearchPage } from './pages/Search.jsx'
import { HomePage } from './pages/Home.jsx'
import { NotFoundPage } from './pages/404.jsx' 
import { Route } from './components/Route.jsx'
import { Pagination } from './components/Pagination.jsx'
import { SearchFormSection } from './components/SearchFormSection.jsx'
import { JobListings } from './components/JobListings.jsx'
import jobsData from "./data.json"
import { useRouter } from './hooks/useRouter.jsx'

const RESULTS_PER_PAGE = 5

function App() {


    return (
    <>
        <Header/>
        <Route path='/' component = {HomePage} />
        <Route path='/search' component = {SearchPage} />
        {/* <Route path='/404' component = {NotFoundPage} /> */}
        <Footer/>
    </>
    )
}

export default App
