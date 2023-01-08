import "./App.css";
import "./main.css";
import "./components/Panel/panel.css";
import "./components/Pages/post.css";
import "./components/Form/form.css";
import PostProvider from "./Context/ContextPropvider";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Panel from "./components/Panel/Panel";
import PostsList from "./components/Pages/PostsList";
import PostsView from "./components/Pages/PostView";
import PostEdit from "./components/Pages/PostEdit";
import PostsNew from "./components/Pages/PostNew";
import Error from "./components/Pages/Error";

import { nanoid } from "nanoid";


function App() {
  return (
    <PostProvider>
      <BrowserRouter>
        <div className="container">
          <Panel />

          <Routes>
            <Route
              exact
              path="/ra-router-crud/"
              element={
                <PostsList key={nanoid(8)} className={"posts"}></PostsList>
              }
            />

            <Route
              path="/ra-router-crud/posts/:id"
              element={<PostsView key={nanoid(8)} type={"post-view"} />}
            ></Route>
            <Route
              path="/ra-router-crud/posts/:id/edit"
              element={<PostEdit key={nanoid(8)} type={"post-edit"} />}
            />
            <Route
              path="/ra-router-crud/posts/new"
              element={<PostsNew key={nanoid(8)} type={"post-new"} />}
            />

            <Route
              path="/ra-router-crud/*"
              element={
                <>
                  <Error key={nanoid(8)} message={"Page not found"} />
                  
                </>
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </PostProvider>
  );
}

export default App;
