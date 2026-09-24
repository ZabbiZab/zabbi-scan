(function () {
  const root = document.body;
  const category = root.dataset.category;
  const quotes = window.ZABBI_QUOTES?.[category] || [];
  const quoteEl = document.getElementById('quote');
  const button = document.getElementById('nextQuote');
  let lastIndex = -1;

  function nextQuote() {
    if (!quoteEl || quotes.length === 0) return;
    let index = 0;
    if (quotes.length > 1) {
      do { index = Math.floor(Math.random() * quotes.length); }
      while (index === lastIndex);
    }
    lastIndex = index;
    quoteEl.textContent = quotes[index];
  }

  if (button) button.addEventListener('click', nextQuote);
  nextQuote();
})();
