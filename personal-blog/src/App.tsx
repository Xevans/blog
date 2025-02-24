import './App.css'
import { Route, Routes } from 'react-router-dom'



import Home from './routes/home/home.route'
import Navigation from './routes/navigation/navigation.route'
import Coding from './routes/coding-blog/coding.route'
import Writing from './routes/writing-blog/writing-blog.route'
import CodingProjects from './routes/coding-projects/coding-projects.route'
import Mission from './components/blogs/coding/mission/mission.component'
import BlogList from './components/blog-list/coding/blog-list.component'
import WritingBlogList from './components/blog-list/writing/writing-blog-list.component'
import StoryOverview from './components/blogs/writing/story-overview.component'
import NavProvider from './contexts/nav-context/nav-context.contexts'
import CodeProjectList from './components/blog-list/coding-projects/code-project-list'

function App() {
  // use an empty tag instead of fragment in vite/typescript <> </>


  

  return (
    <>
    <NavProvider>
      
      <Routes>
        <Route path='/*' element={<Navigation />} > 
          <Route index element={<Home/>} />

          <Route path='dev-blogs/' element={<Coding/>}>
            {/*Coding blogs go here */}
            <Route index element={<BlogList/>} />
            <Route path='mission' element={<Mission/>} />
          </Route>

          <Route path='writing-blogs/' element={<Writing/>}> 
            {/*Writing Blogs */}
            <Route index element={<WritingBlogList/>} />
            <Route path='story-overview' element={<StoryOverview/>} />
          </Route>
          
          <Route path='coding-projects/' element={<CodingProjects/>}>
            {/*Coding Projects */}
            <Route index element={<CodeProjectList/>} />
          </Route>
        </Route>
        

      </Routes>
      </NavProvider>
    </>
  )
}

export default App
