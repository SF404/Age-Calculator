function age() {
    let bd = document.getElementById('date').value;
    let bm = document.getElementById('month').value;
    let by = document.getElementById('year').value;
    
    let date = new Date();
    let d = date.getDate();
    let m = 1 + date.getMonth();
    let y = date.getFullYear();
    // console.log(d, m, y);
    // bd = parseInt(bd);
    // bm = parseInt(bm);
    // by = parseInt(by);
    let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (bd > d) {
        d = d + month[bm - 1];
        m = m - 1;
    }

    if (bm > m) {
        m = m + 12;
        y = y - 1;
    }
    
    let years=y-by;
    let months= m-bm;
    let days=d-bd;

    document.getElementById('result').innerHTML = "Your current age is " + years + " years, " + months + " month and " + days + " days";
}
console.log(p);