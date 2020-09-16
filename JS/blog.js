//https://dev.to/api/articles?username=joscelyn1

fetch("https://dev.to/api/articles?username=joscelyn1")
  .then(function (response) {
    // The API call was successful!
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(response);
    }
  })
  .then(function (data) {
    // This is the JSON from our response
    console.log(data);

    const blogs = document.querySelector(".all-blogs-container");

    data.forEach((event) => {
      blogs.appendChild(
        createBlogs(
          event.title,
          event.tags,
          event["social_image"],
          event.description,
          event["canonical_url"],
          event.user
        )
      );
    });

    function createBlogs(
      title,
      tags,
      socialImage,
      description,
      canonicalURL,
      user
    ) {
      const blog = document.createElement("div");
      project.classList.add("blog");

      //   const imageWrapper = document.createElement("div");
      //   imageWrapper.classList.add("img-wrapper");
      //   project.appendChild(imageWrapper);

      //   const hoverText = document.createElement("div");
      //   hoverText.classList.add("project-hover");
      //   imageWrapper.appendChild(hoverText);

      //   hoverText.style.backgroundImage = `url(${imageURL})`;

      //   const projectTextHover = document.createElement("div");
      //   projectTextHover.classList.add("project-text-hover");
      //   hoverText.appendChild(projectTextHover);

      const projectTitle = document.createElement("h3");
      projectTitle.textContent = title;

      projectTextHover.appendChild(projectTitle);

      const projectDate = document.createElement("h5");
      projectDate.textContent = date;
      projectTextHover.appendChild(projectDate);

      const projectDescription = document.createElement("p");
      projectDescription.textContent = description;
      projectTextHover.appendChild(projectDescription);

      //   const listOfLibraries = document.createElement("ul");
      //   listOfLibraries.classList.add("list-of-libraries");
      //   listOfLibraries.textContent = "Built with:";
      //   listOfLibraries.style.display = "flex";
      //   listOfLibraries.style.flexDirection = "row";
      //   listOfLibraries.style.alignItems = "center";

      //   for (let i = 0; i < librariesUsed.length; i++) {
      //     let liElement = document.createElement("li");

      //     if (librariesUsed.length > 1) {
      //       if (i === librariesUsed.length - 1) {
      //         liElement.textContent = librariesUsed[i];
      //       } else {
      //         liElement.textContent = librariesUsed[i] + ",";
      //       }
      //     } else {
      //       liElement.textContent = librariesUsed[i];
      //     }

      //     listOfLibraries.appendChild(liElement);
      //   }

      //   projectTextHover.appendChild(listOfLibraries);

      //   const buttonGroup = document.createElement("div");
      //   buttonGroup.classList.add("project-button-group");
      // //   projectTextHover.appendChild(buttonGroup);

      //   const siteATag = document.createElement("a");
      //   siteATag.href = siteLink;
      //   buttonGroup.appendChild(siteATag);

      //   const goToSiteButton = document.createElement("button");
      //   goToSiteButton.classList.add("project-btn");
      //   goToSiteButton.textContent = "Live Site";
      //   siteATag.appendChild(goToSiteButton);

      //   const gitHubATag = document.createElement("a");
      //   gitHubATag.href = gitHubLink;
      //   buttonGroup.appendChild(gitHubATag);

      //   const gitHubButton = document.createElement("button");
      //   gitHubButton.classList.add("project-btn");
      //   gitHubButton.textContent = "Source Code";
      //   gitHubATag.appendChild(gitHubButton);

      return blog;
    }
  })
  .catch(function (err) {
    // There was an error
    console.warn("Something went wrong.", err);
  });
