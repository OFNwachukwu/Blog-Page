document.addEventListener("DOMContentLoaded", () => {
  const postForm = document.getElementById("postForm");
  const postsSection = document.querySelector(".posts");

  // Function to generate a new post element
  function createPostElement(title, content, author) {
    const post = document.createElement("div");
    post.classList.add("post");

    // Post title
    const postTitle = document.createElement("h3");
    postTitle.textContent = title;

    // Post content
    const postContent = document.createElement("p");
    postContent.textContent = content;

    // Post author and date
    const postAuthor = document.createElement("p");
    postAuthor.classList.add("author");
    const today = new Date().toISOString().slice(0, 10); // Get today's date
    postAuthor.textContent = `Posted by: ${author} on ${today}`;

    // Edit and Delete buttons
    const editButton = document.createElement("button");
    editButton.textContent = "Edit";
    editButton.classList.add("edit-btn");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("delete-btn");

    // Append the post details to the post element
    post.appendChild(postTitle);
    post.appendChild(postContent);
    post.appendChild(postAuthor);
    post.appendChild(editButton);
    post.appendChild(deleteButton);

    return post;
  }

  // Function to add a new post when the form is submitted
  postForm.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get the values from the form inputs
    const postTitle = document.getElementById("postTitle").value;
    const postContent = document.getElementById("postContent").value;
    const postAuthor = document.getElementById("postAuthor").value;

    // Create a new post element
    const newPost = createPostElement(postTitle, postContent, postAuthor);

    // Add the new post to the posts section
    postsSection.appendChild(newPost);

    // Clear the form after submission
    postForm.reset();
  });

  // Function to handle edit and delete buttons
  postsSection.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
      // Delete the post
      e.target.closest(".post").remove();
    } else if (e.target.classList.contains("edit-btn")) {
      // Edit the post
      const post = e.target.closest(".post");
      const title = post.querySelector("h3").textContent;
      const content = post.querySelector("p").textContent;
      const author = post
        .querySelector(".author")
        .textContent.split("by: ")[1]
        .split(" on")[0];

      // Fill the form with post values for editing
      document.getElementById("postTitle").value = title;
      document.getElementById("postContent").value = content;
      document.getElementById("postAuthor").value = author;

      // Remove the post being edited
      post.remove();
    }
  });
});
