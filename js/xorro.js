document.querySelector('.menu').addEventListener('click', function() {
    this.classList.toggle('menuOpen');
    // var mainWindow = document.querySelector('.mainWindow').classList;
    var iframeWindow = document.querySelector('.iframeWindow').classList;
    var waybar = document.querySelector('.waybar').classList;
    var fullMenu = document.querySelector('.fullMenu').classList;
    var body = document.body.classList;
  
    if (this.classList.contains('menuOpen')) {
      // mainWindow.add('menuOpen-mainWindow');
      iframeWindow.add('menuOpen-iframeWindow');
      waybar.add('menuOpen-waybar');
      fullMenu.add('menuOpen-fullMenu');
      body.add('menuOpen-body');
    } else {
      // mainWindow.remove('menuOpen-mainWindow');
      iframeWindow.remove('menuOpen-iframeWindow');
      waybar.remove('menuOpen-waybar');
      fullMenu.remove('menuOpen-fullMenu');
      body.remove('menuOpen-body');
    }
  });