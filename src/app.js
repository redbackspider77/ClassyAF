const app = document.getElementById('app')

let currentPage = 'timetable';

const pages = {
  timetable: () => `
    <h2 class="text-xl font-bold mb-4">📅 Today’s Timetable</h2>
    <div class="grid gap-4">
      ${generatePeriodCard("Math", "Room 403", "8:30 AM", "red")}
      ${generatePeriodCard("English", "Room 301", "9:30 AM", "blue")}
      ${generatePeriodCard("Science", "Room 206", "11:00 AM", "green")}
    </div>
  `,
  homework: () => `
    <h2 class="text-xl font-bold mb-4">📚 Homework</h2>
    <p>No homework added yet.</p>
  `,
  activities: () => `
    <h2 class="text-xl font-bold mb-4">🏀 Activities</h2>
    <p>No clubs or events today.</p>
  `,
};

function generatePeriodCard(subject, room, time, color) {
  const colors = {
    red: "bg-red-500",
    blue: "bg-blue-500",
    green: "bg-green-500",
    yellow: "bg-yellow-500",
  };
  return `
    <div class="bg-white shadow-md rounded-lg overflow-hidden">
      <div class="${colors[color]} text-white p-2 font-semibold">${subject}</div>
      <div class="p-3 text-sm">
        <p><strong>Time:</strong> ${time}</p>
        <p><strong>Room:</strong> ${room}</p>
      </div>
    </div>
  `;
}

function render() {
  app.innerHTML = `
    <nav class="flex gap-2 mb-6">
      ${["timetable", "homework", "activities"]
        .map(page => `
          <button onclick="navigate('${page}')" 
            class="px-3 py-1 rounded ${page === currentPage ? 'bg-blue-600 text-white' : 'bg-gray-200'}">
            ${page.charAt(0).toUpperCase() + page.slice(1)}
          </button>
        `).join('')}
    </nav>
    <section>
      ${pages[currentPage]()}
    </section>
  `;
}

window.navigate = function (page) {
  currentPage = page;
  render();
};

render();
