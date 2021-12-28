const ramapi = require("ram-api");
const apiv = "v4"; //v2 and up are available ram api versions note versions
const apikey = "apikey"; //ask for a key by contacting support

//! note ram api has a 5 calls per 5 seconds

ramapi.apiversion(apiv); // outputs rather the api is outdated or not also this console logs for you

ramapi
	.apihug(apiv, apikey)
	.then(async (data) => {
		console.log(await data.data.url); // logs the url
	})
	.catch((err) => {
		console.log(err);
	});

ramapi
	.apigm(apiv, apikey)
	.then(async (data) => {
		console.log(data.url); //url
		console.log(data.text); //text
	})
	.catch((err) => {
		console.log(err);
	});

ramapi
	.apign(apiv, apikey)
	.then(async (data) => {
		console.log(data.url); //url
		console.log(data.text); //text
	})
	.catch((err) => {
		console.log(err);
	});

ramapi
	.apislap(apiv, apikey, "user1", "user2")
	.then(async (data) => {
		console.log(data.url); //url
		console.log(data.text); //texts (it puts this together so the user1 and user2 would be needed)
	})
	.catch((err) => {
		console.log(err);
	});

ramapi
	.apikiss(apiv, apikey)
	.then((data) => {
		console.log(data.url); // returns the url
	})
	.catch((err) => {
		console.log(err);
	});

ramapi
	.api8ball(apiv, apikey)
	.then((data) => {
		console.log(data.text); // text
	})
	.catch((err) => {
		console.log(err);
	});

ramapi
	.apihello(apiv, apikey)
	.then((data) => {
		console.log(data.text); //text
	})
	.catch((err) => {
		console.log(err);
	});

ramapi
	.apicuddle(apiv, apikey)
	.then((data) => {
		console.log(data.url); //url
	})
	.catch((err) => {
		console.log(err);
	});

ramapi
	.apitired(apiv, apikey)
	.then((data) => {
		console.log(data.url); //url
	})
	.catch((err) => {
		console.log(err);
	});

ramapi
	.apisick(apiv, apikey)
	.then((data) => {
		console.log(data.url); //url
	})
	.catch((err) => {
		console.log(err);
	});

ramapi
	.apimeme(apiv, apikey)
	.then((data) => {
		let url = data.url;
		let title = data.title;
		let author = data.author;
		let nsfw = data.nsfw;
		let postlink = data.postLink;
		console.log(`${url} \n ${title} \n ${author} \n ${nsfw} \n ${postlink}`);
	})
	.catch((err) => {
		console.log(err);
	});

ramapi
	.apicry(apiv, apikey)
	.then((data) => {
		console.log(data.url); //url
		console.log(data.text); //text
	})
	.catch((err) => {
		console.log(err);
	});

ramapi
	.apilol(apiv, apikey)
	.then((data) => {
		console.log(data.url); //url
	})
	.catch((err) => {
		console.log(err);
	});
