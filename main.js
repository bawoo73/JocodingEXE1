class LottoGenerator extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'lotto-generator');

    const numberContainer = document.createElement('div');
    numberContainer.setAttribute('class', 'number-container');

    const button = document.createElement('button');
    button.textContent = 'Generate';
    button.addEventListener('click', () => this.generateAndDisplayNumbers(numberContainer));

    const style = document.createElement('style');
    style.textContent = `
      .lotto-generator {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 2rem;
      }
      .number-container {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 2rem;
      }
      .number {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color: #fff;
          border: 2px solid #4a90e2;
          color: #4a90e2;
          font-size: 1.5rem;
          font-weight: bold;
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0.5rem;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          animation: fadeIn 0.5s ease-in-out forwards;
      }
      button {
          background-color: #4a90e2;
          color: white;
          border: none;
          padding: 1rem 2rem;
          font-size: 1.2rem;
          border-radius: 5px;
          cursor: pointer;
          transition: background-color 0.3s;
      }
      button:hover {
          background-color: #357abd;
      }
      @keyframes fadeIn {
          from {
              opacity: 0;
              transform: scale(0.5);
          }
          to {
              opacity: 1;
              transform: scale(1);
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
