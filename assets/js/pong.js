var _0x1ee168=_0x3c0f;(function(_0x34c9e9,_0xcecbf8){var _0x4f1314=_0x3c0f,_0xe559cb=_0x34c9e9();while(!![]){try{var _0x506c9a=parseInt(_0x4f1314(0x77))/0x1*(parseInt(_0x4f1314(0x71))/0x2)+parseInt(_0x4f1314(0x83))/0x3*(-parseInt(_0x4f1314(0x7c))/0x4)+parseInt(_0x4f1314(0x7e))/0x5*(parseInt(_0x4f1314(0x72))/0x6)+-parseInt(_0x4f1314(0x80))/0x7+-parseInt(_0x4f1314(0x6f))/0x8+-parseInt(_0x4f1314(0x6e))/0x9*(parseInt(_0x4f1314(0x6d))/0xa)+parseInt(_0x4f1314(0x70))/0xb*(parseInt(_0x4f1314(0x84))/0xc);if(_0x506c9a===_0xcecbf8)break;else _0xe559cb['push'](_0xe559cb['shift']());}catch(_0x2c2c5a){_0xe559cb['push'](_0xe559cb['shift']());}}}(_0x55b2,0xaf03c));var DISPLAY_SIZE_X,DISPLAY_SIZE_Y,j1,j2,dt,speed,size_r,puntuacion,vel,velocidad,pos,r_bola,pong;function setup(){var _0x4fe425=_0x3c0f;initializeFields(),windowResized();var _0xde0300=createCanvas(DISPLAY_SIZE_X,DISPLAY_SIZE_Y);_0xde0300['parent'](_0x4fe425(0x82)),j1=height/0x2,j2=height/0x2,dt=0.1,speed=0x64,size_r=new Array(0x2),size_r[0x0]=0x5,size_r[0x1]=0x32,puntuacion=new Array(0x2),puntuacion[0x0]=0x0,puntuacion[0x1]=0x0,r_bola=0x19,vel=createVector(-0x1,0x0),vel[_0x4fe425(0x74)](),velocidad=0x64,vel[_0x4fe425(0x73)](velocidad/0x2),pos=createVector(width/0x2,height/0x2),pong=![];}function draw(){var _0xe58c64=_0x3c0f;background(0x0),textSize(0x80),textAlign(CENTER),text(puntuacion[0x0],width/0x2-0xc8,0x78),text(puntuacion[0x1],width/0x2+0xc8,0x78),textSize(0x10),text(_0xe58c64(0x7d),0xc8,height-0xf),text(_0xe58c64(0x7a),width-0xc8,height-0xf),rectMode(CORNERS),stroke(0xc8),strokeWeight(0x2),fill(0x0),line(0x1e,0x1e,width-0x1e,0x1e),line(0x1e,height-0x1e,width-0x1e,height-0x1e),strokeWeight(0x1),circle(width/0x2,height/0x2,0xc8),line(width/0x2,0x1e,width/0x2,height-0x1e),fill(0xff),circle(width/0x2,height/0x2,0xa);if(keyIsPressed==!![]){if((key=='w'||key=='W')&&j1>=0x1e+speed*dt+size_r[0x1])j1+=speed*-dt;else{if((key=='s'||key=='S')&&j1<=height-0x1e-speed*dt-size_r[0x1])j1+=speed*dt;}if(keyCode==UP_ARROW&&j2>=0x1e+speed*dt+size_r[0x1])j2+=speed*-dt;else{if(keyCode==DOWN_ARROW&&j2<=height-0x1e-speed*dt-size_r[0x1])j2+=speed*dt;}}pos['y']>=height-0x1e-r_bola/0x2&&(pos['y']=height-0x1e-r_bola/0x2,vel['y']*=-0x1),pos['y']<=0x1e+r_bola/0x2&&(pos['y']=0x1e+r_bola/0x2,vel['y']*=-0x1),pos['x']>=width-0x1e-r_bola/0x2&&(pos=createVector(width/0x2,height/0x2),vel=createVector(0x1,0x0),vel[_0xe58c64(0x74)]()['mult'](velocidad/0x2),puntuacion[0x0]++),pos['x']<=0x1e+r_bola/0x2&&(pos=createVector(width/0x2,height/0x2),vel=createVector(-0x1,0x0),vel[_0xe58c64(0x74)]()['mult'](velocidad/0x2),puntuacion[0x1]++),!pong&&pos['x']<=0x64+size_r[0x0]+r_bola/0x2&&pos['x']>=0x64&&pos['y']<=j1+size_r[0x1]+r_bola/0x2&&pos['y']>=j1-size_r[0x1]-r_bola/0x2&&(vel=createVector(0x1,-(j1-pos['y'])/size_r[0x1]),vel[_0xe58c64(0x74)]()[_0xe58c64(0x73)](velocidad),pong=!![]),pong&&pos['x']>=width-0x64-size_r[0x0]-r_bola/0x2&&pos['x']<=width-0x64+size_r[0x0]+r_bola/0x2&&pos['y']<=j2+size_r[0x1]+r_bola/0x2&&pos['y']>=j2-size_r[0x1]-r_bola/0x2&&(vel=createVector(-0x1,-(j2-pos['y'])/size_r[0x1]),vel['normalize']()[_0xe58c64(0x73)](velocidad),pong=![]),pos[_0xe58c64(0x78)](p5[_0xe58c64(0x81)][_0xe58c64(0x73)](vel,dt)),stroke(0xff),strokeWeight(0x0),fill(0xff),ellipse(pos['x'],pos['y'],r_bola,r_bola),strokeWeight(0x1),rectMode(RADIUS),rect(0x64,j1,size_r[0x0],size_r[0x1]),rect(width-0x64,j2,size_r[0x0],size_r[0x1]);}function initializeFields(){DISPLAY_SIZE_X=0x320,DISPLAY_SIZE_Y=0x320,j1=0x0,j2=0x0,dt=0x0,speed=0x0,size_r=null,puntuacion=null,vel=null,velocidad=0x0,pos=null,r_bola=0x0,pong=![];}function windowResized(){var _0x3ab85f=_0x3c0f,_0x415e8d=document[_0x3ab85f(0x76)](_0x3ab85f(0x79));_0x415e8d!=null&&(DISPLAY_SIZE_X=_0x415e8d[_0x3ab85f(0x75)],resizeCanvas(DISPLAY_SIZE_X,DISPLAY_SIZE_Y));}function _0x3c0f(_0x309d07,_0x5688f2){var _0x55b2db=_0x55b2();return _0x3c0f=function(_0x3c0f44,_0x52be79){_0x3c0f44=_0x3c0f44-0x6d;var _0x57371f=_0x55b2db[_0x3c0f44];return _0x57371f;},_0x3c0f(_0x309d07,_0x5688f2);}function _0x55b2(){var _0x39c591=['normalize','offsetWidth','getElementById','5645RWkFoS','add','div-canvas','Player\x202\x20keys:\x20(LEFT)\x20-\x20(RIGHT)','addEventListener','8pTpXAI','Player\x201\x20keys:\x20(W)\x20-\x20(S)','2896765cpUyQU','resize','8501696IdKwqX','Vector','p5-canvas','1560324pjWbps','12nVkUUy','43640aQylYk','450GkJvgP','10826592zdDDWs','29094197Eojpjo','262yWznVb','12QobOTV','mult'];_0x55b2=function(){return _0x39c591;};return _0x55b2();}window[_0x1ee168(0x7b)](_0x1ee168(0x7f),windowResized(),![]);