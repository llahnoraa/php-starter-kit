# PHP Starter Kit
Those are what I use often to build my projects and clients without needing CMS. What's in the package are basic responsive website template with PHP, Bourbon and Neat.

# Docs
 * `header.php` contains all of the repeatable HTML that belongs in the header, includng CDN modernizr and Google Analytic
 * `index.php` main page which calls in the header and footer
 * `footer.php` contains all of the repeatable HTML that belongs in the footer, including CDN jQuery
 * `scss` folder includes bourbon, neat and custom folders (normalize, etc.) that compiled to `css` folder.
 * `apple-touch-icon.psd` HTML5 favicon photoshop template
 
# How to use it
If you're already familiar with compilers like [CodeKit](http://incident57.com/codekit/) or [Koala](http://koala-app.com/) then you're on the right track. If not, check them out. To compile, select the `base.scss` file and set the output path to `css/base.css`. I used [MAMP Pro](http://www.mamp.info/en/mamp-pro/) that allowed me to test and modify PHP files locally. I used `apple-touch-icon.psd` to update the favicon only once. Pretty nifty, eh?

### Credits
 * [Bourbon](http://bourbon.io) - a simple and lightweight mixin library for Sass
 * [Neat](http://neat.bourbon.io) - a lightweight semantic grid framework for Sass and Bourbon
 * [MAMP Pro](http://www.mamp.info/en/mamp-pro/) - test/edit PHP files locally
 * [Simple Favicon](https://github.com/llahnoraa/favicon) - by Aaron Hall
 * [Sublime Text 3](http://www.sublimetext.com/) - the awesome text editor I already fall in love with
 * [Mou](http://mouapp.com) - the missing Markdown editor for web developers
 
### License
PHP Starter Kit is released under a [Creative Commons Attribution-Share Alike 3.0 Unported License](http://creativecommons.org/licenses/by-sa/3.0/). This means you can copy, distribute, transmit and adapt the work to your own personal and commercial projects.