async function submitFormHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector("#post-title").value.trim();
    const post = document.querySelector("#post-content").value.trim();
  
    if (title && post) {
      const response = await fetch("/api/posts", {
        method: "post",
        body: JSON.stringify({
          title,
          post,
        }),
        headers: { "Content-Type": "application/json" },
      });
      let data = await response.json();
      if (response.ok) {
        document.location.replace("/dashboard/");
      }
    }
  }
  
  
  
  document
    .querySelector(".new-post-form")
    .addEventListener("submit", submitFormHandler);
  
