module.exports = {
	/*
  ** Headers of the page
  */
	head: {
		title: "ennis-coke-with-food",
		meta: [
			{ charset: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{
				hid: "description",
				name: "description",
				content: "Nuxt.js project"
			}
		],
		script: [
			// {
			// 	src:
			// 		"https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js"
			// },
			{
				src:
					"https://cdnjs.cloudflare.com/ajax/libs/is_js/0.9.0/is.min.js"
			}
		],

		link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
	},
	/*
    ** Customize the progress bar color
    */
	loading: { color: "#3B8070" },
	/**
	 * 禁用加載進度條
	 */
	loading: false,
	/*
    ** Build configuration
    */
	build: {
		vendor: ["~/assets/js/vendor/jquery-3.2.1.min.js"],
		/*
    ** Run ESLint on save
    */
		extend(config, { isDev, isClient }) {
			if (isDev && isClient) {
				config.module.rules.push({
					enforce: "pre",
					test: /\.(js|vue)$/,
					loader: "eslint-loader",
					exclude: /(node_modules)/
				});
			}
		}
	}
};
