import { Link } from "react-router";

function ForumPage({ forumThemes }) {
  return (
    <main className="main">
      <h1>Темы форума</h1>
      <p>Выбери, что хочешь обсудить.</p>

      <ul className="forum-themes">
        {forumThemes.map((forumTheme) => (
          <li key={forumTheme.id}>
            <Link className="forum-theme" to={`/forum-theme/${forumTheme.id}`}>
              <span className="forum-theme-title">{forumTheme.title}</span>

              <span className="forum-theme-description">
                {forumTheme.description}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default ForumPage;
