var queue = [undefined, undefined, undefined];
var sp;

System.config({
     transpiler: 'typescript',
     typescriptOptions: { emitDecoratorMetadata: true },
     packages: {'app': {defaultExtension: 'ts'}}
   });
   System.import('app/main')
         .then(null, console.error.bind(console));



$(".music-details").click( function() {

   this.innerHTML = "Olá";
});
