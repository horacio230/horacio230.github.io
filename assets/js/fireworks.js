var _0x5cc6f9=_0x1566;(function(_0x26bbdc,_0x4c7e41){var _0x1a3a76=_0x1566,_0x4c6584=_0x26bbdc();while(!![]){try{var _0x2d26a8=-parseInt(_0x1a3a76(0xe0))/0x1+-parseInt(_0x1a3a76(0x103))/0x2+parseInt(_0x1a3a76(0xed))/0x3*(-parseInt(_0x1a3a76(0x107))/0x4)+parseInt(_0x1a3a76(0xde))/0x5*(parseInt(_0x1a3a76(0xf4))/0x6)+-parseInt(_0x1a3a76(0xfd))/0x7+parseInt(_0x1a3a76(0xdd))/0x8+-parseInt(_0x1a3a76(0x113))/0x9*(-parseInt(_0x1a3a76(0xe2))/0xa);if(_0x2d26a8===_0x4c7e41)break;else _0x4c6584['push'](_0x4c6584['shift']());}catch(_0x10e8a5){_0x4c6584['push'](_0x4c6584['shift']());}}}(_0x38ae,0x4d00c));var CIRCULO,CORAZON,CONCENTRICAS,PALMERA,FLOR,SOL,PRUEBA,NUM_ROCKET_TYPES,CASING,REGULAR_PARTICLE,_fw,_numParticles,Gc,G,_windVelocity,WIND_CONSTANT,wind,FULL_SCREEN,DRAW_FREQ,DISPLAY_SIZE_X,DISPLAY_SIZE_Y,BACKGROUND_COLOR,img,_lastTimeDraw,_deltaTimeDraw,_simTime,_elapsedTime,_lastTimeUpdate,_deltaTimeUpdate,SIM_STEP,_output,n_particulas,FILE_NAME,output,n_tiros;function setup(){var _0x4d3fa3=_0x1566;initializeFields(),windowResized();var _0x2fdf11=createCanvas(DISPLAY_SIZE_X,DISPLAY_SIZE_Y);_0x2fdf11[_0x4d3fa3(0xf3)]('p5-canvas'),frameRate(DRAW_FREQ),_lastTimeDraw=millis(),_lastTimeUpdate=millis(),angleMode(RADIANS),_fw=new FireWorks(),_numParticles=0x0;if(output)_output=createWriter(FILE_NAME);}function printInfo(){var _0x456a06=_0x1566;fill(0xff),stroke(0x0),text(_0x456a06(0xff)+_numParticles,width*0.025,height*0.05),text(_0x456a06(0x109)+0x1/_deltaTimeDraw+_0x456a06(0xfc),width*0.025,height*0.075),text(_0x456a06(0x11c)+_elapsedTime+'\x20s',width*0.025,height*0.1),text('Simulated\x20time\x20=\x20'+_simTime+'\x20s\x20',width*0.025,height*0.125);var _0x4c0312;if(wind)_0x4c0312='ON';else _0x4c0312=_0x456a06(0x115);text('Wind\x20=\x20['+nf(_windVelocity['x'],0x0,0x2)+',\x20'+nf(_windVelocity['y'],0x0,0x2)+_0x456a06(0xf0)+_0x4c0312+')',width*0.8,height*0.05),text(_0x456a06(0xec),width*0.8,height*0.075),text('(UP\x20-\x20DOWN)\x20change\x20module',width*0.8,height*0.1),text(_0x456a06(0xf7),width*0.8,height*0.125);}function _0x38ae(){var _0x2914c2=['3sDWiLW','_particles','-particulas.txt',']\x20\x20(','display','MAX_TRAIL','parent','18QmQrQZ','createCasing','splice','(W)\x20ON/OFF','tiempo-','CASING','getElementById','log','\x20fps','1252202YTrNzp','REGULAR_PARTICLE','Number\x20of\x20particles\x20:\x20','getNumRockets','rotate','mult','179892GsalOv','div-canvas','push','_type','2361212JbwfGA','_casing','Frame\x20rate\x20=\x20','normalize','_hasExploded','explosion','addEventListener','_explosionPoint','_rockets','getPosition','setAlpha','length','7329654nUSiSi','_particleSize','OFF','mag','update','addRocket','updateForce','MAX_TTL','copy','Elapsed\x20time\x20=\x20','div','dot','1417784urnhdr','559600SuIPbS','add','152850XKlgHT','_ttl','10WlHiqw','Vector','trail','_launchPoint','_color','run','isDead','drawTrail','_launchVel','_casingLength','(LEFT\x20-\x20RIGHT)\x20change\x20direction'];_0x38ae=function(){return _0x2914c2;};return _0x38ae();}function drawWind(){stroke(0xff,0x0,0x0),strokeWeight(0x3),fill(0xff,0x0,0x0),line(width*0.875,height*0.175,width*0.875+_windVelocity['x']*WIND_CONSTANT*0x5,height*0.175+_windVelocity['y']*WIND_CONSTANT*0x5),circle(width*0.875+_windVelocity['x']*WIND_CONSTANT*0x5,height*0.175+_windVelocity['y']*WIND_CONSTANT*0x5,0x2);}function _0x1566(_0x7f0c5d,_0x5e7b1b){var _0x38aebd=_0x38ae();return _0x1566=function(_0x1566d6,_0x115996){_0x1566d6=_0x1566d6-0xdc;var _0x2a65ee=_0x38aebd[_0x1566d6];return _0x2a65ee;},_0x1566(_0x7f0c5d,_0x5e7b1b);}function draw(){var _0x403b5e=millis();_deltaTimeDraw=(_0x403b5e-_lastTimeDraw)/0x3e8,_elapsedTime+=_deltaTimeDraw,_lastTimeDraw=_0x403b5e,background(BACKGROUND_COLOR[0x0],BACKGROUND_COLOR[0x1],BACKGROUND_COLOR[0x2]);var _0x243b39=millis();_fw['run']();var _0x4d7629=millis();_deltaTimeUpdate=float(_0x4d7629-_0x243b39)/0x3e8;if(_numParticles==n_particulas&&output==!![])writeOutput();printInfo();if(wind)drawWind();}function mousePressed(){var _0x2ddacd=_0x1566,_0x30f20f=createVector(mouseX,mouseY),_0xc7b348=createVector(_0x30f20f['x']-width/0x2,_0x30f20f['y']-height),_0x33a7ca=color(random(0xff),random(0xff),random(0xff)),_0x56359e=int(random(NUM_ROCKET_TYPES));_fw[_0x2ddacd(0x118)](_0x56359e,createVector(width/0x2,height),_0xc7b348,_0x33a7ca);}function keyPressed(){var _0x2d08d1=_0x1566;if(keyCode==RIGHT_ARROW)_windVelocity[_0x2d08d1(0x101)](PI/0x10);if(keyCode==LEFT_ARROW)_windVelocity[_0x2d08d1(0x101)](-PI/0x10);if(keyCode==UP_ARROW)_windVelocity[_0x2d08d1(0x102)](1.1);if(keyCode==DOWN_ARROW)_windVelocity[_0x2d08d1(0x102)](0.9);if(key=='W'||key=='w')wind=!wind;}class FireWorks{constructor(){this['_rockets']=[];}[_0x5cc6f9(0x118)](_0x4bee23,_0x4b2844,_0x3356e9,_0x26b7fc){var _0x355167=_0x5cc6f9;this[_0x355167(0x10f)][_0x355167(0x105)](new Rocket(_0x4bee23,_0x4b2844,_0x3356e9,_0x26b7fc));}[_0x5cc6f9(0x100)](){var _0x2ce4b7=_0x5cc6f9;return this[_0x2ce4b7(0x10f)][_0x2ce4b7(0x112)];}['run'](){var _0x1e09f4=_0x5cc6f9;for(var _0x4a2f75=0x0;_0x4a2f75<this['_rockets'][_0x1e09f4(0x112)];_0x4a2f75++){var _0x2a84fd=this[_0x1e09f4(0x10f)][_0x4a2f75];_0x2a84fd[_0x1e09f4(0xe7)]();}_simTime+=SIM_STEP;}}class Particle{constructor(_0xd41d76,_0x4bd4db,_0x12d585,_0x36555b,_0x3f44a9,_0x31d984,_0x5a1db9){var _0x5ab67b=_0x5cc6f9;this[_0x5ab67b(0x106)]=_0xd41d76,this['_s']=_0x4bd4db[_0x5ab67b(0x11b)](),this['_v']=_0x12d585['copy'](),this['_m']=_0x36555b,this['_a']=createVector(0x0,0x0,0x0),this['_F']=createVector(0x0,0x0,0x0),this['_ttl']=_0x3f44a9,this['MAX_TTL']=this[_0x5ab67b(0xe1)],this[_0x5ab67b(0xe6)]=_0x31d984,this['MAX_TRAIL']=_0x5a1db9,this[_0x5ab67b(0x114)]=0x3,this[_0x5ab67b(0xeb)]=0x19,this[_0x5ab67b(0xf2)]>0x0&&(this['trail']=[],this[_0x5ab67b(0xe4)][_0x5ab67b(0x105)](this['_s'][_0x5ab67b(0x11b)]()));}[_0x5cc6f9(0xe7)](){var _0x154d49=_0x5cc6f9;this['update']();if(this[_0x154d49(0xf2)]>0x0)this[_0x154d49(0xe4)][_0x154d49(0x105)](this['_s'][_0x154d49(0x11b)]());this[_0x154d49(0xf1)]();}[_0x5cc6f9(0x117)](){var _0xb46ca3=_0x5cc6f9;if(this[_0xb46ca3(0xe8)]())return;this[_0xb46ca3(0x119)](),this['_a']=p5['Vector'][_0xb46ca3(0x11d)](this['_F'],this['_m']),this['_v'][_0xb46ca3(0xdf)](p5['Vector'][_0xb46ca3(0x102)](this['_a'],SIM_STEP)),this['_s'][_0xb46ca3(0xdf)](p5[_0xb46ca3(0xe3)][_0xb46ca3(0x102)](this['_v'],SIM_STEP)),this[_0xb46ca3(0xe1)]--;}[_0x5cc6f9(0x119)](){var _0xb6cc9=_0x5cc6f9;this['_F']=createVector();if(wind){var _0xdaeaa8=_windVelocity[_0xb6cc9(0x11b)]()[_0xb6cc9(0x10a)](),_0x2e1c6b=this['_v'][_0xb6cc9(0x11b)]()['normalize'](),_0xdc39b0=_0x2e1c6b[_0xb6cc9(0xdc)](_0xdaeaa8)*-0x1,_0x5324b7=_0xdc39b0*this['_v'][_0xb6cc9(0x116)]()+_windVelocity[_0xb6cc9(0x116)]();if(_0x5324b7<0x0)_0x5324b7=0x0;_0xdaeaa8[_0xb6cc9(0x102)](WIND_CONSTANT*_0x5324b7),this['_F'][_0xb6cc9(0xdf)](_0xdaeaa8);}this['_F'][_0xb6cc9(0xdf)](G);}[_0x5cc6f9(0x110)](){return this['_s'];}[_0x5cc6f9(0xf1)](){var _0xd3310e=_0x5cc6f9;switch(this[_0xd3310e(0x106)]){case _0xd3310e(0xf9):var _0x44dd95=this['_v'][_0xd3310e(0x11b)]();_0x44dd95[_0xd3310e(0x10a)]()[_0xd3310e(0x102)](this[_0xd3310e(0xeb)]),this[_0xd3310e(0xe9)](),strokeWeight(0x3),this[_0xd3310e(0xe6)][_0xd3310e(0x111)](this[_0xd3310e(0xe1)]/this[_0xd3310e(0x11a)]*0xff),stroke(this[_0xd3310e(0xe6)]),line(this['_s']['x'],this['_s']['y'],this['_s']['x']+_0x44dd95['x'],this['_s']['y']+_0x44dd95['y']);break;case _0xd3310e(0xfe):imageMode(CENTER),noStroke();if(this[_0xd3310e(0xf2)]>0x0)this['drawTrail']();this['_color'][_0xd3310e(0x111)](this[_0xd3310e(0xe1)]/this[_0xd3310e(0x11a)]*0xff),fill(this[_0xd3310e(0xe6)]),circle(this['_s']['x'],this['_s']['y'],this[_0xd3310e(0x114)]);break;}strokeWeight(0x1);}['isDead'](){if(this['_ttl']<0x0)return!![];else return![];}[_0x5cc6f9(0xe9)](){var _0x5c903c=_0x5cc6f9;switch(this[_0x5c903c(0x106)]){case _0x5c903c(0xf9):for(var _0x30ccf6=0x1;_0x30ccf6<this[_0x5c903c(0xe4)][_0x5c903c(0x112)];_0x30ccf6++){var _0x3e873a=this[_0x5c903c(0xe4)][_0x30ccf6-0x1],_0x1ebff7=this[_0x5c903c(0xe4)][_0x30ccf6];strokeWeight(_0x30ccf6/float(this[_0x5c903c(0xe4)][_0x5c903c(0x112)])*0x3),this[_0x5c903c(0xe6)][_0x5c903c(0x111)](_0x30ccf6/float(this[_0x5c903c(0xe4)][_0x5c903c(0x112)])*(this[_0x5c903c(0xe1)]/this[_0x5c903c(0x11a)])*0xff),stroke(this[_0x5c903c(0xe6)]),line(_0x3e873a['x'],_0x3e873a['y'],_0x1ebff7['x'],_0x1ebff7['y']);}break;case _0x5c903c(0xfe):for(var _0x30ccf6=0x0;_0x30ccf6<this['trail'][_0x5c903c(0x112)];_0x30ccf6++){var _0x2a4961=this['trail'][_0x30ccf6];imageMode(CENTER),this[_0x5c903c(0xe6)][_0x5c903c(0x111)](_0x30ccf6/float(this[_0x5c903c(0xe4)][_0x5c903c(0x112)])*(this['_ttl']/this['MAX_TTL'])*0xff),fill(this['_color']),circle(_0x2a4961['x'],_0x2a4961['y'],this['_particleSize']);}break;}if(this[_0x5c903c(0xe4)][_0x5c903c(0x112)]>=this[_0x5c903c(0xf2)])this[_0x5c903c(0xe4)]['shift']();}}class Rocket{constructor(_0x168fb8,_0x464b03,_0x521fd2,_0xb6982b){var _0x51d3c7=_0x5cc6f9;this['_type']=_0x168fb8,this['_particles']=[],this['_launchPoint']=_0x464b03[_0x51d3c7(0x11b)](),this[_0x51d3c7(0xea)]=_0x521fd2[_0x51d3c7(0x11b)](),this[_0x51d3c7(0x10e)]=createVector(0x0,0x0),this[_0x51d3c7(0xe6)]=_0xb6982b,this[_0x51d3c7(0x10b)]=![],this[_0x51d3c7(0xf5)]();}['createCasing'](){var _0x1ffcd1=_0x5cc6f9,_0x56b440=0x46,_0x115708=0.2;this['_casing']=new Particle(CASING,this[_0x1ffcd1(0xe5)],this[_0x1ffcd1(0xea)],_0x115708,_0x56b440,this[_0x1ffcd1(0xe6)],0x14),_numParticles++;}[_0x5cc6f9(0x10c)](){var _0x373aa3=_0x5cc6f9,_0xe0590f=0.1,_0x364b15,_0x32b255,_0x2c27b1,_0xf678f5,_0x39633e=color(random(0xff),random(0xff),random(0xff)),_0x1ed072;switch(this['_type']){case 0x0:_0x1ed072=0x64;for(var _0x345a9a=0x0;_0x345a9a<_0x1ed072;_0x345a9a++){_0x32b255=0x32,_0x2c27b1=createVector(cos(_0x345a9a*0x2*PI/_0x1ed072),sin(_0x345a9a*0x2*PI/_0x1ed072)),_0x2c27b1[_0x373aa3(0x102)](_0x32b255),_0x364b15=0x64,_0xf678f5=0x5,this['_particles'][_0x373aa3(0x105)](new Particle(REGULAR_PARTICLE,this[_0x373aa3(0x10e)],_0x2c27b1,_0xe0590f,_0x364b15,_0x39633e,_0xf678f5)),_numParticles++;}break;case 0x1:_0x1ed072=0x64;for(var _0x345a9a=0x0;_0x345a9a<_0x1ed072;_0x345a9a++){_0x32b255=0x32*sin(_0x345a9a*0x2*PI/_0x1ed072)+0x32,_0x2c27b1=createVector(cos(_0x345a9a*0x2*PI/_0x1ed072),sin(_0x345a9a*0x2*PI/_0x1ed072)),_0x2c27b1['mult'](_0x32b255),_0x364b15=0x64,_0xf678f5=0xa,this[_0x373aa3(0xee)][_0x373aa3(0x105)](new Particle(REGULAR_PARTICLE,this[_0x373aa3(0x10e)],_0x2c27b1,_0xe0590f,_0x364b15,_0x39633e,_0xf678f5)),_numParticles++;}break;case 0x2:_0x1ed072=0x100;for(var _0x345a9a=0x0;_0x345a9a<_0x1ed072;_0x345a9a++){_0x32b255=_0x345a9a%0x3*0x1e+0x14,_0x2c27b1=createVector(cos(_0x345a9a*0x2*PI/_0x1ed072),sin(_0x345a9a*0x2*PI/_0x1ed072)),_0x2c27b1['mult'](_0x32b255),_0x364b15=0x64,_0xf678f5=0x0,this[_0x373aa3(0xee)]['push'](new Particle(REGULAR_PARTICLE,this[_0x373aa3(0x10e)],_0x2c27b1,_0xe0590f,_0x364b15,_0x39633e,_0xf678f5)),_numParticles++;}break;case 0x3:_0x1ed072=0x28;for(var _0x345a9a=0x0;_0x345a9a<_0x1ed072;_0x345a9a++){_0x32b255=0x96*random(0x0,0x1)+0x1e,_0x2c27b1=createVector(cos(_0x345a9a*0x2*PI/_0x1ed072),sin(_0x345a9a*0x2*PI/_0x1ed072)),_0x2c27b1[_0x373aa3(0x102)](_0x32b255),_0x364b15=0x64,_0xf678f5=0x14,this['_particles'][_0x373aa3(0x105)](new Particle(REGULAR_PARTICLE,this[_0x373aa3(0x10e)],_0x2c27b1,_0xe0590f,_0x364b15,_0x39633e,_0xf678f5)),_numParticles++;}break;case 0x4:_0x1ed072=0xc0;for(var _0x345a9a=0x0;_0x345a9a<_0x1ed072;_0x345a9a++){_0x32b255=0x3c*cos(_0x345a9a*PI/(_0x1ed072/0x10)+PI/0x10)+0x32,_0x2c27b1=createVector(sin(_0x345a9a*0x2*PI/_0x1ed072),cos(_0x345a9a*0x2*PI/_0x1ed072)),_0x2c27b1[_0x373aa3(0x102)](_0x32b255),_0x364b15=0x64,_0xf678f5=0x5,this[_0x373aa3(0xee)]['push'](new Particle(REGULAR_PARTICLE,this['_explosionPoint'],_0x2c27b1,_0xe0590f,_0x364b15,_0x39633e,_0xf678f5)),_numParticles++,console[_0x373aa3(0xfb)](_0x32b255);}break;case 0x5:_0x1ed072=0xfa;for(var _0x345a9a=0x0;_0x345a9a<_0x1ed072;_0x345a9a++){_0x32b255=0xa*tan(_0x345a9a*PI/(_0x1ed072/0xa))+0x32,_0x2c27b1=createVector(cos(_0x345a9a*0x2*PI/_0x1ed072),sin(_0x345a9a*0x2*PI/_0x1ed072)),_0x2c27b1[_0x373aa3(0x102)](_0x32b255),_0x364b15=0x64,_0xf678f5=0x0,this[_0x373aa3(0xee)][_0x373aa3(0x105)](new Particle(REGULAR_PARTICLE,this[_0x373aa3(0x10e)],_0x2c27b1,_0xe0590f,_0x364b15,_0x39633e,_0xf678f5)),_numParticles++;}break;case 0x6:_0x1ed072=n_particulas;for(var _0x345a9a=0x0;_0x345a9a<_0x1ed072;_0x345a9a++){_0x32b255=0x64,_0x2c27b1=createVector(cos(_0x345a9a*0x2*PI/_0x1ed072),sin(_0x345a9a*0x2*PI/_0x1ed072)),_0x2c27b1[_0x373aa3(0x102)](_0x32b255),_0x364b15=0x64,_0xf678f5=0x0,this[_0x373aa3(0xee)][_0x373aa3(0x105)](new Particle(REGULAR_PARTICLE,this[_0x373aa3(0x10e)],_0x2c27b1,_0xe0590f,_0x364b15,_0x39633e,_0xf678f5)),_numParticles++;}break;}}[_0x5cc6f9(0xe7)](){var _0x589daa=_0x5cc6f9;if(!this[_0x589daa(0x108)][_0x589daa(0xe8)]())this['_casing']['run']();else{if(this['_casing']['isDead']()&&!this[_0x589daa(0x10b)])_numParticles--,this[_0x589daa(0x10b)]=!![],this[_0x589daa(0x10e)]=this['_casing'][_0x589daa(0x110)]()['copy'](),this[_0x589daa(0x10c)]();else for(var _0x1bb92b=this[_0x589daa(0xee)][_0x589daa(0x112)]-0x1;_0x1bb92b>=0x0;_0x1bb92b--){var _0x2b1598=this[_0x589daa(0xee)][_0x1bb92b];_0x2b1598[_0x589daa(0xe7)](),_0x2b1598[_0x589daa(0xe8)]()&&(_numParticles--,this[_0x589daa(0xee)][_0x589daa(0xf6)](_0x1bb92b,0x1));}}}}function initializeFields(){var _0xb10af6=_0x5cc6f9;CIRCULO=0x0,CORAZON=0x1,CONCENTRICAS=0x2,PALMERA=0x3,FLOR=0x4,SOL=0x5,PRUEBA=0x6,NUM_ROCKET_TYPES=0x6,CASING=_0xb10af6(0xf9),REGULAR_PARTICLE=_0xb10af6(0xfe),_fw=null,_numParticles=0x0,Gc=9.801,G=createVector(0x0,Gc),_windVelocity=createVector(0xfa,0x0),WIND_CONSTANT=0.01,wind=!![],FULL_SCREEN=![],DRAW_FREQ=0x32,DISPLAY_SIZE_X=0x320,DISPLAY_SIZE_Y=0x320,BACKGROUND_COLOR=[0xa,0xa,0x19],_lastTimeDraw=0x0,_deltaTimeDraw=0x0,_simTime=0x0,_elapsedTime=0x0,_lastTimeUpdate=0x0,_deltaTimeUpdate=0x0,SIM_STEP=0.02,_output=null,n_particulas=0x8,FILE_NAME=_0xb10af6(0xf8)+n_particulas+_0xb10af6(0xef),output=![],n_tiros=0x0;}function windowResized(){var _0x3a3ac3=_0x5cc6f9,_0x5f410a=document[_0x3a3ac3(0xfa)](_0x3a3ac3(0x104));_0x5f410a!=null&&(DISPLAY_SIZE_X=_0x5f410a['offsetWidth'],PIXELS_PER_METER=DISPLAY_SIZE_X/DISPLAY_SIZE_Y*0xfa,resizeCanvas(DISPLAY_SIZE_X,DISPLAY_SIZE_Y));}window[_0x5cc6f9(0x10d)]('resize',windowResized(),![]);