# augmedix-boilerplate

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
 <meta name="viewport" content="width=device-width, initial-scale=1.0">

 <link rel="stylesheet" href="css/style.css">
</head>
<body class="home-page">
    <div class="container">
    <header>
        <h1 class="primary-header">
            This is an Augmedix boilerplate Template
        </h1>
    </header>
    <main>
       <p> Hi there, this is a simple tutorial for SASS and how to install and run sass in your computer using VS code or npm package manager.I am going through step by step to guide you the ultimate succession of installing sass and run it for your Front end Framework. let's go -->'</p>
       <h4>Steps:</h4>

 <ul>
 <li>create a folder <code class="background">/dist/src/whatever you can name it.</code></li>
<li>create another sub folder name as sass/scss, carefull with the spelling :)</li>
<li>create a file name <code class="background">style.scss</code></li>
<li>This structure follows the sass 7-1 architacture</li>
<li>open your project with VS code editor</li>
<li>You have to install node for your windows/linux/macOS to install sass </li>
<li>open new terminal and run  this command <code class="background">npm install -g sass</code> It will install sass globally</li>
<li>or if you want to use an extension on VS code "live sass compiler" is an easy way to watch the sass for you. </li>
<li>after installing sass in your root directory run the command <code class="background">sass --watch dist/src/style.scss dist/src/css/style.css </code> and click enter</li>
</ul>
and That's it. node will watch autometically what changes you made in your scss file. It will atumetically compile the scss to css file.

</main>

<footer class="copyright">&copy;copyright</footer>
    </div>
</body>
</html>
