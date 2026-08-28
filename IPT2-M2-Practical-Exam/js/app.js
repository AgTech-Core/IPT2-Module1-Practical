function addStudent() {
	const studentFields = [
		document.getElementById('idNumber'),
		document.getElementById('firstName'),
		document.getElementById('middleName'),
		document.getElementById('lastName')
	];
	const tableContent = document.getElementById('table-content');

	if (studentFields.some((field) => field.value.trim() === '')) {
		return;
	}

	const studentRow = document.createElement('tr');

	studentFields.forEach((field) => {
		const cell = document.createElement('td');
		cell.textContent = field.value.trim();
		studentRow.appendChild(cell);
	});

	tableContent.appendChild(studentRow);

	studentFields.forEach((field) => {
		field.value = '';
	});
}

document.getElementById('addStudentButton').addEventListener('click', addStudent);
