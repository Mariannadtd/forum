import { Link, useParams } from "react-router";

function DiscussionsPage({ forumThemes, discussions }) {
  const { forumThemeId } = useParams();

  const forumTheme = forumThemes.find(
    (forumTheme) => forumTheme.id === forumThemeId,
  );

  const forumThemeDiscussions = discussions.filter(
    (discussion) => discussion.forumThemeId === forumThemeId,
  );

  if (!forumTheme) {
    return (
      <main className="main">
        <h1>Тема форума не найдена</h1>
        <Link to="/">Вернуться на главную</Link>
      </main>
    );
  }

  return (
    <main className="main discussions-page">
      <Link className="back-button" to="/">
        ← Все темы форума
      </Link>

      <h1>{forumTheme.title}</h1>
      <p>{forumTheme.description}</p>

      <div className="create-discussion">
        <span>Не нашли нужную тему?</span>
        <button className="create-discussion-button" type="button">
          Задать свой вопрос
        </button>
      </div>

      <ul className="discussions">
        {forumThemeDiscussions.map((discussion) => (
          <li className="discussion-item" key={discussion.discussionId}>
            <Link
              className="discussion"
              to={`/forum-theme/${forumThemeId}/discussion/${discussion.discussionId}`}
            >
              <h2 className="discussion-title">{discussion.title}</h2>
              <span className="discussion-comments">
                Комментариев: {discussion.commentsCount}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default DiscussionsPage;
