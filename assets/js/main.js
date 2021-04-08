document.addEventListener("DOMContentLoaded", () => {
  document
    .querySelector("#contact-form")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      const data = {
        firstname: document.querySelector("#firstname").value,
        lastname: document.querySelector("#lastname").value,
        email: document.querySelector("#email").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value,
      };

      try {
        const response = await axios.post(
          "https://formulairebackend.herokuapp.com/",
          data
        );
        if (response.status === 200) {
          alert(
            "Votre message a bien été envoyé nous traiterons votre demande dans les plus brefs délais."
          );
        } else {
          alert("Réessayer en remplissant tous les champs obligatoire");
        }
      } catch (error) {
        alert("Réessayer en remplissant tous les champs obligatoire");
      }
    });
});
