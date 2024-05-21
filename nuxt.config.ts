const axios = require('axios')

// async function fetchDynamicRoutes() {
//   const response = await axios.get('https://server.machiddle.com/api/products');
//   const products = response.data.data;

//   // Generate dynamic route URLs
//   const dynamicRoutes = products.map(product => `/products/${product.sid}`);

//   return dynamicRoutes;
// }


export default defineNuxtConfig({
  devtools: { enabled: true },

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  site: {
    url: 'http://app.machiddle.com'
  },
  css: ['~/assets/css/main.css'],
  modules: ["@nuxt/ui", "nuxt-icon", '@nuxtjs/sitemap'],
  axios: {
    baseURL: process.env.BASE_URL || 'https://server.machiddle.com/api',
  },
  // sitemap: {
  //   hostname: 'http://app.machiddle.com', // Update with your actual hostname
  //   routes: async () => {
  //     console.log('Attempting to fetch products from API...');
  //     try {
  //       const response = await axios.get('https://server.machiddle.com/api/products');
  //       console.log('API response:', response.data);
  //       return response.data.data.data.map(product => `/products/${product.sid}`);
  //     } catch (error) {
  //       console.error('Error fetching products from API:', error);
  //       return [];
  //     }
  //   },
  // },
  sitemap: {
    path: '/sitemap.xml',
    hostname: process.env.BASE_URL,
    cacheTime: 1000 * 60 * 15,
    gzip: true,
    generate: true, // Set to true to generate the sitemap
    exclude: [], // Exclude any routes if needed
    routes: async () => {
      let apiUrl = 'https://server.machiddle.com/api/products'; // API url
      const { data } = await axios.get(apiUrl);
      const products = data.data.data.data; // Assuming the API response contains a 'products' array
      const productRoutes = products.map(product => `/product/${product.id}`);
      return productRoutes;
    }
  },

  // sitemap: {
  //   async routes() {
  //     const dynamicRoutes = await fetchDynamicRoutes();
  //     const staticRoutes = [
  //       // Add your static routes here
  //     ];

  //     return staticRoutes.concat(dynamicRoutes);
  //   }
  // }
  ssr: true,
});
