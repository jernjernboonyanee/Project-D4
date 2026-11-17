fetch("data.json")
  .then((response) => response.json())
  .then((projects) => {
    const container = document.getElementById("project-container");

    projects.forEach((item) => {
      const card = document.createElement("div");
      card.className = "card";

      card.innerHTML = `
            <h3>${item.title}</h3>
            <div>
                <span class="badge">${item.type}</span>
                <span class="year">ปี ${item.year}</span>
            </div>
            <p class="desc">${item.data}</p>
        `;

      container.appendChild(card);
    });
  })
  .catch((error) => console.error("Unable to download data", error));
