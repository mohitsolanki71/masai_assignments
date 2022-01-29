let oneData = document.getElementById("secondPage");

function getdata() {
  let data = JSON.parse(localStorage.getItem("data"));
  console.log("second Page", data);

  let title = document.createElement("p");
  title.classList.add("newTitle");
  title.innerHTML = data.title;

  let userDetail = document.createElement("div");
  userDetail.classList.add("userDetail");

  let div1 = document.createElement("div");
  div1.classList.add("userIcon");
  div1.innerHTML = data.account_url[0];

  let div2 = document.createElement("div");
  div2.classList.add("div2");
  let username = document.createElement("p");
  username.classList.add("username");
  username.innerHTML = data.account_url;
  let view = document.createElement("p");
  view.classList.add("view");
  view.innerHTML = `${data.views} Views`;

  let imgdiv = document.createElement("div");
  imgdiv.classList.add("imgDiv");

  let img = document.createElement("img");
  img.src = data.images?.[0].link;

  div2.append(username, view);

  imgdiv.append(img);

  userDetail.append(div1, div2);

  oneData.append(title, userDetail, imgdiv);
}
getdata();
