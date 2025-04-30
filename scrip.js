const scheduleBody = document.getElementById('scheduleBody');
const taskForm = document.getElementById('taskForm');
const taskPalette = document.getElementById('taskPalette');

// Create times in 12-hour format (AM/PM)
for (let hour = 12; hour <= 24; hour++) {
  const row = document.createElement('tr');
  const time = document.createElement('td');
  
  // Format the hour to 12-hour format with AM/PM
  const timeString = formatTime(hour);
  time.textContent = timeString;
  row.appendChild(time);

  for (let day = 0; day < 7; day++) {
    const cell = document.createElement('td');
    cell.addEventListener('dragover', e => e.preventDefault());
    cell.addEventListener('drop', dropHandler);
    row.appendChild(cell);
  }

  scheduleBody.appendChild(row);
}

// Format hour into 12-hour format with AM/PM
function formatTime(hour) {
  let suffix = hour < 12 ? 'AM' : 'PM';
  let formattedHour = hour % 12 || 12; // Convert hour to 12-hour format (1-12)
  return `${formattedHour}:00 ${suffix}`;
}

taskForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('taskName').value;
  const color = document.getElementById('taskColor').value;

  const taskBlock = createTaskBlock(name, color);
  taskPalette.appendChild(taskBlock);

  taskForm.reset();
});

function createTaskBlock(text, color) {
  const div = document.createElement('div');
  div.className = 'task-block';
  div.draggable = true;
  div.textContent = text;
  div.style.backgroundColor = color;

  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = '✖';
  deleteBtn.onclick = () => div.remove();
  div.appendChild(deleteBtn);

  div.addEventListener('dragstart', dragStart);
  return div;
}

let dragged;

function dragStart(e) {
  dragged = this;
}

function dropHandler(e) {
  e.preventDefault();
  if (dragged) {
    this.appendChild(dragged);
    dragged = null;
  }
}
