// ここにJavaScriptを記述していきます。
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("header a").forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const id = anchor.getAttribute("href");
      const tragetElement = document.querySelector(id);
      const top =
        targetElement.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: top, behavior: "smooth" });
    });
  });
  const readMore = document.getElementById("read-more");
  readMore.addEventListener("click", () => {
    const moreText = document.getElementById("more-text");
    if (readMore.classList.contains("active")) {
      moreText.style.display = "none";
      readMore.classList.remove("active");
      readMore.textContent = "もっと詳しく";
    } else {
      moreText.style.display = "block";
      readMore.classList.add("active");
      readMore.textContent = "閉じる";
    }
  });
  document.querySelectorAll(".languages-box").forEach((box) => {
    box.addEventListener("mouseenter", () => {
      const p = box.querySelector("p");
      p.style.display = "block";
      p.style.opacity = "1";
      p.style.transition = "opacity 500ms";
    });
    box.addEventListener("mouseleave", () => {
      const p = box.querySelector("p");
      p.style.opacity = "0";
      p.style.transition = "opacity 500ms";
      setTimeout(() => {
        p.style.display = "none";
      }, 500);
    });
  });
  document.querySelectorAll(".btn-pricing").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.getElementById("apply-modal").style.display = "flex";
      const selectedItem = btn.getAttribute("id");
      const course = btn
        .closest(".price-column")
        .querySelector("h2").textContent;
      document.getElementById("course-select").value = selectedItem;
      document
        .getElementById("apply-form")
        .querySelector("h2").textContent = `[${course}] に申し込む`;
    });
  });
  document.getElementById("close-modal").addEventListener("click", () => {
    document.getElementById("apply-modal").style.display = "none";
  });
  document.querySelectorAll(".column-image").forEach((image) => {
    image.addEventListener("mouseenter", () => {
      image.classList.add("zoom");
      const zoomBlack = image.querySelector(".zoom-black");
      zoomBlack.style.display = "block";
      zoomBlack.style.opacity = "1";
      zoomBlack.style.transition = "opacity 300ms";
    });
    image.addEventListener("mouseleave", () => {
      image.classList.remove("zoom");
      const zoomBlack = image.querySelector(".zoom-black");
      zoomBlack.style.opacity = "0";
      zoomBlack.style.transition = "opacity 300ms";
      setTimeout(() => {
        zoomBlack.style.display = "none";
      }, 300);
    });
  });
  document
    .querySelector(".contact-form form")
    .addEventListener("submit", (e) => {
      e.preventDefault();
      let errorFlag = false;
      e.currentTarget.querySelectorAll("input, textarea").forEach((input) => {
        const body = input.value.trim();
        if (!body) {
          input.prevlousElementSibling.textContent = "入力してください";
          errorFlag = true;
        } else {
          input.previousElementSibling.textContent = "";
        }
      });
      if (!errorFlag) {
        document.querySelector(".contact-form").innerHTML =
          "<h4>お問い合わせありがとうございます。</h4>";
      }
    });
  const items = document.querySelectorAll(".carousel-inner .item");
  const indicators = document.querySelectorAll(".carousel-indicators li");

  function goToItem(index) {
    items.forEach((item) => {
      item.classList.remove("active");
    });
    indicators.forEach((indicator) => {
      indicator.classList.remove("active");
    });
    if (items[index] !== undefined) {
      items[index].classList.add("active");
    }
    if (indicators[index] !== undefined) {
      indicator[index].classList.add("active");
    }
  }
  indicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      goToItem(index);
    });
  });
  goToItem(0);
});
