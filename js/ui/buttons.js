// Use to either center a button vertically or horizontally
// Set as x or y

var BTN_CENTER_X = Number.MAX_VALUE;
var BTN_CENTER_Y = Number.MAX_VALUE;

/* Image Button */

function Button( img, hover, x, y, callback, sound ) {
	this.img = new Sprite( img );
	this.hover = new Sprite( hover );
	this.sound = sound;
	this.area = new Rect( new V2( x, y ), new V2( x+this.img.width, y+this.img.height ));
	this.callback = callback;
	if (x == BTN_CENTER_X)
		x = game.display.width/2 - this.img.width/2;
	this.x = x;
	if (y == BTN_CENTER_X)
		y = game.display.height/2 - this.img.height/2;
	this.y = y;
}

Button.prototype.draw = function( ctx ) {
	if( this.hover &&  this.area.inside( mouse )) this.hover.draw( ctx, this.x, this.y );
	else this.img.draw( ctx, this.x, this.y );
};

/* Sprite button */

function SpriteButton( img, position, hover, x, y, callback, sound ) {
	this.img = g[img];
	this.position = position;
	this.hover = hover;
	this.sound = sound;
	this.area = new Rect( new V2( x, y ), new V2( x+position.width(), y+position.height()));
	this.callback = callback;
	if (x == BTN_CENTER_X)
		x = game.display.width/2 - this.position.width()/2;
	this.x = x;
	if (y == BTN_CENTER_Y)
		y = game.display.height/2 - this.position.height()/2;
	this.y = y;
}

SpriteButton.prototype.draw = function( ctx ) {
	if( this.hover &&  this.area.inside( mouse )) {
		ctx.drawImage( this.img,
				this.hover.p1.x, this.hover.p1.y, this.hover.width(), this.hover.height(),
				this.x, this.y, this.hover.width(), this.hover.height());
	} else {
		ctx.drawImage( this.img,
				this.position.p1.x, this.position.p1.y, this.position.width(), this.position.height(),
				this.x, this.y, this.position.width(), this.position.height());
	}
};

/* Text Button */

function TextButton( text, x, y, w, h, callback, colors, hover, sound ) {
	if ( x == BTN_CENTER_X )
		x = game.display.width/2 - w/2;
	if ( y == BTN_CENTER_Y )
		y = game.display.height/2 - h/2;
	this.area = new Rect( new V2( x, y ), new V2( x+w, y+h));
	this.text = text;
	this.colors = colors;
	this.hover = hover;
	this.sound = sound;
	this.callback = callback;
}

TextButton.prototype.draw = function( ctx ) {
	var c = this.hover &&  this.area.inside( mouse ) ? this.hover : this.colors;
	ctx.font = config.font;

	ctx.fillStyle = c.background ? c.background : '#EEEEEE';
	ctx.fillRect( this.area.p1.x, this.area.p1.y, this.area.width(), this.area.height());

	ctx.strokeStyle = c.border ? c.border : 'black';
	ctx.strokeRect( this.area.p1.x, this.area.p1.y, this.area.width(), this.area.height());

	ctx.fillStyle = c.text ? c.text : config.fontColor;
	ctx.fillText( this.text, this.area.p1.x+10, this.area.p1.y+20, this.area.width());
};

/* Shared Source */

TextButton.prototype.click =
Button.prototype.click =
SpriteButton.prototype.click = function( pos ) {
	if( this.area.inside( pos )) {
		if( this.sound ) sound.play(this.sound);
		this.callback();
	}
};
