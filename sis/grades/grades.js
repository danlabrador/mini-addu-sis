import gradesData from '../../src/data/gradesData.js';

function main() {
  const { grades } = gradesData;
  const table = document.getElementById('tbl-grades');
  grades.forEach(grade => {
    const row = document.createElement('tr');
    row.classList.add('p-2', 'hover:bg-gray-200');
    row.innerHTML = `
      <td class="text-sm p-3">${grade.subject_code}</td>
      <td class="text-sm p-3">${grade.class_code}</td>
      <td class="text-sm p-3">
        <span class="flex flex-col">${grade.title}</span>
        <span class="text-xs">${grade.schedule.map(sched => `${sched.day} ${sched.time} ${sched.room}`).join('; ')}</span>
      </td>
      <td class="text-sm p-3 text-center">${grade.prelim}</td>
      <td class="text-sm p-3 text-center">${grade.midterm}</td>
      <td class="text-sm p-3 text-center">${grade.prefinal}</td>
      <td class="text-sm p-3 text-center">${grade.final}</td>
      <td class="text-sm p-3 text-center">${grade.units}</td>
      <td class="text-sm p-3 text-center">${grade.credit_to}</td>
    `;
    table.appendChild(row);
  });
}

main();
