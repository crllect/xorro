document.querySelector('.menu').addEventListener('click', function() {
    this.classList.toggle('menuOpen');
    var mainWindow = document.querySelector('.mainWindow');
    var waybar = document.querySelector('.waybar');
  
    if (this.classList.contains('menuOpen')) {
      mainWindow.classList.add('menuOpen-mainWindow');
      waybar.classList.add('menuOpen-waybar');
    } else {
      mainWindow.classList.remove('menuOpen-mainWindow');
      waybar.classList.remove('menuOpen-waybar');
    }
  });