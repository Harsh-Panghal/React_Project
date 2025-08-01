document.addEventListener("DOMContentLoaded", () => {
  

  async function loadDocumentation() {
    // Fetch the JSON (or you can also import it directly if it's embedded)
    const response = await fetch("documentation.json"); // Adjust path if needed
    const data = await response.json();
    const container = document.getElementById("Documentation-container");

    data.sections.forEach((section) => {
      const sectionDiv = document.createElement("div");
      const heading = document.createElement("h2");
      heading.textContent = section.heading;
      heading.id = toId(section.heading); // 👈 ID here
      heading.className =
        "text-[18px] md:text-[22px] font-semibold mt-6 mb-4 text-[#082343]";
      sectionDiv.appendChild(heading);

      if (section.content) {
        renderContent(section.content, sectionDiv);
      }

      if (section.subsections) {
        section.subsections.forEach((sub) => {
          const subheading = document.createElement("h3");
          subheading.textContent = sub.subheading;
          subheading.id = toId(sub.subheading); // 👈 Sub ID here
          subheading.className =
            "text-[18px] font-medium mt-4 mb-2 text-[#1E1D1D] font-semibold";
          sectionDiv.appendChild(subheading);

          renderContent(sub.content, sectionDiv);
        });
      }

      container.appendChild(sectionDiv);
    });
  }

  function renderContent(contentArray, parent) {
    contentArray.forEach((item) => {
      if (item.type === "text") {
        const p = document.createElement("p");
        p.className = "text-[16px] text-[#323B44] mb-2";
        p.textContent = item.value;
        parent.appendChild(p);
      } else if (item.type === "list") {
        if (item.label) {
          const label = document.createElement("p");
          label.className = "text-[15px] font-medium text-[#1C1C1C] mt-2";
          label.textContent = item.label;
          parent.appendChild(label);
        }

        const ul = document.createElement("ul");
        ul.className = "list-disc pl-5 text-[15px] text-[#323B44] mb-4";

        item.value.forEach((val) => {
          const li = document.createElement("li");
          li.textContent = val;
          ul.appendChild(li);
        });

        parent.appendChild(ul);
      }
    });
  }
  function toId(text) {
    return text
      .toLowerCase()
      .replace(/^[\d.\s-]+/, "") // Remove leading numbers, dots, spaces, dashes
      .replace(/[^\w\s-]/g, "") // Remove non-word characters
      .replace(/\s+/g, "-") // Replace spaces with hyphens
      .trim(); // Trim any remaining whitespace
  }
  // Add active class to the clicked link
  document.querySelectorAll(".sidebar a.nav-link").forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // Prevent default anchor jump

      // 1. Remove active color and reset to default
      document.querySelectorAll(".sidebar a.nav-link").forEach((el) => {
        el.classList.remove("text-[#1FA2D0]");
        el.classList.remove("text-[#082343]");
        if (el.classList.contains("font-semibold")) {
          el.classList.add("text-[#082343]");
        } else {
          el.classList.add("text-[#828282]");
        }
      });

      // 2. Add active color to clicked
      this.classList.remove("text-[#828282]", "text-[#082343]");
      this.classList.add("text-[#1FA2D0]");

      // 3. Scroll manually
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const container = document.querySelector("main .flex-1");
        const containerTop = container.getBoundingClientRect().top;
        const elementTop = targetElement.getBoundingClientRect().top;
        const scrollOffset =
          elementTop - containerTop + container.scrollTop - 20;

        container.scrollTo({
          top: scrollOffset,
          behavior: "smooth",
        });
      }
    });
  });

  loadDocumentation();
});
