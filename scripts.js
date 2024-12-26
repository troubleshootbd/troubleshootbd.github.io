document.addEventListener("DOMContentLoaded", function() {
    const copyButtons = document.querySelectorAll(".copy-btn");
  
    copyButtons.forEach((btn) => {
      btn.addEventListener("click", function() {
        const preTag = btn.previousElementSibling;
        if (preTag && preTag.tagName.toLowerCase() === "pre") {
          const codeText = preTag.innerText;
          navigator.clipboard.writeText(codeText)
            .then(() => {
              alert("Code copied to clipboard!");
            })
            .catch(err => {
              alert("Failed to copy: " + err);
            });
        }
      });
    });
  });
  