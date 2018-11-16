I'll be filling this out over the next couple of weeks. In the meantime, if you're unsure about anything, open an issue and I'll add it the answer to this document.

## Requirements
I've built this using Yarn. As such, you'll need to have yarn installed on your computer.
This will also only currently work with Linux/MacOS based systems. I'll sort out the Windows bit soon.

## Configuration
1. Copy the plugin into your plugins folder.
2. Activate the plugin.
3. Copy the files `from theme/your-theme/` into your theme folder.
4. On line 16 of `webpack.mix.js` configure where your source Sass file is and where you want your CSS to be output. If you use Less, simply change `mix.sass` to `mix.less` and point them at your files.
5. On line 25, do the same as above, but pointing to your JS files. I'd strongly recommend using require to bundle your JS files other through a single file to get the biggest advantage of webpack.

### BrowserSync
You can use browserSync out of the box. I've commented it out by default.

1. On line 28, change the proxy to the URL you access your site through.
2. Line 40 also has a parameter called tunnel. By default, this is turned off. You can either set it to true and it will give you a random URL to access your site through, or pass it a string and if it is available, it will set that as the preview domain.

## Running it
Right now, I'd only run the dev task. I need to spend some time sorting out how to get the PurgeCSS function to work with WordPress. This currently follows my configuration for Statamic websites.

To run Mix, you can either run:

`yarn dev` – this will run it one time.
`yarn watch` – this will keep it running and watch for any file changes.
