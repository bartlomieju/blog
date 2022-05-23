import blog from "http://localhost:4507/blog.tsx";

blog({
  title: "My blog",
  author: "An author",
  header: "This is my new blog",
  style: "body { padding: 32px 0; background-color: #f0f0f0; }",

  // If you want to set up Google Analytics, paste your GA key here.
  // gaKey: "UA-XXXXXXXX-X",

  // If you want to provide some redirections, you can specify them here,
  // pathname specified in a key will redirect to pathname in the value.
  // redirectMap: {
  //  "/hello_world.html": "/hello_world",
  // },
});
