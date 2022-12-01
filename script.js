window.onload = async () => {
    const carousel = document.getElementById("carousel-slider");
    while (true) {
        carousel.children[0].classList.toggle("active");
        await sleep(3);
        carousel.children[0].classList.toggle("active");
        carousel.children[1].classList.toggle("active");
        await sleep(3);
        carousel.children[1].classList.toggle("active");
        carousel.children[2].classList.toggle("active");
        await sleep(3);
        carousel.children[2].classList.toggle("active");
    };
};

function checkData() {
    let amountStudents = document.getElementById("study-input-student");

    if (amountStudents.value > 1000) {
        const modal = new bootstrap.Modal(document.getElementById("main-modal"));
        modal.toggle();
    }
    else {
        insertTableData();
    }
};

function emptyForms() {
    let studyName = document.getElementById("study-input-name");
    let studyStudents = document.getElementById("study-input-student");
    let studyContactEmail = document.getElementById("study-input-contact");

    studyName.value = "";
    studyStudents.value = "";
    studyContactEmail.value = "";
};

function insertTableData() {
    let studyName = document.getElementById("study-input-name");
    let studyStudents = document.getElementById("study-input-student");
    let studyContactEmail = document.getElementById("study-input-contact");

    let table = document.getElementById("study-table");
    let row = table.insertRow(-1);

    let columnOne = row.insertCell(0);
    let columnTwo = row.insertCell(1);
    let columnThree = row.insertCell(2);

    columnOne.className = "column-one";
    columnTwo.className = "column-two";
    columnThree.className = "column-three";

    columnOne.innerHTML = studyName.value;
    columnTwo.innerHTML = studyStudents.value;
    columnThree.innerHTML = `<a href="mailto:${studyContactEmail.value}">${studyContactEmail.value}</a>`;

    alert(`${studyName.value} toegevoegd aan de tabel.`);

    emptyForms();
};

sleep = (seconds) => {
    return new Promise(resolve => setTimeout(resolve, seconds * 1000))
};