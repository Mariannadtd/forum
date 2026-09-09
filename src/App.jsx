import "./App.css";
import { Route, Routes } from "react-router";
import { forumThemes } from "./data/forumThemes";
import { discussions } from "./data/discussions";
import { comments } from "./data/comments";
import ForumPage from "./pages/ForumPage";
import DiscussionsPage from "./pages/DiscussionsPage";
import DiscussionPage from "./pages/DiscussionPage";

function App() {
  return (
    <>
      <header className="header">
        <a className="logo" href="/">
          Форум
        </a>

        <button type="button">Войти</button>
      </header>

      <Routes>
        <Route path="/" element={<ForumPage forumThemes={forumThemes} />} />
        <Route
          path="/forum-theme/:forumThemeId"
          element={
            <DiscussionsPage
              forumThemes={forumThemes}
              discussions={discussions}
            />
          }
        />
        <Route
          path="/forum-theme/:forumThemeId/discussion/:discussionId"
          element={
            <DiscussionPage discussions={discussions} comments={comments} />
          }
        />
      </Routes>
    </>
  );
}

export default App;
