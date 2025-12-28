const balanceEl = document.getElementById("balance");
const incomeEl = document.getElementById("income");
const expenseEl = document.getElementById("expense");
const listEl = document.getElementById("list");
const form = document.getElementById("form");
const search = document.getElementById("search");
const themeToggle = document.getElementById("themeToggle");

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];
let chart;

form.addEventListener("submit", addTransaction);
search.addEventListener("input", render);
themeToggle.addEventListener("click", () =>
  document.body.classList.toggle("dark")
);

function addTransaction(e) {
  e.preventDefault();

  const transaction = {
    id: Date.now(),
    text: text.value,
    amount: +amount.value,
    category: category.value,
    wallet: wallet.value,
    date: date.value
  };

  transactions.push(transaction);
  save();
  render();
  form.reset();
}

function deleteTransaction(id) {
  if (!confirm("Delete this transaction?")) return;
  transactions = transactions.filter(t => t.id !== id);
  save();
  render();
}

function render() {
  listEl.innerHTML = "";

  const filtered = transactions.filter(t =>
    t.text.toLowerCase().includes(search.value.toLowerCase())
  );

  filtered.forEach(t => {
    const li = document.createElement("li");
    li.className = t.amount > 0 ? "income" : "expense";

    li.innerHTML = `
      <div>
        <strong>${t.text}</strong>
        <small>${t.category} • ${t.wallet} • ${t.date}</small>
      </div>
      <div>
        ${t.amount > 0 ? "+" : "-"}₹${Math.abs(t.amount)}
        <button class="delete-btn" onclick="deleteTransaction(${t.id})">❌</button>
      </div>
    `;

    listEl.appendChild(li);
  });

  updateStats();
}

function updateStats() {
  const amounts = transactions.map(t => t.amount);
  const income = amounts.filter(a => a > 0).reduce((a,b)=>a+b,0);
  const expense = amounts.filter(a => a < 0).reduce((a,b)=>a+b,0);

  balanceEl.innerText = `₹${income + expense}`;
  incomeEl.innerText = `₹${income}`;
  expenseEl.innerText = `₹${Math.abs(expense)}`;

  updateChart(income, Math.abs(expense));
}

function updateChart(income, expense) {
  if (chart) chart.destroy();

  chart = new Chart(document.getElementById("chart"), {
    type: "doughnut",
    data: {
      labels: ["Income", "Expense"],
      datasets: [{
        data: [income, expense],
        backgroundColor: ["#16a34a", "#dc2626"]
      }]
    }
  });
}

function save() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}

render();