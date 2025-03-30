import './App.css'
import { Route, Routes } from 'react-router-dom'

import NavProvider from './contexts/nav-context/nav-context.contexts'
import Home from './routes/home/home.route'
import Navigation from './routes/navigation/navigation.route'
import Coding from './routes/coding-blog/coding.route'
import Writing from './routes/writing-blog/writing-blog.route'
import CodingProjects from './routes/coding-projects/coding-projects.route'

import DevBlogList from './components/blog-list/coding/dev-blog-list.component'
import WritingBlogList from './components/blog-list/writing/writing-blog-list.component'
import CodeProjectList from './components/blog-list/coding-projects/code-project-list.component'

import DevBlog from './components/blogs/coding/dev-blog/dev-blog.component'
import WritingBlog from './components/blogs/writing/writing-blog.component'

function App() {
  // use an empty tag instead of fragment in vite/typescript <> </>


  

  return (
    <>
    <NavProvider>
      
      <Routes>
        <Route path='/*' element={<Navigation />} > 
          <Route index element={<Home/>} />

          <Route path='dev/' element={<Coding/>}>
            {/*software (dev)elopment route. */}
            <Route index element={<DevBlogList/>} />
            <Route path='diary/:id' element={<DevBlog/>} />
          </Route>

          <Route path='writing/' element={<Writing/>}> 
            {/*Writing route. */}
            <Route index element={<WritingBlogList/>} />
            <Route path='diary/:id' element={<WritingBlog/>} />
          </Route>
          
          <Route path='dev-projects/' element={<CodingProjects/>}>
            {/*Dev Projects and demos route */}
            <Route index element={<CodeProjectList/>} />
          </Route>
        </Route>
        

      </Routes>
      </NavProvider>
    </>
  )
}

export default App
