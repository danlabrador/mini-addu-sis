import coursesData from '../../src/data/coursesData.js';

function main() {
  const { courses } = coursesData;
  const table = document.getElementById('tbl-courses');
  courses.forEach(course => {
    const row = document.createElement('tr');
    row.classList.add('p-2', 'hover:bg-gray-200');
    row.innerHTML = `
      <td class="text-sm p-3">${course.code}</td>
      <td class="text-sm p-3">${course.subject}</td>
      <td class="text-sm p-3">${course.descriptive_title}</td>
      <td class="text-sm p-3 text-center">${course.num_slots}</td>
      <td class="text-sm p-3 text-center">${course.num_slots_left}</td>
      <td class="text-sm p-3 text-center">${course.start_time}</td>
      <td class="text-sm p-3 text-center">${course.end_time}</td>
      <td class="text-sm p-3 text-center">${course.days}</td>
    `;
    table.appendChild(row);
  });
}

main();