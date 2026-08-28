

// SA SUBJECT NI - DEV2
function addSubject() {
    // Get values from subject inputs
    const subjectCode = document.getElementById("subjectCode").value;
    const subjectName = document.getElementById("subjectName").value;
    const units = document.getElementById("units").value;

    // Create a new table row
    const row = document.createElement("tr");

    // Put the input values into the row
    row.innerHTML = `
        <td>${subjectCode}</td>
        <td>${subjectName}</td>
        <td>${units}</td>
    `;

    // Add the row to the subject table
    document.getElementById("table-content").appendChild(row);
}

document.getElementById("addSubject").addEventListener("click", addSubject);