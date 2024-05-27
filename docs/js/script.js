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
  // 言語一覧部分
});
