;(function () {
  exports.draw = function draw (Settings, CenterX, CenterY, outerRadius) {
    let sin = Math.sin, cos = Math.cos;
    let twoPi = 2*Math.PI;

    g.setColor(Settings.Foreground === 'Theme' ? g.theme.fg : Settings.Foreground || '#000000');

    let innerRadius = outerRadius - 10;
    for (let i = 0; i < 12; i++) {
      let Phi = i * twoPi/12;

      let x1 = CenterX + outerRadius * sin(Phi) + 2;
      let x2 = CenterX + innerRadius * sin(Phi) + 2;
      let y1 = CenterY - outerRadius * cos(Phi) + 2;
      let y2 = CenterY - innerRadius * cos(Phi) + 2;

      g.drawLine(x1,y1,x2,y2)
    }
  };
})();
