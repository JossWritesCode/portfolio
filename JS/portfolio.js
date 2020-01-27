const portfolioData = [
  {
    title: "Read Refugee Stories",
    siteLink: "https://readrefugeestories.netlify.com",
    imageURL: "./IMG/refugee-stories.png",
    gitHubLink: "https://github.com/build-refugee-stories/refugee-stories-fe",
    librariesUsed: ["React"],
    date: "August 2019"
  },

  {
    title: "How's the Weather?",
    siteLink: "https://xenodochial-goldstine-c0481e.netlify.com/",
    gitHubLink: "https://github.com/Joscelyn1/weather-app",
    imageURL: "./IMG/hows-the-weather.png",
    librariesUsed: ["React", "Redux", "MetaWeather API"],
    date: "August 2019"
  },
  {
    title: "Random Encounter Generator",
    siteLink: "https://5e-encounters.netlify.com/",
    imageURL: "./IMG/random-encounter-generator.png",
    gitHubLink: "https://github.com/DuckEverlasting/Random-Character-Generator",
    librariesUsed: ["React", "Redux"],
    date: "June 2019"
  },
  {
    title: "Matching Card Game",
    siteLink: "https://joscelyn1.github.io/Matching-Card-Game/",
    imageURL: "./IMG/card-matching-game.png",
    gitHubLink: "https://github.com/Joscelyn1/Matching-Card-Game",
    librariesUsed: ["vanilla JS"],
    date: "October 2018"
  },
  {
    title: "Frogger Clone",
    siteLink: "https://joscelyn1.github.io/Frogger-Style-Game/",
    imageURL: "./IMG/frogger-clone.png",
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
    date: "June 2018"
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
      event.date
    )
  );
});

function createPortfolio(
  title,
  siteLink,
  imageURL,
  gitHubLink,
  librariesUsed,
  date
) {
  const project = document.createElement("div");
  project.classList.add("project");

  const imageWrapper = document.createElement("div");
  imageWrapper.classList.add("img-wrapper");
  project.appendChild(imageWrapper);

  const hoverText = document.createElement("div");
  hoverText.classList.add("project-hover");
  imageWrapper.appendChild(hoverText);
  hoverText.style.backgroundImage = `url(${imageURL})`;

  const projectTextHover = document.createElement("div");
  projectTextHover.classList.add("project-text-hover");
  hoverText.appendChild(projectTextHover);

  const projectTitle = document.createElement("h3");
  projectTitle.textContent = title;
  projectTextHover.appendChild(projectTitle);

  const listOfLibraries = document.createElement("ul");
  listOfLibraries.classList.add("list-of-libraries");
  for (let library of librariesUsed) {
    let liElement = document.createElement("li");
    liElement.textContent = library;
    listOfLibraries.appendChild(liElement);
  }

  projectTextHover.appendChild(listOfLibraries);

  const aTag = document.createElement("a");
  aTag.href = siteLink;
  projectTextHover.appendChild(aTag);

  const learnMoreButton = document.createElement("button");
  learnMoreButton.classList.add("btn");
  learnMoreButton.textContent = "Learn More";
  aTag.appendChild(learnMoreButton);

  return project;
}
