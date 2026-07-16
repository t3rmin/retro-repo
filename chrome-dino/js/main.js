const canvas = document.getElementById('canvas');

let dino = new Dino(canvas, {
    maxWidth: 720
});

// This opens the engine and loads assets safely!
dino.init(); 
