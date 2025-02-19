const baseUrl = "https://fasttrackvisa.com";
import Curr_list from "../countyExList_in.json";

function generateSiteMap(posts, pageBlog1, pageBlog2, pageBlog3) {
  //  console.log(Curr_list)
  return `<?xml version="1.0" encoding="UTF-8"?>
     <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">       
       
         ${Curr_list?.map((country) => {
           return ` <url>
                    <loc>${`${baseUrl}/${country}`}</loc>
                    <lastmod> ${new Date().toISOString()}</lastmod>
                    <priority>0.6</priority>
            </url>`;
         }).join("")}
          ${Curr_list?.map((country) => {
            return ` <url>
                    <loc>${`${baseUrl}/${country}/about-us`}</loc>
                    <lastmod> ${new Date().toISOString()}</lastmod>
                    <priority>0.6</priority>
            </url>`;
          }).join("")}
           ${Curr_list?.map((country) => {
             return ` <url>
                    <loc>${`${baseUrl}/${country}/contact-us`}</loc>
                    <lastmod> ${new Date().toISOString()}</lastmod>
                    <priority>0.6</priority>
            </url>`;
           }).join("")}
          ${Curr_list?.map((country) => {
            return ` <url>
                    <loc>${`${baseUrl}/${country}/career`}</loc>
                    <lastmod> ${new Date().toISOString()}</lastmod>
                    <priority>0.6</priority>
            </url>`;
          }).join("")}
         ${Curr_list?.map((country) => {
           return ` <url>
                    <loc>${`${baseUrl}/${country}/terms-and-conditions`}</loc>
                    <lastmod> ${new Date().toISOString()}</lastmod>
                    <priority>0.6</priority>
            </url>`;
         }).join("")}
          ${Curr_list?.map((country) => {
            return ` <url>
                    <loc>${`${baseUrl}/${country}/privacy-policy`}</loc>
                    <lastmod> ${new Date().toISOString()}</lastmod>
                    <priority>0.6</priority>
            </url>`;
          }).join("")}
           ${Curr_list?.map((country) => {
             return ` <url>
                    <loc>${`${baseUrl}/${country}/refund-and-cancellation`}</loc>
                    <lastmod> ${new Date().toISOString()}</lastmod>
                    <priority>0.6</priority>
            </url>`;
           }).join("")}
           ${Curr_list?.map((country) => {
             return ` <url>
                    <loc>${`${baseUrl}/${country}/disclaimer`}</loc>
                    <lastmod> ${new Date().toISOString()}</lastmod>
                    <priority>0.6</priority>
            </url>`;
           }).join("")}
     
       ${posts.homelist
         ?.map((home) => {
           return ` <url>
             <loc>${`${baseUrl}/${home.urllink}`}</loc>
             <lastmod> ${new Date().toISOString()}</lastmod>
             <priority>0.6</priority>
         </url>`;
         })
         .join("")};
         
           
            ${Curr_list?.map((country) => {
              return ` <url>
                    <loc>${`${baseUrl}/${country}/blog`}</loc>
                    <lastmod> ${new Date().toISOString()}</lastmod>
                    <priority>0.6</priority>
               </url>`;
            }).join("")}
            ${Curr_list?.map((country) => {
              return posts.homelist.map((home) => {
                return `<url>
                            <loc>${`${baseUrl}/${country}/${home.urllink}`}</loc>
                            <lastmod> ${new Date().toISOString()}</lastmod>
                            <priority>0.6</priority>
                        </url>`;
              });
            }).join("")}

           ${Curr_list?.map((country) => {
             return posts.blog_arr.map((blog) => {
               return `<url>
                            <loc>${`${baseUrl}/blog/${country}/${blog.title}`}</loc>
                            <lastmod> ${new Date().toISOString()}</lastmod>
                            <priority>0.6</priority>
                        </url>`;
             });
           }).join("")}
            ${Curr_list?.map((country) => {
              return pageBlog1.blog_arr?.map((blog) => {
                return `<url>
                        <loc>${`${baseUrl}/${country}/blog/${blog.blogtitle}`}</loc>
                        <lastmod> ${new Date().toISOString()}</lastmod>
                        <priority>0.6</priority>
                    </url>`;
              });
            }).join("")}
        ${Curr_list?.map((country) => {
          return pageBlog2.blog_arr?.map((blog2) => {
            return `<url>
                        <loc>${`${baseUrl}/${country}/blog/${blog2.blogtitle}`}</loc>
                        <lastmod> ${new Date().toISOString()}</lastmod>
                        <priority>0.6</priority>
                    </url>`;
          });
        }).join("")}
         ${Curr_list?.map((country) => {
           return pageBlog3.blog_arr?.map((blog3) => {
             return `<url>
                        <loc>${`${baseUrl}/${country}/blog/${blog3.blogtitle}`}</loc>
                        <lastmod> ${new Date().toISOString()}</lastmod>
                        <priority>0.6</priority>
                    </url>`;
           });
         }).join("")}
     </urlset>
   `;
}

function SiteMap() {
  // getServerSideProps will do the heavy lifting
}

export async function getServerSideProps({ res }) {
  const homedata = await fetch(
    `https://cms.fasttrackvisa.com/api/en-in/homelisting`
  );
  const posts = await homedata.json();
  const blogPage1 = await fetch(
    "https://cms.fasttrackvisa.com/api/blogs?page=1"
  );
  const blogPage2 = await fetch(
    "https://cms.fasttrackvisa.com/api/blogs?page=2"
  );
  const blogPage3 = await fetch(
    "https://cms.fasttrackvisa.com/api/blogs?page=3"
  );
  const pageBlog1 = await blogPage1.json();
  const pageBlog2 = await blogPage2.json();
  const pageBlog3 = await blogPage3.json();

  const sitemap = generateSiteMap(posts, pageBlog1, pageBlog2, pageBlog3);

  res.setHeader("Content-Type", "text/xml");
  // we send the XML to the browser
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
