//https://dev.to/api/articles?username=joscelyn1

var myHeaders = new Headers();
myHeaders.append('pragma', 'no-cache');
myHeaders.append('cache-control', 'no-cache');

var myInit = {
  method: 'GET',
  headers: myHeaders,
};

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
    console.log(data, 'data');
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

      const blogContainer = document.createElement('div');
      blogContainer.classList.add('blog-container');

      const blog = document.createElement('div');
      blog.classList.add('blog');
      blogContainer.appendChild(blog);

      const blogImageWrapper = document.createElement('a');
      blogImageWrapper.href = url;
      blog.appendChild(blogImageWrapper);

      const blogImage = document.createElement('img');
      blogImage.src = socialImage;
      blogImageWrapper.appendChild(blogImage);

      const blogTitleWrapper = document.createElement('a');
      blogTitleWrapper.href = url;
      blog.appendChild(blogTitleWrapper);

      const blogTitle = document.createElement('h3');
      blogTitle.textContent = title;
      blogTitleWrapper.appendChild(blogTitle);

      const blogDescription = document.createElement('p');
      blogDescription.textContent = description;
      blog.appendChild(blogDescription);

      const devImageWrapper = document.createElement('a');
      devImageWrapper.href = 'https://dev.to/joscelyn1';
      blog.appendChild(devImageWrapper);

      const devImage = document.createElement('img');
      devImage.src = './IMG/devlogo.png';
      devImage.alt = 'dev.to';
      devImage.classList.add('dev-image');
      devImageWrapper.appendChild(devImage);

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
