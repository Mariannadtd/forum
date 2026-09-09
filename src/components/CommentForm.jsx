import { useState } from "react";

function CommentForm({ addComment }) {
  const [commentText, setCommentText] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    addComment(commentText);
  }
  function receiveComment(text) {
    onSend(commentText);
  }
  return (
    <form className="comment-form" onSubmit={handleSubmit}>
      <label htmlFor="comment-text">Ваш комментарий</label>

      <textarea
        id="comment-text"
        rows={4}
        placeholder="Напишите комментарий"
        value={commentText}
        onChange={(event) => setCommentText(event.target.value)}
      />
      <p>Символов: {commentText.length}</p>
      <button type="submit">Отправить</button>
    </form>
  );
}
export default CommentForm;
