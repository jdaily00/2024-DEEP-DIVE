function GitHubApi() {
  this.start_url = "https://api.github.com/users/";
}

// userInfo 메서드를 프로토타입에 추가
GitHubApi.prototype.userInfo = async function (username) {
  const getProfile = await fetch(`${this.start_url}${username}`);
  const profile = await getProfile.json();

  const getRepos = await fetch(`${this.start_url}${username}/repos`);
  const repos = await getRepos.json();

  return { profile, repos };
};

function Ui() {}

// `show_profile` 메서드 추가
Ui.prototype.show_profile = function (user) {
  const profile_HTML = `
        <section class= "profile-section">
            <img id="user-Img" src="${user.avatar_url}">
            <br>
            <a href="${user.html_url}" id="user-URL">View Profile</a>
        </section>
        <sidebar class="profile-top">
            <p id ="profile-top-1">Public Repos: ${user.public_repos}</p>
            <p id ="profile-top-2">Public Gists: ${user.public_gists}</p>
            <p id ="profile-top-3">Followers: ${user.followers}</p>
            <p id ="profile-top-4">Following: ${user.following}</p>
        </sidebar>
        <sidebar class="profile-down">
            <li>Company: ${user.company}</li>
            <li>Website/Blog: ${user.blog}</li>
            <li>Location: ${user.location}</li>
            <li>Member Since: ${user.created_at}</li>
        </sidebar>
    `;
  document.getElementById("profile-1").innerHTML = profile_HTML;
};

// `show_repos` 메서드 추가
Ui.prototype.show_repos = function (repos) {
  let repos_HTML = "<h3>Latest Repos</h3>";
  repos.forEach((repo) => {
    repos_HTML += `
            <div class="repos">
                <a href = "${repo.html_url}">${repo.name}</a>
                <p id = "star">Stars: ${repo.stargazers_count}</p>
                <p id = "watcher">Watchers: ${repo.watchers_count}</p>
                <p id = "fork">Forks: ${repo.forks_count}</p>
                <br>
            </div>
        `;
  });
  document.getElementById("profile-2").innerHTML += repos_HTML;
};

const gitHubApi = new GitHubApi();
const ui = new Ui();

const searchButton = document.getElementById("search-btn");

document.getElementById("search-btn").addEventListener("click", () => {
  const userText = document.getElementById("user-search").value;

  if (userText === "") {
    alert("GitHub 사용자 이름을 입력하세요.");
    return;
  }

  gitHubApi.userInfo(userText).then((data) => {
    ui.show_profile(data.profile);
    ui.show_repos(data.repos);
    searchButton.style.display = "none";
  });
});
