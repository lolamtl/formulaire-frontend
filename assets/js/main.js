document.addEventListener("DOMContentLoaded", () => {
  console.log("page refresh");
  document
    .querySelector("#contact-form")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      const data = {
        fisrtname: document.querySelector("#firstname").value,
        lastname: document.querySelector("#lastname").value,
        email: document.querySelector("#email").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value,
      };
      console.log(data);
      const response = await axios.post(
        "https://formulairebackend.herokuapp.com/",
        data
      );
      console.log(response);

      if (response.status !== 200) {
        alert("Nop ca marche pas!");
      } else {
        alert("C'est envoyé !");
      }
    });
});
