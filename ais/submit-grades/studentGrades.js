import gradesData from '../../src/data/studentGradesData.js';

function main() {
  const { students } = gradesData;
  console.log(students[0])
  const table = document.getElementById('tbl-submit-grades');
  students.forEach(grade => {
    const row = document.createElement('tr');
    row.classList.add('p-2', 'hover:bg-gray-200');
    row.innerHTML = `
      <td class="text-sm p-3">${grade["Code"]}</td>
      <td class="text-sm p-3">${grade["Last Name"]}, ${grade["First Name"]}</td>
      ${generateSelectColumn()}
      ${generateSelectColumn()}
      ${generateSelectColumn()}
      ${generateSelectColumn()}
      <td class="text-sm p-3 text-center">NEW</td>
      <td class="text-sm p-3 text-center">${grade["Year Level"]}</td>
      <td class="text-sm p-3 text-center">${grade["Acad Status"]}</td>
      <td class="text-sm p-3 text-center">${grade["Year of Entry"]}</td>
      <td class="text-sm p-3 text-center">${grade["Entry Year Level"]}</td>
    `;
    table.appendChild(row);
  });
}

function generateSelectColumn() {
  const options = `
    <option value="" disabled selected>--</option>
    <option value="A">A</option>
    <option value="B+">B+</option>
    <option value="B">B</option>
    <option value="C+">C+</option>
    <option value="C">C</option>
    <option value="D">D</option>
    <option value="F">F</option>
    <option value="FD">FD</option>
    <option value="WP">WP</option>
    <option value="AUD">AUD</option>
  `;
  return `
    <td class="text-sm p-3 text-center">
      <select>${options}</select>
    </td>
  `;
}

main();
