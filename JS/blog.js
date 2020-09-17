//https://dev.to/api/articles?username=joscelyn1

fetch('https://dev.to/api/articles?username=joscelyn1')
  .then(function (response) {
    // The API call was successful!
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject(response);
    }
  })
  .then(function (data) {
    const blogs = document.querySelector('.all-blogs-container');

    data.forEach((event) => {
      blogs.appendChild(
        createBlogs(
          event.title,
          event['tag_list'],
          event['social_image'],
          event.description,
          event.url
        )
      );
    });

    function createBlogs(title, tags, socialImage, description, url) {
      //     <div class="blog-container">
      //     <div class="blog">
      //       <h3 class="heading-tertiary">Post Name</h3>
      //       <img src="https://via.placeholder.com/400x240" />
      //     </div>
      //   </div>

      const blogContainer = document.createElement('a');
      blogContainer.href = url;
      blogContainer.classList.add('blog-container');
      const blog = document.createElement('div');
      blog.classList.add('blog');
      blogContainer.appendChild(blog);

      const blogImage = document.createElement('img');
      blogImage.src = socialImage;
      blog.appendChild(blogImage);

      const blogTitle = document.createElement('h3');
      blogTitle.textContent = title;
      blog.appendChild(blogTitle);

      const blogDescription = document.createElement('p');
      blogDescription.textContent = description;
      blog.appendChild(blogDescription);

      const devImage = document.createElement('img');
      devImage.src = './IMG/devlogo.png';
      devImage.alt = 'dev.to';
      devImage.classList.add('dev-image');
      blog.appendChild(devImage);

      const blogTags = document.createElement('ul');
      blogTags.classList.add('blog-tags');
      for (let tag of tags) {
        const blogTag = document.createElement('li');
        blogTag.classList.add('blog-tag');
        blogTag.textContent = `#${tag}`;
        blogTags.appendChild(blogTag);
      }
      blog.appendChild(blogTags);

      return blogContainer;
    }
  })
  .catch(function (err) {
    // There was an error
    console.warn('Something went wrong.', err);
  });
