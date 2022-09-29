const faqData = [
  {
    id: 1,
    question: "Who are we?",
    answer:
      "We enable upscaling careers through flexible, interactive and collaborative learning. We believe in building learning communities by bringing together mentors, young minds, and creators.",
  },
  {
    id: 2,
    question: "What do we do?",
    answer:
      "Building learning communities with Our Affordable & Competent Courses",
  },
  {
    id: 3,
    question: "Are the community classes boring?",
    answer: "No, not at all!!!",
  },
];

function createFaq() {
  // Accordion Body
  const accordion_body = document.querySelector(".accordion_body");

  faqData.map((faq) => {
    const container = document.createElement("div");
    const header = document.createElement("div");
    const h3 = document.createElement("h3");
    const i = document.createElement("i");
    const p = document.createElement("p");

    // Added class
    container.classList.add("faq");
    header.classList.add("faq_header");
    i.classList.add("fa-solid", "fa-plus", "show_btn");
    p.classList.add("hidden");

    // Append Child
    accordion_body.appendChild(container);
    container.appendChild(header);
    container.appendChild(p);
    header.appendChild(h3);
    header.appendChild(i);

    // Added Data
    h3.append(faq.question);
    p.append(faq.answer);
  });
}

function showFaq() {
  const btns = document.querySelectorAll(".show_btn");
  const p = document.querySelectorAll(".hidden");

  btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      p[i].classList.toggle("hidden"); // toggle hidden class
      p[i].classList.toggle("show"); // toggle show class

      btn.classList.toggle("fa-plus"); // toggle plus
      btn.classList.toggle("fa-minus"); // toggle minus
    });
  });
}

createFaq();
showFaq();
