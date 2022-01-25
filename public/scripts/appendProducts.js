function appendProducts(data, location) {
  location.innerHTML = "";

  var n;
  if (data.length === 0) n = `No Items Available`;
  else n = `${data.length} Items are available for your Query`;
  let h1 = document.createElement("p");
  h1.textContent = n;
  h1.style.textAlign = "center";
  h1.style.fontSize = "20px";
  h1.style.fontWeight = "600";
  h1.style.marginBottom = "20px";
  location.append(h1);

  data.forEach((item) => {
    if (item.jobType[0] == "Internship") {
      var abc = `<div class="detailsDiv"><p id="ctc1">
      <i class="fas fa-money-bill-alt" style="margin-right: 10px;"></i>STIPEND
    </p>
    <p id="ctc2">${item.CTC}</p></div><div class="detailsDiv" style="margin-left:30px"><p id="ctc1">
    <i class="fas fa-money-bill-alt" style="margin-right: 10px;"></i>DURATION
  </p>
  <p id="ctc2">${item.jobType[3] + " MONTHS"}</p></div>`;
    } else {
      var abc = `<div class="detailsDiv"><p id="ctc1">
          <i class="fas fa-money-bill-alt" style="margin-right: 10px;"></i>CTC
        </p>
        <p id="ctc2">${item.CTC}</p></div>`;
    }

    var a = `<div id="card">
    <div id="cardHeading">
    <div><p id="title">${item.title}</p>
    <p id="brand">${item.company}</p></div>

    <img src="${item.imgurl}" alt="" style="width:55px;height:55px">
      
    </div>

    <p id="location">
      <i class="fas fa-map-marker-alt" style="margin-right: 10px;"></i>${item.location}
    </p>

    <div id="cardDetails">
      <div class="detailsDiv">
        <p id="startD1">
          <i class="far fa-play-circle" style="margin-right: 10px;"></i>START DATE
        </p>
        <p  id="startD2">${item.startDate}</p>
      </div>
      
        ${abc}
        
      
      <div class="detailsDiv">
        <p id="applyBy1">
          <i class="fas fa-hourglass-end" style="margin-right: 10px;"></i>APPLY BY
        </p>
        <p id="applyBy2">${item.applyBy}</p>
      </div>
    </div>

    <div id="cardFooter">
      <div id="type">${item.jobType[0]}</div>
      <div id="viewDetailsLink">View Details  ></div>
    </div>
  </div>`;
    let div = document.createElement("div");
    div.addEventListener("click", (e) => {
      localStorage.setItem("individualProductItem", JSON.stringify(item));
      window.location.href = "individual.html";
    });
    // console.log('a:', a)
    div.innerHTML = a;

    location.append(div);
  });
}

export default appendProducts;