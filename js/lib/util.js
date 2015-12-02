function Framecounter( duration ) {
	this.duration = duration;
	this.anitime = 0;
	this.frame = 0;
}

Framecounter.prototype.update = function( delta ) {
	this.anitime += delta;
	this.frame = Math.floor( this.anitime / this.duration );
};

function shuffle(o){
	for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
}

function rand( min, max ) {
	return min+Math.round(Math.random()*(max-min));
}

function arrayRemove( arr, element ) {
	arr.splice( arr.indexOf( element ), 1 );
}