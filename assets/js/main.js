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
      // console.log(data.message.value);
      const response = await axios.post(
        // "https://formulairebackend.herokuapp.com/",
        "http://localhost:3020/",
        data
      );
      if (response.status === 200) {
        alert(
          "Votre message a bien été envoyé nous traiterons votre demande dans les plus brefs délais."
        );
      } else if (!response) {
        alert("Réessayer en remplissant tous les champs obligatoire");
      } else {
        alert("Réessayer en remplissant tous les champs obligatoire");
      }
    });
});
