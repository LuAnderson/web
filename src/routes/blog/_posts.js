// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const posts = [
    {
        title: 'The first code challenge',
        slug: 'code-challenge',
        short: 'Make a note taking app! The first official Code Challenge provided by Code Together',
        authors: ['Like'],
        html: `
            <h4 class="font-weight-bold mt-4">What is it?</h4>
            <p>You'll have to create a program that makes it possible for a user to make sticky notes.</p>
            <h4 class="font-weight-bold mt-4">What things do you accept?</h4>
            <p>We want a thing we can easily run, in a virtual environment so a docker container could be a useful thing to include. Examples:</p>
            <ul>
              <li>Command Line Interface programs (CLI)</li>
              <li>Web applications</li>
              <li>Compiled Windows Applications (EXE)</li>
              <li>Android Applications (APK)</li>
              <li>Docker, docker, docker.</li>
              <li>Anything which is cool :D You must also provide a way for us to compile it ourselves, so be sure to write a step-by-step tutorial on how to do that.</li>
            </ul>
            <p>If you are gonna make a web application, or something else, with an API. Please be kind to host it for us so we can interact with it as well, this will speed up the checking process as well.</p>
            <h4 class="font-weight-bold mt-4">What programming languages?</h4>
            <p>You can use whatever language you prefer to use for the project. If possible, use a linter for your language to keep everything organized.</p>
            <h4 class="font-weight-bold mt-4">How do I submit the code?</h4>
            <p>You can simply fork this repository and push your code to it, after you've made the program drop it in our Discord server in the right channel: <a class="text-primary" href="https://together.codes/discord">Discord</a></p>
            <h4 class="font-weight-bold mt-4">Sponsor</h4>
            <p>This event was sponsored by <a class="text-primary" href="http://v.lngzl.nl/fallen">fallen.host</a>. They'll sponsor a free VPS to the winners (more information in our Discord server).</p>
        `
    }
];

posts.forEach(post => {
    post.html = post.html.replace(/^\t{3}/gm, '');
});

export default posts;
