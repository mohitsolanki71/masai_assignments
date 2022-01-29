let container = document.getElementById("searchData");
let timerId;

async function searchData(input) {
  try {
    let res = await fetch(
      `https://api.imgur.com/3/gallery/t/${input}/top/all`,
      {
        method: "GET",
        headers: { Authorization: "Client-ID 1fd2c328438be83" },
      }
    );
    let data = await res.json();

    // console.log(input.length);

    if (input.length > 0) {
      container.style.display = "block";
    } else {
      container.style.display = "none";
    }

    return data;
  } catch (e) {
    console.log(e);
  }
}

function appendData(inputs) {
  if (inputs === undefined) {
    return false;
  }

  container.innerHTML = null;
  // console.log("input", inputs);
  inputs?.data?.items?.forEach((input) => {
    let div = document.createElement("div");

    let title = document.createElement("p");
    title.addEventListener("click", function () {
      sendSearchData(input);
    });
    title.classList.add("search-title");

    title.innerHTML = input.title;
    // console.log("title", title);

    div.append(title);
    container.append(div);
  });
}

async function main() {
  let enterdInput = document.getElementById("search").value;

  let res = await searchData(enterdInput);

  console.log("res", res);
  appendData(res);
}

function debounce(func, delay) {
  if (timerId) {
    clearTimeout(timerId);
  }

  timerId = setTimeout(function () {
    func();
  }, delay);
}

function sendSearchData(data) {
  localStorage.setItem("data", JSON.stringify(data));

  window.location.assign("./second.html");
}
