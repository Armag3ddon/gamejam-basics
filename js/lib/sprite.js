/** TODO replace this deprecated stuff **/

function Sprite(img ) {
	this.img = g[img];
	this.width = this.img.width;
	this.height = this.img.height;
}

Sprite.prototype.draw = function(ctx, x, y ) {
	ctx.drawImage( this.img, x, y );
};

Sprite.prototype.center = function(ctx, x, y ) {
	ctx.drawImage( this.img, x-this.img.width/2, y-this.img.height/2 );
};

Sprite.prototype.area = function(ctx, sx, sy, sw, sh, x, y ) {
	ctx.drawImage( this.img, sx, sy, sw, sh, x, y, sw, sh );
};

function AnimationSprite(img, frames ) {
	this.img = g[img];
	this.h = g[img].height;
	this.w = g[img].width / frames;
	this.f = frames;
}

AnimationSprite.prototype.draw = function(ctx, x, y, f ) {
	ctx.drawImage( this.img, f*this.w, 0, this.w, this.h, x, y, this.w, this.h );
};

AnimationSprite.prototype.center = function(ctx, x, y, f ) {
	ctx.drawImage( this.img, f*this.w, 0, this.w, this.h, x-this.w/2, y-this.h/2, this.w, this.h );
};

function Framecounter(duration ) {
	this.duration = duration;
	this.anitime = 0;
	this.frame = 0;
}

Framecounter.prototype.update = function( delta ) {
	this.anitime += delta;
	this.frame = Math.floor( this.anitime / this.duration );
};