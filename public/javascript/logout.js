async function logoutHandler(event) {
    event.preventDefault();
    
    
      const response = await fetch("/api/users/logout", {
        method: "post",
    
        headers: { "Content-Type": "application/json" },
      });
      let data = await response.json();
      if (response.ok) {
        document.location.replace("/login");
      }
  }
  
  
  
  document
    .querySelector("#logout")
    .addEventListener("click", logoutHandler);
  
