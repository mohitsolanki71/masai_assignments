async function getData() {
  let d = await fetch(
    "https://api.imgur.com/3/gallery/hot/viral/1/month?showViral=true&mature=true&album_previews=true",
    {
      method: "GET",
      headers: { Authorization: "Client-ID 1fd2c328438be83" },
    }
  );
  let { data } = await d.json();

  // console.log(data);
  showData(data);
}

getData();

let parent = document.getElementById("content");

function showData(data) {
  data?.forEach((product) => {
    if (
      product?.images?.[0].link &&
      (product?.images?.[0].type == "image/jpeg" ||
        product?.images?.[0].type == "image/gif" ||
        product?.images?.[0].type == "image/png")
    ) {
      let div = document.createElement("div");
      div.classList.add("insideDiv");
      div.addEventListener("click", function () {
        secondData(product);
      });
      let img = document.createElement("img");
      img.src = product.images?.[0].link;
      // console.log(product.images[0].link);

      let p1 = document.createElement("p");
      p1.classList.add("title");
      p1.innerHTML = product.title;

      let d2 = document.createElement("div");
      d2.classList.add("bottomDiv");
      let p2 = document.createElement("p");
      p2.innerHTML = `🡅 ${product.ups} 🡇`;
      let p3 = document.createElement("p");
      p3.innerHTML = `<i class="far fa-comment-alt"></i> ${product.comment_count}`;
      let p4 = document.createElement("p");
      p4.innerHTML = `<i class="fas fa-eye"></i> ${Math.round(
        product.views / 1000
      )}k`;

      d2.append(p2, p3, p4);
      div.append(img, p1, d2);
      parent.append(div);
    }
  });
}

// move to top button
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}
// second page data

function secondData(data) {
  localStorage.setItem("data", JSON.stringify(data));

  window.location.assign("./second.html");
}
