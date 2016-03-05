var queue = [];
var sp=-1;

System.config({
     transpiler: 'typescript',
     typescriptOptions: { emitDecoratorMetadata: true },
     packages: {'app': {defaultExtension: 'ts'}}
   });
   System.import('app/main')
         .then(null, console.error.bind(console));

$(document).ready(function() {
   printQueue();
});

// Adicionar album na Queue de Musicas
$(document).on('click', '.music-details', function() {

   songN = $(this).children('h5').html();
   artistN = ($(this).children('h6').html()).split("-")[0];
   imgsrc = $(this).children('img').attr('src');

   album = {song: songN, artist: artistN, img: imgsrc};

   insertQueue(album);
   printQueue();
});

// Remover album da Queue de Musicas
$(document).on('click', '.cancel-btn', function() {
   album = $(this).parent().parent().parent().parent();
   i = (album.attr("id")).split("-")[1];
   removeQueue(i-1);
   printQueue();
});

// Trocar com o album da esquerda
$(document).on('click', '.left-btn', function() {
   album = $(this).parent().parent().parent().parent();
   i = (album.attr("id")).split("-")[1] - 1;
   swapQueue(i, i-1);
   printQueue();
});

// Trocar com o album da direita
$(document).on('click', '.right-btn', function() {
   album = $(this).parent().parent().parent().parent();
   i = (album.attr("id")).split("-")[1] - 1;
   swapQueue(i, i+1);
   printQueue();
});
// FUNÇÕES PARA A QUEUE ========================================================

function insertQueue(album) {
   if (sp < 2 && !existQueue(album)) queue[++sp] = album;
}

function removeQueue(i) {
   queue.splice(i,1);
   sp--;
}

function existQueue(album) {
   r=false;

   for (i=0; !r && i<3 && queue[i] !== undefined; i++) r = (JSON.stringify(queue[i]) === JSON.stringify(album));

   return r;
}

function swapQueue(a,b) {
   if (a>=0 && a<3 && b>=0 && b<3) {
      tmp = queue[a];
      queue[a] = queue[b];
      queue[b] = tmp;
   }
}

function printQueue() {

   for (i=1; i<=3 && queue[i-1] !== undefined; i++) {
      album = $('#album-' +i).children("a");
      album.children(".info").children("h3").children("marquee").html(queue[i-1].song);
      album.children(".img").children("img").attr('src', queue[i-1].img);
      album.children(".info").children("p").html(queue[i-1].artist);
      $('#album-' + i).show();
   }
   for (; i<=3; i++) $('#album-' + i).hide();
}
