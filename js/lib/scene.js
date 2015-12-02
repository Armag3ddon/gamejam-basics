function Scene() {
	// Draw background before regular drawing
	this.oldDraw = this.draw;
	this.draw = function(ctx ) {
		if( this.bg )
			this.bg.draw( ctx, 0 ,0 );
		else {
			ctx.fillStyle = '#ffffff';
			ctx.fillRect(this.position.x, this.position.y, this.size.x, this.size.y);
		}
		this.oldDraw( ctx );
	};
}

Scene.prototype = new Entity();