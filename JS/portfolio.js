const portfolioData = [
  {
    title: "Read Refugee Stories",
    siteLink: "https://readrefugeestories.netlify.com",
    imageURL: "./IMG/refugee-stories.png",
    description: "A platform for displaced people to share their stories.",
    gitHubLink: "https://github.com/build-refugee-stories/refugee-stories-fe",
    librariesUsed: ["React"],
    date: "August 2019"
  },

  {
    title: "How's the Weather?",
    siteLink: "https://xenodochial-goldstine-c0481e.netlify.com/",
    gitHubLink: "https://github.com/Joscelyn1/weather-app",
    imageURL: "./IMG/hows-the-weather.png",
    description: "Find out the weather in any major city!",
    librariesUsed: ["React", "Redux", "MetaWeather API"],
    date: "August 2019"
  },
  {
    title: "Random Encounter Generator",
    siteLink: "https://5e-encounters.netlify.com/",
    imageURL: "./IMG/random-encounter-generator.png",
    description: "A toolkit to make dungeon masters' lives easier!",
    gitHubLink: "https://github.com/DuckEverlasting/Random-Character-Generator",
    librariesUsed: ["React", "Redux"],
    date: "June 2019"
  },
  {
    title: "Matching Card Game",
    siteLink: "https://joscelyn1.github.io/Matching-Card-Game/",
    imageURL: "./IMG/card-matching-game.png",
    description: "This classic card matching game is great fun.",
    gitHubLink: "https://github.com/Joscelyn1/Matching-Card-Game",
    librariesUsed: ["vanilla JS"],
    date: "October 2018"
  },
  {
    title: "Frogger Clone",
    siteLink: "https://joscelyn1.github.io/Frogger-Style-Game/",
    imageURL: "./IMG/frogger-clone.png",
    description: "This game resembles the classic arcade game Frogger.",
    gitHubLink: "https://github.com/Joscelyn1/Frogger-Style-Game",
    librariesUsed: ["vanilla JS"],
    date: "June 2018"
  },
  {
    title: "Pixel Art Maker",
    siteLink: "https://joscelyn1.github.io/Pixel-Art-Maker/",
    imageURL: "./IMG/pixel-art-maker.png",
    gitHubLink: "https://github.com/Joscelyn1/Pixel-Art-Maker",
    librariesUsed: ["vanilla JS"],
    date: "June 2018",
    description: "Create pixel art with this application"
  }
];

const projects = document.querySelector(".all-projects-container");

portfolioData.forEach(event => {
  projects.appendChild(
    createPortfolio(
      event.title,
      event.siteLink,
      event.imageURL,
      event.gitHubLink,
      event.librariesUsed,
      event.date,
      event.description
    )
  );
});

function createPortfolio(
  title,
  siteLink,
  imageURL,
  gitHubLink,
  librariesUsed,
  date,
  description
) {
  const project = document.createElement("div");
  project.classList.add("project");

  const imageWrapper = document.createElement("div");
  imageWrapper.classList.add("img-wrapper");
  project.appendChild(imageWrapper);

  const hoverText = document.createElement("div");
  hoverText.classList.add("project-hover");
  imageWrapper.appendChild(hoverText);
  hoverText.style.width = "350px";
  hoverText.style.margin = "1rem";
  hoverText.style.padding = "1rem";
  hoverText.style.backgroundImage = `url(${imageURL})`;

  const projectTextHover = document.createElement("div");
  projectTextHover.classList.add("project-text-hover");
  hoverText.appendChild(projectTextHover);

  const projectTitle = document.createElement("h3");
  projectTitle.textContent = title;
  projectTextHover.appendChild(projectTitle);

  const projectDate = document.createElement("h5");
  projectDate.textContent = date;
  projectTextHover.appendChild(projectDate);

  const projectDescription = document.createElement("p");
  projectDescription.textContent = description;
  projectTextHover.appendChild(projectDescription);

  const listOfLibraries = document.createElement("ul");
  listOfLibraries.classList.add("list-of-libraries");
  listOfLibraries.textContent = "Built with:";
  listOfLibraries.style.display = "flex";
  listOfLibraries.style.flexDirection = "row";
  listOfLibraries.style.alignItems = "center";

  for (let i = 0; i < librariesUsed.length; i++) {
    let liElement = document.createElement("li");

    if (librariesUsed.length > 1) {
      if (i === librariesUsed.length - 1) {
        liElement.textContent = librariesUsed[i];
      } else {
        liElement.textContent = librariesUsed[i] + " | ";
      }
    } else {
      liElement.textContent = librariesUsed[i];
    }

    listOfLibraries.appendChild(liElement);
  }

  projectTextHover.appendChild(listOfLibraries);

  const buttonGroup = document.createElement("div");
  buttonGroup.classList.add("project-button-group");
  projectTextHover.appendChild(buttonGroup);

  const siteATag = document.createElement("a");
  siteATag.href = siteLink;
  buttonGroup.appendChild(siteATag);

  const goToSiteButton = document.createElement("button");
  goToSiteButton.classList.add("project-btn");
  goToSiteButton.textContent = "Live Site";
  siteATag.appendChild(goToSiteButton);

  const gitHubATag = document.createElement("a");
  gitHubATag.href = gitHubLink;
  buttonGroup.appendChild(gitHubATag);

  const gitHubButton = document.createElement("button");
  gitHubButton.classList.add("project-btn");
  gitHubButton.textContent = "Source Code";
  gitHubATag.appendChild(gitHubButton);

  return project;
}
