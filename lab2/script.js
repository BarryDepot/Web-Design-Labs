// llistens for changes to number of subjects input
document.getElementById('numSubjects').addEventListener('input', function () {
  const num = parseInt(this.value);
  const container = document.getElementById('subjectInputs');
  container.innerHTML = '';

  // creates input fields for each subject
  if (num > 0) {
    for (let i = 0; i < num; i++) {
      const div = document.createElement('div');
      div.className = 'input-section';
      div.innerHTML = `
                <label>Subject ${i + 1} mark:</label>
                <input type="number" id="mark${i}" min="0" max="100" placeholder="Enter mark">
            `;
      container.appendChild(div);
    }
  }
});

function calculate() {
  const numSubjects = parseInt(document.getElementById('numSubjects').value);

  // validate number of subjects
  if (!numSubjects || numSubjects < 1) {
    alert('Please enter number of subjects');
    return;
  }

  // get all marks from inputs
  let marks = [];
  for (let i = 0; i < numSubjects; i++) {
    const mark = parseFloat(document.getElementById(`mark${i}`).value);
    if (isNaN(mark)) {
      alert(`Please enter mark for Subject ${i + 1}`);
      return;
    }
    marks.push(mark);
  }

  // displays the results
  displayResults(marks);
}

// displays all marks
function displayResults(marks) {
  let output = '<h2>Your Results</h2>';

  // shows each subject mark
  for (let i = 0; i < marks.length; i++) {
    output += `<p>Subject ${i + 1}: ${marks[i]}%</p>`;
  }

  // shows results section
  document.getElementById('results').innerHTML = output;
  document.getElementById('results').style.display = 'block';
}
