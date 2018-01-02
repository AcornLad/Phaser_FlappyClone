//https://developer.amazon.com/blogs/post/Tx1B570TUCFXJ66/Intro-To-Phaser-Part-2-Preloading-Sprites-Displaying-Text-and-Game-State
var SPEED = 200;

var state = {
    preload: function(){
        this.load.image("wall", "/assets/wall.png");
        this.load.image("background", "/assets/background-texture.png");
        this.load.spritesheet("player", "/assets/player.png", 48, 48);
    },
    create: function(){
        this.background = this.add.tileSprite(0,0, this.world.width, this.world.height, 'background');
        this.background.autoScroll(-SPEED,0);
    },
    update: function(){
        
    }
}

var game = new Phaser.Game(
    320,
    568,
    Phaser.CANVAS,
    'game',
    state
)