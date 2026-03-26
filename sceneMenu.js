class SceneMenu extends Phaser.Scene {
  constructor() {
    super("sceneMenu");
  }

  preload() {
    this.load.image("atirador", "assets/botao_atirador.png");
    this.load.image("piloto", "assets/botão_piloto.png");
    this.load.image("dudecapa", "assets/borda_menu.png");
    


    //scene0
    this.load.image("star", "assets/star.png");
    this.load.image("starVermelha", "assets/starVermelha.png");
    this.load.image("starCinza", "assets/starCinza.png");
    this.load.image("chao", "assets/chao2.png");
    this.load.image("rock", "assets/rocha.png");
    this.load.image("et1", "assets/inimigo.png");
    this.load.image("et2", "assets/inimigoCobra.png");

    this.load.spritesheet("enemigo1", "assets/enemigo1.png", {
      frameWidth: 64,
      frameHeight: 64,
    });

    this.load.audio("musica", "assets/menusong.mp3");
    this.load.audio("som", "assets/lazer.mp3");

    // //Ende Game
    // this.load.image("botao_Voltar", "assets/voltar.png");
  }

  create() {
    this.add.image(0, 0, "fundo").setOrigin(0, 0);
    let btnPlay = this.add.image(135, 200, "btnPlay").setOrigin(0, 0);
    btnPlay.setInteractive();

    this.add.image(320, 230, "dudecapa").setOrigin(0, 0);

    //Adicionar o clique do botao
    btnPlay.on("pointerdown", () => this.scene.start("PlayGame"));
  }
}
