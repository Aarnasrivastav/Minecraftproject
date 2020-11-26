var canvas=new fabric.canvas("myCanvas");
blockimagewidth=30;
blockimageheight=30;
playerX=10;
playerY=10;
var playerobjects="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        playerobjects=Img;
        playerobjects.scaleToWidth(150);
        playerobjects.scaleToHeight(150);
        playerobjects.set({
            top:playerY,left:playerX
        });
        canvas.add(playerobjects);

    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        blockimageobject=Img;
        blockimageobject.scaleToWidth(blockimagewidth);
        blockimageobject.scaleToHeight(blockimageheight);
        blockimageobject.set({
            top:playerY,left:playerX
        });
        canvas.add(blockimageobject);

    });
}