# augmedix-boilerplate
<!DOCTYPE html>

<html lang="en">
  
<head>
  
<meta charset="UTF-8">

<meta http-equiv="X-UA-Compatible" content="IE=edge">

<meta name="viewport" content="width=device-width, initial-scale=1.0">

<link rel="stylesheet" type="text/css" href="../src/css/style.css">

</head>

<body class="home-page">
  
<div class="container">
  
<header>
  
<h1 class="primary-header">
  
This is an Augmedix boilerplate Template
</h1>
</header>
<main>
<p> Hi there, this is a simple tutorial for SASS and how to install and run sass in your computer using  gulp.I am going through step by step to guide you the ultimate succession of installing sass and run it for your Front end Framework. let's go --></p>
  
<h4>Steps:</h4>

<ul>
<li>crete a folder <code class="background">/dist/src/whatever you can name it.</code></li>
  
<li>create another sub folder name as sass/scss, carefull with the spelling :)</li>

<li>crete a file name <code class="background">style.scss</code></li>

<li>This structure follows the sass 7-1 architacture</li>

<li>open your project with VS code editor</li>

<li>You have to install node for your windows/linux/macOS to install sass </li>

<li>open new terminal and run  this command <code class="background">npm install gulp -g</code> It will install gulp globally</li>

<li>or if you want to use an extension on VS code "live sass compiler" is an easy way to watch the sass for you. </li>

<li>after installing gulp in your computer, run the command <code class="background">npm init </code> and click enter to create a package.json file</li>

<li>next you have to run this command <code>npm install --save-dev gulp gulp-sass browser-sync </code>for install gulp,gulp-sass and browser-sync in the root directory of your project </li>

<li>Now go to your root directory and create a file name gulpfile.js</li>

<li>copy and paste this script in gulpfile.js
  
<pre>
<code class="code">
const gulp = require('gulp');

const sass = require('gulp-sass');

const browserSync = require('browser-sync').create();

//function for Compiling SCSS to CSS

function compileCss(){

//Searching for SCSS file
return gulp.src('./src/scss/**/*.scss')

//compile scss file to css
.pipe(sass())

//Destination folder
.pipe(gulp.dest('./css'));
}

exports.compileCss = compileCss;

</code>
</pre>
</li>
<li>Again open terminal and test if the gulp code working or not. to make it happen
run this command  <code>gulp compileCss</code>(in my case)
</li>

<li>For browser sync, modify the compileCss() function. Add this line of code
<code>.pipe(browserSync.stream())</code>
</li>

<li>
Initialize the browserSync for letting gulp automate the refresh or update of the server.Here we create a function called watch()
<pre>
   <code>
        function watch(){
        
          browserSync.init({
          
             server:{
             
                 baseDir:'./'
                 
                 }
                     });
                     }
</code>
</pre>

</li>

<li>
After that call the watch function like this for scss,browserSync and js to watch
<pre>
<code>
gulp.watch('./src/scss/**/*.scss', compileCss);

gulp.watch('./*.html').on('change', browserSync.reload);

gulp.watch('./js/**/*.js').on('change', browserSync.reload);

</code>
</pre>
</li>

<li>
exports those two functions 
<pre>
<code>

exports.compileCss = compileCss;

exports.watch=watch;

</code>
</pre>

</li>
<li>  
  
<div class="wrap">Now wrap up the full gulp code for css compiler is like below</div>

<pre>
<code>

const gulp = require('gulp');

const sass = require('gulp-sass');

const browserSync = require('browser-sync').create();

function compileCss(){

//path of the scss file

return gulp.src('./src/scss/**/*.scss')

//pass that file  through sass compiler
.pipe(sass())

//destination path for compiled css
.pipe(gulp.dest('./src/css'))

//strem changes to all browser
.pipe(browserSync.stream());
}
//watch function for chaning things in our files 

function watch(){

browserSync.init({

server:{

baseDir:'./'
}

});
gulp.watch('./src/scss/**/*.scss', compileCss);

gulp.watch('./*.html').on('change', browserSync.reload);

gulp.watch('./js/**/*.js').on('change', browserSync.reload);

}

exports.compileCss = compileCss;

exports.watch=watch;

</code>
</pre>
</li> 

<li>
lastly run <code>gulp watch</code> command  to watch and sync your changes/updates instantly.

</li>
</ul>
</main>
</div>
</body>
</html>
