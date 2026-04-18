class sceneCut extends Phaser.Scene {
  constructor() {
    super("sceneCut");
  }

  preload() {
    this.load.setPath("assets/");

    this.load.image("fundo", "fundo.png");
    this.load.spritesheet("andromedano", "enemigo1.png", {
      frameWidth: 64,
      frameHeight: 64,
    });

    this.load.spritesheet("explosion", "explosion1.png", {
      frameWidth: 64,
      frameHeight: 64,
    });
  }

  create() {
    this.anims.create({
      key: "andromedano-idle",
      frames: this.anims.generateFrameNumbers("andromedano", {
        start: 7,
        end: 11,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.anims.create({
      key: "explosion-anim",
      frames: this.anims.generateFrameNumbers("explosion", {
        start: 0,
        end: 6,
      }),
      frameRate: 5,
      repeat: -1,
    });

    this.add.image(0, 0, "fundo").setOrigin(0, 0);

    /* const andromedano = this.add.sprite(400, 225, "andromedano").play("andromedano-idle");
 
     this.time.delayedCall(3000, () => {
       andromedano.play("explosao");
     });*/

    //TEXTOS
    const content = [
      "Numa galáxia não tão distante...",
    ];

    this.text1 = this.add.text(200, 180, content, {
      font: "20px Arial",
      fill: "#ffffff",
    });
    
    this.time.delayedCall(3000, () => {
      this.text1.destroy();
    });
    // Criar explosão

    this.time.delayedCall(3000, () => {

      const content = [
        "Em meio ao conflito entre a via láctea e a galáxia",
        "de Andrômeda, uma nave tripulada por apenas um",
        "auxiliar de artilharia e um piloto é enviada numa missão de",
        "reconhecimento.",
      ];

      this.text2 = this.add.text(200, 180, content, {
        font: "20px Arial",
        fill: "#ffffff",
      });
    });

    this.time.delayedCall(10000, () => {
      this.text2.destroy();
    });

    this.time.delayedCall(11000, () => {

      const content = [
        "Com o objetivo de analisar os movimentos do inimigo,",
        "os dois soldados se aproximam de um regimento de",
        "andromedanos, sem perceber que estão caindo em uma ",
        "emboscada.",
      ];

      this.text3 = this.add.text(200, 180, content, {
        font: "20px Arial",
        fill: "#ffffff",
      });
    });
    
    this.time.delayedCall(15000, () => {
      this.text3.destroy();
      delay: 2000;
      //this.explosion = this.add.sprite(400, 225, "explosion").play("explosion-anim")
      this.andromedanos = [];
      this.andromedano = this.add.sprite(400, 225, "andromedano").play("andromedano-idle");
      this.andromedanos.push(this.andromedano);
      this.andromedano = this.add.sprite(140, 90, "andromedano").play("andromedano-idle");
      this.andromedanos.push(this.andromedano);
      this.andromedano = this.add.sprite(600, 300, "andromedano").play("andromedano-idle");
      this.andromedanos.push(this.andromedano);
      this.andromedano = this.add.sprite(660, 150, "andromedano").play("andromedano-idle");
      this.andromedanos.push(this.andromedano);
      this.andromedano = this.add.sprite(200, 320, "andromedano").play("andromedano-idle");
      this.andromedanos.push(this.andromedano);
    });
    this.time.delayedCall(17000, () => {
      this.tweens.add({
        targets: this.andromedanos,
        scale: 7,
        duration: 4000,
        //yoyo: true,
        repeat: 0,
      });
    });
    //spawnar diversas explosoes

    
   
  } //CHAVE CREATE
  
  update() { }

  

   spawnExplosion() {
    
    const maxExplosion = 30; 

    if (this.explosionGroup.getLength() < maxExplosion) {
      const x = Phaser.Math.Between(0, 800); 
      const y = Phaser.Math.Between(0, 450);

      const explosion = this.explosionGroup.create(x, y, "explosion");
      explosion.setCollideWorldBounds(true);
      this.anims.play("explosion-anim", explosion);
      explosion.on("animationcomplete", () => {
        explosion.destroy();
      });
    }
  }
}

export default sceneCut;
