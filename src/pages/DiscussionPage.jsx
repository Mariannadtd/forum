import { Link, useParams } from "react-router";
import CommentForm from "../components/CommentForm";

function DiscussionPage({ discussions, comments }) {
  const params = useParams();

  const discussionId = Number(params.discussionId);
  const forumThemeId = params.forumThemeId;

  const discussion = discussions.find(
    (item) =>
      item.discussionId === Number(discussionId) &&
      item.forumThemeId === forumThemeId,
  );

  if (!discussion) {
    return (
      <main className="main">
        <h1>Обсуждение не найдено</h1>
        <Link to="/">На главную</Link>
      </main>
    );
  }

  const discussionComments = comments.filter(
    (comment) => comment.discussionId === discussionId,
  );
  function addComment(text) {
    console.log("Получили:", text);
  }
  return (
    <main className="main">
      <Link className="back-button" to={`/forum-theme/${forumThemeId}`}>
        ← К списку обсуждений
      </Link>
      <h1>Страница обсуждения</h1>
      <h2>{discussion.title}</h2>
      <p>Комментариев: {discussionComments.length}</p>
      <ul className="comments">
        {discussionComments.map((comment) => (
          <li className="comment" key={comment.commentId}>
            <strong>{comment.author}:</strong> <span>{comment.text}</span>
          </li>
        ))}
      </ul>

      <CommentForm addComment={addComment} />
    </main>
  );
}

export default DiscussionPage;
