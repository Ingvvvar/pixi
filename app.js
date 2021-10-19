const Application = PIXI.Application;

const app = new Application({
  width: 960,
  height: 540,
  backgroundColor: 0x1099bb,
});

document.body.appendChild(app.view);

let sprite = PIXI.Sprite.from('background.png');
sprite.width = 960;
sprite.height = 540;

app.stage.addChild(sprite);

const loader = PIXI.Loader.shared;

loader.add('mc.json')
  .load(setup);

function setup() {
  const textures = [];
  for (let i = 1; i < 28; i++) {
    const texture = PIXI.Texture.from(`e${i}.png`);
    textures.push(texture);
  }

  for (let i = 0; i < 15; i++) {
    const bang = new PIXI.AnimatedSprite(textures);
    app.stage.addChild(bang);
    bang.play();
    bang.anchor.set(-0.35, 0);
    bang.x = (i % 5) * 140;
    bang.y = Math.floor(i / 5) * 120;
    bang.animationSpeed = `1.${i}`;
  }
}
