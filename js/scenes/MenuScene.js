/* MenuScene
	Basic starting screen of your game.
	
	Comes with three buttons: Start, Options and Credits

	Credits show a different menu with a Back button and a separate background, preferably containing the credits.

	see also OptionsScene
*/

function MenuScene() {
	// Standard configuration

	this.bg        = null; // e.g. new Sprite('img.jpg');
	this.bgCredits = null; // separate background for Credits

	// Three basic buttons

	this.entities = [];

	this.entities.push( new TextButton("Start", new V2( BTN_CENTER_X, game.display.height - 300 ), new V2( 150, 50 ), {}, function() {}, { background: '#cccccc' }) );
	this.entities.push( new TextButton("Options", new V2( BTN_CENTER_X, game.display.height - 200 ), new V2( 150, 50 ), {}, function() {}, { background: '#cccccc' }) );
	this.entities.push( new TextButton("Credits", new V2( BTN_CENTER_X, game.display.height - 100 ), new V2( 150, 50 ), {}, function() { game.scene.openCredits(); }, { background: '#cccccc' }) );

	// True if credits are shown
	this.showCredits = false;
	// Internal
	this.bgBuffer = null;
}

MenuScene.prototype = new Scene();

MenuScene.prototype.openCredits = function() {
	// Safety
	if ( this.showCredits ) return;
	this.showCredits = true;

	this.bgBuffer = this.bg;
	this.bg = this.bgCredits;

	this.blocking.push( new TextButton("Back", new V2( BTN_CENTER_X, game.display.height - 100 ), new V2( 150, 50 ), {}, function() { game.scene.closeCredits(); }, { background: '#cccccc' }) );

	this.hideEntities();
};

MenuScene.prototype.closeCredits = function() {
	// Safety
	if ( !this.showCredits ) return;
	this.showCredits = false;

	this.bg = this.bgBuffer;
	this.bgBuffer = null;

	this.blocking = [];

	this.showEntities();
};