
# Blog Application with Content Management System (CMS):

Develop a blog application with a NextJS for users to view posts and a Hygraph CMS(GraphCMS) interface for authorized users to create, edit, and publish blog posts.


## Environment Variables

To run this project, you will need to add the following environment variables to your .env.local file after cloning the project and going to the project directory

`NEXT_PUBLIC_HYGRAPH_URL=https://api-ap-south-1.hygraph.com/v2/cluc7zdy5098v07weub3e9q0h/master`


## Installation instructions

Clone the project

```bash
  git clone https://github.com/Aniket-Pilankar/Blog-Application-CMS.git
```

Go to the project directory

```bash
  cd Blog-Application-CMS
```

Install dependencies

```bash
  npm install
```

Start Next.js in development mode (option 1)

```bash
  npm run dev
```

OR

Start Next.js in production mode (option 2)
```bash
  npm run build
  npm start
```



## Deployment

The project is already deployed on Vercel (Click below link)

[Live Project](https://blog-application-cms.vercel.app/)


## Screenshots

### Home page 
![Home Page](https://github.com/Aniket-Pilankar/Blog-Application-CMS/blob/main/public/assets/images/Screenshot%202024-03-30%20at%205.38.41%20AM.png)

### Category page 
![Category Page](https://github.com/Aniket-Pilankar/Blog-Application-CMS/blob/main/public/assets/images/Screenshot%202024-03-30%20at%205.39.02%20AM.png)

### Blog Details page 
![Blog Details Page](https://github.com/Aniket-Pilankar/Blog-Application-CMS/blob/main/public/assets/images/Screenshot%202024-03-30%20at%205.39.27%20AM.png)
![Blog Details Page](https://github.com/Aniket-Pilankar/Blog-Application-CMS/blob/main/public/assets/images/Screenshot%202024-03-30%20at%205.40.11%20AM.png)


### HygraphCMS (GraphCMS) page (create, edit, and publish blog)
![Hygraph(GraphCMS) Page](https://github.com/Aniket-Pilankar/Blog-Application-CMS/blob/main/public/assets/images/Screenshot%202024-03-30%20at%205.40.49%20AM.png)

### Home page (Mobile Responsive Page)
![Home Page](https://github.com/Aniket-Pilankar/Blog-Application-CMS/blob/main/public/assets/images/Screenshot%202024-03-30%20at%205.47.49%20AM.png)
![Home Page](https://github.com/Aniket-Pilankar/Blog-Application-CMS/blob/main/public/assets/images/Screenshot%202024-03-30%20at%205.48.01%20AM.png)

### Home page (Ipad Responsive Page)
![Home Page](https://github.com/Aniket-Pilankar/Blog-Application-CMS/blob/main/public/assets/images/Screenshot%202024-03-30%20at%205.48.27%20AM.png)
![Home Page](https://github.com/Aniket-Pilankar/Blog-Application-CMS/blob/main/public/assets/images/Screenshot%202024-03-30%20at%205.48.42%20AM.png)


## Functionality overview

1. **Functionality Overview:** Blog App CMS is a Next.js-based blog website, chosen for its ideal framework for creating blog websites with built-in pre-rendering for SEO optimization and faster site loading.

2. **Content Management:** Authorized users can create, edit, and publish blog posts using HygraphCMS. Users can view these published posts on the website.

3. **Responsive Design:** The Blog App CMS website is built using responsive design, ensuring compatibility with all screen sizes.

4. **Category Feature:** Users can read blogs from the homepage and can also filter blog posts by category (e.g., web development, music). Categories are added when an authorized user publishes a blog, and all available categories are listed on the Blog App CMS page.

5. **Blog Details Page:** Clicking on a blog post directs users to the Blog-details page, providing a detailed view of the blog post.

6. **Rich Text Editing:** Authorized users can format text to bold, italic, embed video iframes from YouTube, add code snippets, and tables in the blog posts.

7. **Efficient Data Fetching:** With GraphQL, you can fetch only the data you need for a particular view, reducing over-fetching and improving performance.

## Tech Stack

**Client:** NextJS (React framework), TailwindCSS, Graphql, graphql-request, flowbite-react

**Server:** HygraphCMS (GraphCMS)
