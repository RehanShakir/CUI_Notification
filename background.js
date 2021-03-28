let tableLen = document.querySelector(".table").rows.length;

for (let i = 1; i < tableLen; i++) {
  let per = Number(                                                
    document                                            
      .querySelector(".table")
      .rows[i].cells[5].innerText.replace(/\D/g, "")
  );
  if (per > 100) {
    for (let j = 0; j < 2; j++) {
      let labPer = Number(
        document
          .querySelector(".table")
          .rows[i].cells[5].getElementsByClassName("lab_class_attendance")
          [j].innerText.replace(/\D/g, "")
      );
      let msg = j === 0 ? "Theroy Class" : "Lab Class";
      if (labPer < 90) {
        alert(
          "Short Attendance in" +
            " " +
            document.querySelector(".table").rows[i].cells[1].innerText +
            " " +
            msg
        );
      }
    }
  }
  if (per < 90) {
    alert(
      "Short Attendance in" +
        " " +
        document.querySelector(".table").rows[i].cells[1].innerText
    );
  }
}
