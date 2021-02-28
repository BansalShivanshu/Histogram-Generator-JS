function init(){
    document.getElementById('fileInput').addEventListener('change', handleFileSelect, false);

    csvLoaded = false;

    // add event listeners to number inputs
    setupListners();
    
    // arraylist for lower bounds (initialised to defaults)
    lowerbounds = [100, 95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 0];
}

class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    // getters
    getName() {
        return this.name;
    }

    getMarks() {
        return this.marks;
    }
}

function descStudents(a, b) {
    return b.getMarks() - a.getMarks();
}

function handleFileSelect(event){
    const reader = new FileReader()
    reader.onload = handleFileLoad;
    reader.readAsText(event.target.files[0])
}
  
function handleFileLoad(event){
    console.log(event);

    csvLoaded = true;

    plainText = event.target.result;
    arr = plainText.split("\n");
    arr.splice(0, 1);
    
    students = [];

    // get the students in an array
    for (var i = 0; i < arr.length; i++) {
        var name = getName(arr[i]);
        var marks = getMarks(arr[i]);
        var stu = new Student(name, marks);
        console.log(stu);
        students.push(stu);
    }
    
    // sort the students in desc order
    students.sort(descStudents);

    // populate the stats
    updateHighest();
    updateLowest();
    updateMean();
    updateMedian();

    // setup histograms
    generateHistogram();
}

function getName(text) {
    var name = "";
    var i = 0;
    while (text[i] != ',') {
        name += text[i];
        i++;
    }
    return name;
}

function getMarks(text) {
    var i = 0;
    while (text[i] != ',') {i++;}
    i++;
    return text.substring(i);
}


// functions for stats section
function updateHighest() {
    document.getElementById("highest").textContent = students[0].getName();
}

function updateLowest() {
    document.getElementById("lowest").textContent = students[students.length - 1].getName();
}

function updateMean() {
    var mean = 0;
    for (var i = 0; i < students.length; i++) {
        mean += parseFloat(students[i].getMarks());
    }
    mean = mean / students.length;
    document.getElementById("mean").textContent = mean.toFixed(2);
}

function updateMedian() {
    // if the length is even
    if (students.length % 2 == 0) {
        const first = parseFloat(students[students.length / 2 - 1].getMarks()).toFixed(2);
        const second = parseFloat(students[students.length / 2].getMarks()).toFixed(2);
        document.getElementById("median").textContent = (first + second) / 2;
    } else {
        document.getElementById("median").textContent = parseFloat(students[Math.floor(students.length / 2)].getMarks()).toFixed(2);
    }
}

// functions for histogram section
function setupListners() {
    maxin = document.getElementById("input-max").addEventListener("change", maxinListn, false);
    aplus = document.getElementById("input-Aplus").addEventListener("change", apListn, false);
    ain = document.getElementById("input-a").addEventListener("change", aListn, false);
    aminus = document.getElementById("input-Aminus").addEventListener("change", amListn, false);
    bplus = document.getElementById("input-Bplus").addEventListener("change", bpListn, false);
    bin = document.getElementById("input-b").addEventListener("change", bListn, false);
    bminus = document.getElementById("input-Bminus").addEventListener("change", bmListn, false);
    cplus = document.getElementById("input-Cplus").addEventListener("change", cpListn, false);
    cin = document.getElementById("input-c").addEventListener("change", cListn, false);
    cminus = document.getElementById("input-Cminus").addEventListener("change", cmListn, false);
    din = document.getElementById("input-d").addEventListener("change", dListn, false);
    fin = document.getElementById("input-f").addEventListener("change", fListn, false);
}

function maxinListn(e) {
    if (parseFloat(e.target.value).toFixed(2) < 0) {
        window.alert("Negative values are not allowed\nDefault is 100");
        e.target.value = parseFloat(100.00).toFixed(2);
    } else {
        addtoLB(e, 0);
    }
}

function apListn(e) {
    if (parseFloat(e.target.value).toFixed(2) < 0) {
        window.alert("Negative values are not allowed\nDefault is 95");
        e.target.value = parseFloat(95.00).toFixed(2);
    } else {
        addtoLB(e, 1);
    }
}
function aListn(e) {
    if (parseFloat(e.target.value).toFixed(2) < 0) {
        window.alert("Negative values are not allowed\nDefault is 90");
        e.target.value = parseFloat(90.00).toFixed(2);
    } else {
        addtoLB(e, 2);
    }
}
function amListn(e) {
    if (parseFloat(e.target.value).toFixed(2) < 0) {
        window.alert("Negative values are not allowed\nDefault is 85");
        e.target.value = parseFloat(85.00).toFixed(2);
    } else {
        addtoLB(e, 3);
    }
}

function bpListn(e) {
    if (parseFloat(e.target.value).toFixed(2) < 0) {
        window.alert("Negative values are not allowed\nDefault is 80");
        e.target.value = parseFloat(80.00).toFixed(2);
    } else {
        addtoLB(e, 4);
    }
}
function bListn(e) {
    if (parseFloat(e.target.value).toFixed(2) < 0) {
        window.alert("Negative values are not allowed\nDefault is 75");
        e.target.value = parseFloat(75.00).toFixed(2);
    } else {
        addtoLB(e, 5);
    }
}
function bmListn(e) {
    if (parseFloat(e.target.value).toFixed(2) < 0) {
        window.alert("Negative values are not allowed\nDefault is 70");
        e.target.value = parseFloat(70.00).toFixed(2);
    } else {
        addtoLB(e, 6);
    }
}

function cpListn(e) {
    if (parseFloat(e.target.value).toFixed(2) < 0) {
        window.alert("Negative values are not allowed\nDefault is 65");
        e.target.value = parseFloat(65.00).toFixed(2);
    } else {
        addtoLB(e, 7);
    }
}
function cListn(e) {
    if (parseFloat(e.target.value).toFixed(2) < 0) {
        window.alert("Negative values are not allowed\nDefault is 60");
        e.target.value = parseFloat(60.00).toFixed(2);
    } else {
        addtoLB(e, 8);
    }
}
function cmListn(e) {
    if (parseFloat(e.target.value).toFixed(2) < 0) {
        window.alert("Negative values are not allowed\nDefault is 55");
        e.target.value = parseFloat(55.00).toFixed(2);
    } else {
        addtoLB(e, 9);
    }
}

function dListn(e) {
    if (parseFloat(e.target.value).toFixed(2) < 0) {
        window.alert("Negative values are not allowed\nDefault is 50");
        e.target.value = parseFloat(50.00).toFixed(2);
    } else {
        addtoLB(e, 10);
    }
}

function fListn(e) {
    if (parseFloat(e.target.value).toFixed(2) < 0) {
        window.alert("Negative values are not allowed\nDefault is 0");
        e.target.value = parseFloat(0.00).toFixed(2);
    } else {
        addtoLB(e, 11);
    }
}

function addtoLB(bound, index) {
    var tempArr = [];
    
    // make a deep copy
    for (var i = 0; i < lowerbounds.length; i++) {
        tempArr.push(lowerbounds[i]);
    }

    tempArr[index] = parseFloat(bound.target.value).toFixed(2);
    console.log("changed value at index " + index + " to " + bound.target.value);
    console.log("tempArr: " + tempArr);

    // check if is in desc order (validate)
    for (var i = 0; i < tempArr.length - 1; i++) {
        if (parseFloat(tempArr[i]) <= parseFloat(tempArr[i + 1])) {
            window.alert("Lower bounds are unique and in descending order only.\nNo changes accepted.\nReverting back to last correct.");
            bound.target.value = parseFloat(lowerbounds[index]).toFixed(2);
            return;
        }
    }

    lowerbounds[index] = parseFloat(bound.target.value).toFixed(2);

    if (csvLoaded) {
        generateHistogram();
    }
}

function generateHistogram() {
    //               A+, A,A-, B+,B, B-,C+,C,C-, D, F
    var histValues = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

    for (var i = 0; i < students.length; i++) {
        var mark = parseFloat(students[i].getMarks()).toFixed(2);

        if (parseFloat(mark) >= parseFloat(lowerbounds[1]) && parseFloat(mark) <= parseFloat(lowerbounds[0])) { // greater than 95 or A+ lb
            histValues[0] += 1;
        } else if (parseFloat(mark) >= parseFloat(lowerbounds[2]) && parseFloat(mark) < parseFloat(lowerbounds[1])) { // for A
            histValues[1] += 1;
        } else if (parseFloat(mark) >= parseFloat(lowerbounds[3]) && parseFloat(mark) < parseFloat(lowerbounds[2])) { // for A-
            histValues[2] += 1;
        } else if (parseFloat(mark) >= parseFloat(lowerbounds[4]) && parseFloat(mark) < parseFloat(lowerbounds[3])) { // for B+
            histValues[3] += 1;
        } else if (parseFloat(mark) >= parseFloat(lowerbounds[5]) && parseFloat(mark) < parseFloat(lowerbounds[4])) { // for B
            histValues[4] += 1;
        } else if (parseFloat(mark) >= parseFloat(lowerbounds[6]) && parseFloat(mark) < parseFloat(lowerbounds[5])) { // for B-
            histValues[5] += 1;
        } else if (parseFloat(mark) >= parseFloat(lowerbounds[7]) && parseFloat(mark) < parseFloat(lowerbounds[6])) { // for C+
            histValues[6] += 1;
        } else if (parseFloat(mark) >= parseFloat(lowerbounds[8]) && parseFloat(mark) < parseFloat(lowerbounds[7])) { // for C
            histValues[7] += 1;
        } else if (parseFloat(mark) >= parseFloat(lowerbounds[9]) && parseFloat(mark) < parseFloat(lowerbounds[8])) { // for C-
            histValues[8] += 1;
        } else if (parseFloat(mark) >= parseFloat(lowerbounds[10]) && parseFloat(mark) < parseFloat(lowerbounds[9])) { // for D
            histValues[9] += 1;
        } else if (parseFloat(mark) >= parseFloat(lowerbounds[11]) && parseFloat(mark) < parseFloat(lowerbounds[10])) { // for F
            histValues[10] += 1;
        }
    }

    console.log(histValues + " are hisValues");

    // set the progress bars and the percent count
    document.getElementById("ht-Aplus").value = (histValues[0] * 100 / students.length).toString();
    document.getElementById("p1").textContent = (histValues[0] * 100 / students.length).toString() + "% | " + histValues[0].toString() + " Students";

    document.getElementById("ht-a").value = (histValues[1] * 100 / students.length).toString();
    document.getElementById("p2").textContent = (histValues[1] * 100 / students.length).toString() + "% | " + histValues[1].toString() + " Students";

    document.getElementById("ht-Aminus").value = (histValues[2] * 100 / students.length).toString();
    document.getElementById("p3").textContent = (histValues[2] * 100 / students.length).toString() + "% | " + histValues[2].toString() + " Students";

    document.getElementById("ht-Bplus").value = (histValues[3] * 100 / students.length).toString();
    document.getElementById("p4").textContent = (histValues[3] * 100 / students.length).toString() + "% | " + histValues[3].toString() + " Students";
    
    document.getElementById("ht-b").value = (histValues[4] * 100 / students.length).toString();
    document.getElementById("p5").textContent = (histValues[4] * 100 / students.length).toString() + "% | " + histValues[4].toString() + " Students";
    
    document.getElementById("ht-Bminus").value = (histValues[5] * 100 / students.length).toString();
    document.getElementById("p6").textContent = (histValues[5] * 100 / students.length).toString() + "% | " + histValues[5].toString() + " Students";

    document.getElementById("ht-Cplus").value = (histValues[6] * 100 / students.length).toString();
    document.getElementById("p7").textContent = (histValues[6] * 100 / students.length).toString() + "% | " + histValues[6].toString() + " Students";
    
    document.getElementById("ht-c").value = (histValues[7] * 100 / students.length).toString();
    document.getElementById("p8").textContent = (histValues[7] * 100 / students.length).toString() + "% | " + histValues[7].toString() + " Students";
    
    document.getElementById("ht-Cminus").value = (histValues[8] * 100 / students.length).toString();
    document.getElementById("p9").textContent = (histValues[8] * 100 / students.length).toString() + "% | " + histValues[8].toString() + " Students";
    
    document.getElementById("ht-d").value = (histValues[9] * 100 / students.length).toString();
    document.getElementById("p10").textContent = (histValues[9] * 100 / students.length).toString() + "% | " + histValues[9].toString() + " Students";
    
    document.getElementById("ht-f").value = (histValues[10] * 100 / students.length).toString();
    document.getElementById("p11").textContent = (histValues[10] * 100 / students.length).toString() + "% | " + histValues[10].toString() + " Students";
}