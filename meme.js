let topTextInput,bottomTextInput,imageInput,genrateBtn,canvas,ctx;
function generateMeme(img) {
    canvas.width=img.width;
    canvas.height-img.height;

    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.drawImage(img,0,0);

    let fontSize=canvas.width/15;
    ctx.font=fontSize+'px Imapct';
    ctx.fillSytle='white';
    ctx.lineWidth=fontSize/15;
    ctx.textBaseLine='top';

    ctx.fillText(topText,canvas.width/2,0,canvas.width);

}
function init(){
    topTextInput=document.getElementById('top-text');
    bottomTextInput=document.getElementById('bottom-text');
    imageInput=document.getElementById('image-input');
    generateBtn=document.getElementById('generate-btn');
    canvas=document.getElementById('meme-canvas');
    
    ctx=canvas.getContext('2d');
    canvas.width=canvas.height=0;

    genrateBtn.addEventListener('click',function(){
        let reader=new FileReader();
        reader.onload=function(){
            let img= new Image;
            img.src=reader.result;
            
      
            generateMeme(img);
           
        };
        reader.readAsDataURL(imageInput.files[0]);
     });


}

init();