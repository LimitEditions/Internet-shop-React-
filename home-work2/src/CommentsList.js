import { useState } from 'react'

function CommentsList() {
    const [comments, setComments] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
    ]);

    const deleteComment = (id) => {
        const index = comments.findIndex(comment => comment.id === id);
        if (index !== -1) {
            const newComments = [...comments];
            newComments.splice(index, 1);
            setComments(newComments);
        }
    }
    return comments.map((comment) =>
        <>
            <div className='comment' key={comment.id}>
                <h2>{comment.text}</h2>
                <button onClick={() => deleteComment(comment.id)}><img className='trash' src="https://www.pngall.com/wp-content/uploads/5/Delete-Bin-Trash-PNG-Free-Download.png" alt="Корзина" /></button>
            </div>
        </>
    );
}

export default CommentsList;

