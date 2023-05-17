const username = document.querySelector("#username");
const btnSearch = document.querySelector("#btn-search");
const nameGit = document.querySelector("#name");
const login = document.querySelector("#login");
const avatar = document.querySelector("#avatar");
const date = document.querySelector("#date");

btnSearch.addEventListener("click", async (e) => {
  if (!username.value) return;
  const response = await fetch(
    `https://api.github.com/users/${username.value}`
  );
  const data = await response.json();
  username.value = "";
  username.focus();
  console.log(data);

  nameGit.innerHTML = `<h3>${data.name}</h3>`;
  login.innerHTML = `<h3>@${data.login}</h3>`;
  avatar.src = data.avatar_url;
  const initDate = new Date(data.created_at);
  date.textContent = initDate.toDateString();
});
