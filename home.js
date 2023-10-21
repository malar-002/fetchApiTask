document.addEventListener('DOMContentLoaded', () => {
    const commentsContainer = document.getElementById('comments');

    fetch('https://jsonplaceholder.typicode.com/comments')
        .then(response => response.json())
        .then(comments => {
            comments.forEach(comment => {
                const commentCard = document.createElement('div');
                commentCard.classList.add('card', 'mb-3');
                commentCard.innerHTML = `
                    <div class="card-body">
                        <h5 class="card-title">${comment.name}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">Email: ${comment.email}</h6>
                        <p class="card-text" >${comment.body}</p>
                    </div>
                `;
                commentsContainer.appendChild(commentCard);
            });
        })
        .catch(error => console.error('Error fetching comments:', error));
});
