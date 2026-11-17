// Interações simples do Portal da Modelagem 3D
document.addEventListener("DOMContentLoaded", () => {
  // Atualiza automaticamente o ano do rodapé.
  document.querySelectorAll("[data-year]").forEach((item) => {
    item.textContent = new Date().getFullYear();
  });

  // Abre e fecha o menu em telas pequenas.
  const menuButton = document.querySelector(".menu-toggle");
  const navigation = document.querySelector(".main-nav");

  if (menuButton && navigation) {
    menuButton.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("is-open");
      menuButton.setAttribute("aria-expanded", String(isOpen));
      menuButton.textContent = isOpen ? "✕" : "☰";
    });
  }

  // Quiz da página Modelagem 3D.
  const quiz = document.querySelector("[data-quiz]");
  if (quiz) {
    const feedback = quiz.querySelector(".quiz-feedback");
    quiz.querySelectorAll("button").forEach((button) => {
      button.addEventListener("click", () => {
        quiz.querySelectorAll("button").forEach((item) => item.classList.remove("selected"));
        button.classList.add("selected");
        if (button.dataset.answer === "b") {
          feedback.textContent = "Correto! A topologia organiza a estrutura da malha.";
          feedback.className = "quiz-feedback correct";
        } else {
          feedback.textContent = "Ainda não. Pense na organização dos elementos da malha e tente novamente.";
          feedback.className = "quiz-feedback incorrect";
        }
      });
    });
  }

  // Demonstração interativa dos elementos de uma malha.
  const meshDemo = document.querySelector(".mesh-demo");
  if (meshDemo) {
    const description = meshDemo.querySelector(".mesh-description");
    const diagram = meshDemo.querySelector(".cube-diagram");
    const messages = {
      vertices: "Os pontos destacados representam os vértices: posições que definem os cantos do cubo.",
      edges: "As linhas destacadas são as arestas: segmentos que conectam pares de vértices.",
      faces: "As regiões destacadas são as faces: superfícies planas que formam os lados do cubo."
    };
    meshDemo.querySelectorAll("[data-mesh]").forEach((button) => {
      button.addEventListener("click", () => {
        meshDemo.querySelectorAll("[data-mesh]").forEach((item) => item.classList.remove("active"));
        button.classList.add("active");
        diagram.dataset.highlight = button.dataset.mesh;
        description.textContent = messages[button.dataset.mesh];
      });
    });
  }
});
