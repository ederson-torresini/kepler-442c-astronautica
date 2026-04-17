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
    ((this.text1 = this.add.text(
      200,
      225,
      "Em uma galáxia nem um pouco distante....",
    )),
      {
        font: "24px Arial",
        fill: "#ffffff",
        // delay: 3000
      });
    this.time.delayedCall(3000, () => {
      this.text1.destroy();
      // Criar explosão
      const explosion = this.add
        .sprite(400, 225, "explosion")
        .play("explosion-anim");
    });

    this.time.delayedCall(3000, () => {
      ((this.text2 = this.add.text(
        200,
        225,
        "Uma guerra intergalática assola a humanidade. Em meio ao conflito entre a via láctea e a galáxia de Andrômeda, uma nave tripulada por apenas um auxiliar de artilharia e um piloto, é enviada numa missão de reconhecimento.",
      )),
        {
          font: "24px Arial",
          fill: "#ffffff",
        });
    });

    this.time.delayedCall(6000, () => {
      this.text2.destroy();
    });
  } //CHAVE CREATE

  update() {}
}

export default sceneCut;
