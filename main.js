class LottoGenerator extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'lotto-generator');

    const numberContainer = document.createElement('div');
    numberContainer.setAttribute('class', 'number-container');

    const button = document.createElement('button');
    button.textContent = 'Generate Numbers';
    button.addEventListener('click', () => this.generateAndDisplayNumbers(numberContainer));

    const style = document.createElement('style');
    style.textContent = `
      :host {
        display: block;
        width: 100%;
      }
      .lotto-generator {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
        background-color: var(--card-bg);
        border-radius: 15px;
        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        transition: background-color 0.3s;
      }
      .number-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 2rem;
        min-height: 70px;
      }
      .number {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: var(--card-bg);
          border: 3px solid var(--accent-color);
          color: var(--text-color);
          font-size: 1.5rem;
          font-weight: bold;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0.5rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          animation: fadeIn 0.5s ease-in-out forwards;
          transition: all 0.3s;
      }
      button {
          background-color: var(--accent-color);
          color: white;
          border: none;
          padding: 1rem 2.5rem;
          font-size: 1.2rem;
          border-radius: 30px;
          cursor: pointer;
          transition: transform 0.2s, background-color 0.3s;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      }
      button:hover {
          filter: brightness(1.1);
          transform: translateY(-2px);
      }
      button:active {
          transform: translateY(0);
      }
      @keyframes fadeIn {
          from {
              opacity: 0;
              transform: scale(0.5) translateY(20px);
          }
          to {
              opacity: 1;
              transform: scale(1) translateY(0);
          }
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    wrapper.appendChild(numberContainer);
    wrapper.appendChild(button);
  }

  generateNumbers() {
      const numbers = new Set();
      while (numbers.size < 6) {
          const randomNumber = Math.floor(Math.random() * 45) + 1;
          numbers.add(randomNumber);
      }
      return Array.from(numbers).sort((a, b) => a - b);
  }

  generateAndDisplayNumbers(container) {
      const numbers = this.generateNumbers();
      this.displayNumbers(container, numbers);
  }

  displayNumbers(container, numbers) {
      container.innerHTML = '';
      numbers.forEach((number, index) => {
          const numberDiv = document.createElement('div');
          numberDiv.classList.add('number');
          numberDiv.textContent = number;
          numberDiv.style.animationDelay = `${index * 0.1}s`;
          container.appendChild(numberDiv);
      });
  }
}

customElements.define('lotto-generator', LottoGenerator);

// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.textContent = 'Light Mode';
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDark = body.classList.contains('dark-mode');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    themeToggle.textContent = isDark ? 'Light Mode' : 'Dark Mode';
});
