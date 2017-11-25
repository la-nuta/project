(function () {
    'use strict';
    let mainContent = document.getElementById('mainContent');
    mainContent.addEventListener('click', function (event) {
            let target = event.target || event.srcElement,
                picS = target.classList.contains('small'),
                picL = target.classList.contains('large') ? target : target.closest('section'),
                picViewer = document.getElementById('picViewer'),
                picN = target.classList.contains('next'),
                picP = target.classList.contains('previous'),
                bigPic = document.getElementById('largePic');

            if (picS) {
                bigPic = bigPic ? document.getElementById('largePic') : document.createElement('img');
                picViewer.classList.add('act');
                bigPic.setAttribute('src', target.getAttribute('src').replace("small", "large"));
                bigPic.setAttribute('id', 'largePic');
                bigPic.setAttribute('height', "500");
                picViewer.appendChild(bigPic);
                bigPic.classList.add('large');
                let currentImagePos = parseInt(bigPic.getAttribute('src').match(/(\d+)\.jpg/)[1]),
                    nextImagePos = currentImagePos === 29 ? 0 : currentImagePos + 1,
                    prevImagePos = currentImagePos === 1 ? 0 : currentImagePos - 1;

                if (nextImagePos){
                    document.getElementById('next').classList.add('visible')
                } else {
                    document.getElementById('next').classList.remove('visible')
                }
                if (prevImagePos){
                    document.getElementById('previous').classList.add('visible')
                } else {
                    document.getElementById('previous').classList.remove('visible')
                }
            }

            if (picL && !picN && !picP) {
                let clear = document.getElementById('largePic');
                clear.remove();
                picViewer.classList.remove('act');
            }

            if (picN) {
                let currentImagePos = parseInt(bigPic.getAttribute('src').match(/(\d+)\.jpg/)[1]) + 1,
                    nextImagePos = currentImagePos === 29 ? 0 : currentImagePos + 1,
                    prevImagePos = currentImagePos === 1 ? 0 : currentImagePos - 1;
                bigPic.setAttribute('src', 'images/large/Caminito-' + currentImagePos.toString() + '.jpg');

                if (nextImagePos){
                    document.getElementById('next').classList.add('visible')
                } else {
                    document.getElementById('next').classList.remove('visible')
                }
                if (prevImagePos){
                    document.getElementById('previous').classList.add('visible')
                } else {
                    document.getElementById('previous').classList.remove('visible')
                }
            }

            if (picP) {
                bigPic = document.getElementById('largePic');

                let currentImagePos = parseInt(bigPic.getAttribute('src').match(/(\d+)\.jpg/)[1]) - 1,
                    nextImagePos = currentImagePos === 29 ? 0 : currentImagePos + 1,
                    prevImagePos = currentImagePos === 1 ? 0 : currentImagePos - 1;
                bigPic.setAttribute('src', 'images/large/Caminito-' + currentImagePos.toString() + '.jpg');

                if (nextImagePos){
                    document.getElementById('next').classList.add('visible')
                } else {
                    document.getElementById('next').classList.remove('visible')
                }
                if (prevImagePos){
                    document.getElementById('previous').classList.add('visible')
                } else {
                    document.getElementById('previous').classList.remove('visible')
                }
            }
      }
    )
}());
