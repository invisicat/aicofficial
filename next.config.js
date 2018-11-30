module.exports = {
  exportPathMap: function() {
    return {
      "/": { page: "/" },
      "/_error": { page: "/err" },
      "/about": { page: "/about" },
      "/p/hello-nextjs": { page: "/post", query: { title: "Hello Next.js" } },
      "/p/learn-nextjs": {
        page: "/post",
        query: { title: "Learn Next.js is awesome" }
      },
      "/p/deploy-nextjs": {
        page: "/post",
        query: { title: "Deploy apps with Zeit" }
      },
      "/p/oofer-gang": {
        page: "/post",
        query: { title: "OOF", text: "Wassup bruh" }
      },
      "/p/standard-html": {
        page: "/post",
        query: {
          title: "The Standard HTML.",
          text:
            "Standard HTML text is boring asf. Dont bother using it without javascript, jQUERY, Node, CSS etc. Trust me..."
        }
      },
      "/p/secret36753720173-26262662180874": {
        page: "/post",
        query: {
          title: "Secret 69",
          text: "Secret!"
        }
      }
    };
  }
};
