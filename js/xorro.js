document.querySelector('.menu').addEventListener('click', function() {
    this.classList.toggle('menuOpen');
    var mainWindow = document.querySelector('.mainWindow').classList;
    var waybar = document.querySelector('.waybar').classList;
  
    if (this.classList.contains('menuOpen')) {
      mainWindow.add('menuOpen-mainWindow');
      waybar.add('menuOpen-waybar');
    } else {
      mainWindow.remove('menuOpen-mainWindow');
      waybar.remove('menuOpen-waybar');
    }
  });