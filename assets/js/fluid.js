var _0x2c5ac0=_0x13f2;(function(_0x373a5e,_0xa2f220){var _0x3ced80=_0x13f2,_0x50bc44=_0x373a5e();while(!![]){try{var _0xf7d429=parseInt(_0x3ced80(0x1dc))/0x1*(parseInt(_0x3ced80(0x220))/0x2)+parseInt(_0x3ced80(0x20e))/0x3+-parseInt(_0x3ced80(0x1f3))/0x4*(parseInt(_0x3ced80(0x1ec))/0x5)+parseInt(_0x3ced80(0x228))/0x6+-parseInt(_0x3ced80(0x22c))/0x7*(-parseInt(_0x3ced80(0x215))/0x8)+-parseInt(_0x3ced80(0x1df))/0x9*(parseInt(_0x3ced80(0x206))/0xa)+parseInt(_0x3ced80(0x1ed))/0xb;if(_0xf7d429===_0xa2f220)break;else _0x50bc44['push'](_0x50bc44['shift']());}catch(_0x122fa9){_0x50bc44['push'](_0x50bc44['shift']());}}}(_0x424e,0xd3a55));var SIM_STEP,_simTime,_lastTimeDraw,_deltaTimeDraw,_elapsedTime,_collisionsTime,_dataStructTime,_integrationTime,_drawTime,iteration,_output,createoutput,SUM_fps,SUM_calc,SUM_iter,N_ITERATIONS,PARTICLE_JUMP,MAX_PARTICLES,_system,_planes,_grid,_hashTable,_computeParticleCollisions,BACKGROUND_COLOR,PIXELS_PER_METER,DISPLAY_CENTER,DISPLAY_SIZE_X,DISPLAY_SIZE_Y,FULL_SCREEN,drawPlane,colorCells,showCells,substance,NONE=_0x2c5ac0(0x1e3),GRID=_0x2c5ac0(0x22a),HASH=_0x2c5ac0(0x1f5),_dataStruct;function worldToPixels(_0x4aee7c){return _0x4aee7c*PIXELS_PER_METER;}function pixelsToWorld(_0x351236){return _0x351236/PIXELS_PER_METER;}function worldToScreen(_0x5beae9,_0x4dfb8f){_0x4dfb8f['x']=0.5*DISPLAY_SIZE_X+(_0x5beae9['x']+DISPLAY_CENTER['x'])*PIXELS_PER_METER,_0x4dfb8f['y']=0.5*DISPLAY_SIZE_Y-(_0x5beae9['y']-DISPLAY_CENTER['y'])*PIXELS_PER_METER;}function screenToWorld(_0x14b76f,_0x277918){_0x277918['x']=(_0x14b76f['x']-0.5*DISPLAY_SIZE_X)/PIXELS_PER_METER+DISPLAY_CENTER['x'],_0x277918['y']=(0.5*DISPLAY_SIZE_Y-_0x14b76f['y'])/PIXELS_PER_METER+DISPLAY_CENTER['y'];}var n_particles,PARTICLES_SIZE,M,Gc,G,Cr,Kr,Ke,minDist,plane6,GRID_ROWS,GRID_COLS,HASH_CELLS,HASH_CELL_SIZE;function instanceObjects(){var _0x11f455=_0x2c5ac0;_grid=new Grid(GRID_ROWS,GRID_COLS),_hashTable=new HashTable(HASH_CELLS,HASH_CELL_SIZE),_planes=[];var _0x51cecb=new PlaneSection(DISPLAY_CENTER['x']-pixelsToWorld(width/0x2-0xa),DISPLAY_CENTER['y']+pixelsToWorld(height/0x2-0xa),DISPLAY_CENTER['x']+pixelsToWorld(width/0x2-0xa),DISPLAY_CENTER['y']+pixelsToWorld(height/0x2-0xa),![]),_0x5eca72=new PlaneSection(DISPLAY_CENTER['x']-pixelsToWorld(width/0x2-0xa),DISPLAY_CENTER['y']+pixelsToWorld(height/0x2-0xa),DISPLAY_CENTER['x']-pixelsToWorld(width/0x2-0x32),DISPLAY_CENTER['y'],!![]),_0x3d31ba=new PlaneSection(DISPLAY_CENTER['x']+pixelsToWorld(width/0x2-0xa),DISPLAY_CENTER['y']+pixelsToWorld(height/0x2-0xa),DISPLAY_CENTER['x']+pixelsToWorld(width/0x2-0x32),DISPLAY_CENTER['y'],![]),_0x120c44=new PlaneSection(DISPLAY_CENTER['x']-pixelsToWorld(width/0x2-0x32),DISPLAY_CENTER['y'],DISPLAY_CENTER['x']-pixelsToWorld(0x64),DISPLAY_CENTER['y']-pixelsToWorld(height/0x2-0x64),!![]),_0x27223e=new PlaneSection(DISPLAY_CENTER['x']+pixelsToWorld(width/0x2-0x32),DISPLAY_CENTER['y'],DISPLAY_CENTER['x']+pixelsToWorld(0x64),DISPLAY_CENTER['y']-pixelsToWorld(height/0x2-0x64),![]);plane6=new PlaneSection(DISPLAY_CENTER['x']-pixelsToWorld(0x64),DISPLAY_CENTER['y']-pixelsToWorld(height/0x2-0x64),DISPLAY_CENTER['x']+pixelsToWorld(0x64),DISPLAY_CENTER['y']-pixelsToWorld(height/0x2-0x64),!![]),_planes[_0x11f455(0x229)](_0x51cecb),_planes[_0x11f455(0x229)](_0x5eca72),_planes['push'](_0x3d31ba),_planes['push'](_0x120c44),_planes[_0x11f455(0x229)](_0x27223e),_planes[_0x11f455(0x229)](plane6),initSimulation();}function setup(){var _0x38678d=_0x2c5ac0;initializeFields(),windowResized();var _0x51798e=createCanvas(DISPLAY_SIZE_X,DISPLAY_SIZE_Y);_0x51798e['parent'](_0x38678d(0x224)),_lastTimeDraw=millis(),instanceObjects();}function initSimulation(){_simTime=0x0,_elapsedTime=0x0,_system=new ParticleSystem();for(var _0x13a6c5=0x0;_0x13a6c5<n_particles;_0x13a6c5++){var _0x3b1bad=createVector(DISPLAY_CENTER['x']-pixelsToWorld(width/0x2-0x96)+_0x13a6c5%(pixelsToWorld(width-0x12c)/(PARTICLES_SIZE*1.1))*PARTICLES_SIZE*1.1,DISPLAY_CENTER['y']+pixelsToWorld(height/0x2-0x12c)+floor(_0x13a6c5/(pixelsToWorld(width-0x12c)/(PARTICLES_SIZE*1.1)))*PARTICLES_SIZE*1.1),_0x1dca0a=createVector(0x0,0x0);_system['addParticle'](_0x13a6c5,_0x3b1bad,_0x1dca0a,M,PARTICLES_SIZE/0x2);}iteration=0x0,SUM_fps=0x0,SUM_calc=0x0,SUM_iter=0x0;}function drawStaticEnvironment(){var _0x20d500=_0x2c5ac0;background(BACKGROUND_COLOR[0x0],BACKGROUND_COLOR[0x1],BACKGROUND_COLOR[0x2]),fill(0xff,0x0,0x0),textSize(0x14),text(_0x20d500(0x203)+_simTime,width*0.025,height*0.05),text(_0x20d500(0x207)+SIM_STEP,width*0.025,height*0.075),text(_0x20d500(0x21e)+n_particles,width*0.025,height*0.1),text(_0x20d500(0x1e0)+nf(0x1/_deltaTimeDraw,0x0,0x2),width*0.025,height*0.125),text(_0x20d500(0x1d8),width*0.025,height*0.15),text(_0x20d500(0x219)+_dataStructTime,width*0.025,height*0.175),text(_0x20d500(0x1ff)+_collisionsTime,width*0.025,height*0.2),text(_0x20d500(0x216)+_integrationTime,width*0.025,height*0.225),text(_0x20d500(0x21d)+_drawTime,width*0.025,height*0.25),text('Iteration\x20=\x20'+iteration,width*0.025,height*0.275),text(_0x20d500(0x21c),width*0.025,height*0.85),text(_0x20d500(0x1fc)+drawPlane,width*0.025,height*0.875),text(_0x20d500(0x20c)+substance,width*0.025,height*0.9),text(_0x20d500(0x208)+_dataStruct,width*0.025,height*0.925),text(_0x20d500(0x1de)+colorCells,width*0.025,height*0.95),text(_0x20d500(0x1ee)+showCells,width*0.025,height*0.975),stroke(0x0),strokeWeight(0x1);var _0x66954f=createVector();worldToScreen(createVector(),_0x66954f);for(var _0x4f1dd4=0x0;_0x4f1dd4<_planes[_0x20d500(0x22b)];_0x4f1dd4++){_planes[_0x4f1dd4][_0x20d500(0x1fa)]();}stroke(0xff,0x0,0x0),strokeWeight(0x1);if(showCells){if(_dataStruct==GRID){for(var _0x4f1dd4=0x0;_0x4f1dd4<GRID_ROWS;_0x4f1dd4++)line(0x0,_0x4f1dd4*(height/GRID_ROWS),width,_0x4f1dd4*(height/GRID_ROWS));for(var _0x4f1dd4=0x0;_0x4f1dd4<GRID_COLS;_0x4f1dd4++)line(_0x4f1dd4*(width/GRID_COLS),0x0,_0x4f1dd4*(width/GRID_COLS),height);}else{if(_dataStruct==HASH){for(var _0x4f1dd4=0x0;_0x4f1dd4<width/HASH_CELL_SIZE;_0x4f1dd4++)line(_0x4f1dd4*HASH_CELL_SIZE,0x0,_0x4f1dd4*HASH_CELL_SIZE,height);for(var _0x4f1dd4=0x0;_0x4f1dd4<height/HASH_CELL_SIZE;_0x4f1dd4++)line(0x0,_0x4f1dd4*HASH_CELL_SIZE,width,_0x4f1dd4*HASH_CELL_SIZE);}}}}function drawMovingElements(){var _0x58d08b=_0x2c5ac0;_system[_0x58d08b(0x217)]();}function draw(){var _0x5df5c5=_0x2c5ac0,_0x293749=millis();_deltaTimeDraw=(_0x293749-_lastTimeDraw)/0x3e8,_elapsedTime+=_deltaTimeDraw,_lastTimeDraw=_0x293749;var _0x2a2655=millis();_system[_0x5df5c5(0x1e7)]();var _0x4cc9c5=millis();_integrationTime=(_0x4cc9c5-_0x2a2655)/0x3e8,_0x2a2655=millis();if(_dataStruct==GRID)_system[_0x5df5c5(0x1db)]();else{if(_dataStruct==HASH)_system['insertHash']();}_0x4cc9c5=millis(),_dataStructTime=(_0x4cc9c5-_0x2a2655)/0x3e8,_0x2a2655=millis(),_system[_0x5df5c5(0x1f9)](_planes,_computeParticleCollisions),_0x4cc9c5=millis(),_collisionsTime=(_0x4cc9c5-_0x2a2655)/0x3e8,_0x2a2655=millis(),drawStaticEnvironment(),drawMovingElements(),_0x4cc9c5=millis(),_drawTime=(_0x4cc9c5-_0x2a2655)/0x3e8,_simTime+=SIM_STEP,iteration++;}function mouseClicked(){var _0x3c888e=_0x2c5ac0,_0x109f63=createVector();screenToWorld(createVector(mouseX,mouseY),_0x109f63);for(var _0x65d3ba=0x0;_0x65d3ba<0xa;_0x65d3ba++){var _0x331ad2=createVector(random(-0x1,0x1),random(-0x1,0x1)),_0x190f23=p5['Vector']['add'](_0x109f63,_0x331ad2),_0x4bdd74=createVector(random(-0x1,0x1),random(-0x1,0x1));_system[_0x3c888e(0x201)](n_particles,_0x190f23,_0x4bdd74,M,PARTICLES_SIZE/0x2),n_particles++;}}function keyPressed(){var _0x11e60b=_0x2c5ac0;(key=='R'||key=='r')&&initSimulation();(key=='P'||key=='p')&&(drawPlane?(_planes['pop'](),drawPlane=![]):(_planes[_0x11e60b(0x229)](plane6),drawPlane=!![]));(key=='N'||key=='n')&&(_dataStruct=NONE);(key=='G'||key=='g')&&(_dataStruct=GRID);(key=='H'||key=='h')&&(_dataStruct=HASH);(key=='C'||key=='c')&&(colorCells=!colorCells);(key=='X'||key=='x')&&(showCells=!showCells);(key=='N'||key=='n')&&(_dataStruct=NONE);key=='1'&&changeSubstance(0x1);key=='2'&&changeSubstance(0x2);key=='3'&&changeSubstance(0x3);if(key=='+')SIM_STEP*=1.1;if(key=='-')SIM_STEP/=1.1;}function changeSubstance(_0x58a512){var _0x129c7d=_0x2c5ac0;switch(_0x58a512){case 0x1:n_particles=0x32,PARTICLES_SIZE=0.5,M=0x1,Kr=0.005,Ke=0x12c,Cr=0.9,minDist=PARTICLES_SIZE*0x3,substance=_0x129c7d(0x227);break;case 0x2:n_particles=0x64,PARTICLES_SIZE=0.9,M=0.1,Kr=0.03,Ke=0xc8,Cr=0.7,minDist=PARTICLES_SIZE,substance=_0x129c7d(0x22e);break;case 0x3:n_particles=0x32,PARTICLES_SIZE=1.2,M=0x1,Kr=1.5,Ke=0x32,Cr=0.02,minDist=PARTICLES_SIZE,substance=_0x129c7d(0x202);break;}initSimulation();}class Grid{constructor(_0x1dab02,_0x32d4bb){var _0x2c9d1f=_0x2c5ac0;this[_0x2c9d1f(0x1dd)]=[],this[_0x2c9d1f(0x230)]=_0x1dab02,this[_0x2c9d1f(0x20b)]=_0x32d4bb,this[_0x2c9d1f(0x213)]=this[_0x2c9d1f(0x230)]*this[_0x2c9d1f(0x20b)],this[_0x2c9d1f(0x1e4)]=width/this[_0x2c9d1f(0x20b)],this[_0x2c9d1f(0x1e5)]=height/this[_0x2c9d1f(0x230)],this['_colors']=new Array(this[_0x2c9d1f(0x213)]);for(var _0x5a27dc=0x0;_0x5a27dc<this['_numCells'];_0x5a27dc++){var _0x50d2d3=[];this[_0x2c9d1f(0x1dd)]['push'](_0x50d2d3),this[_0x2c9d1f(0x1f2)][_0x5a27dc]=color(int(random(0x0,0x100)),int(random(0x0,0x100)),int(random(0x0,0x100)),0x96);}}[_0x2c5ac0(0x20f)](){var _0x5acdcf=_0x2c5ac0;this['_cells']=[];for(var _0x3360f4=0x0;_0x3360f4<this[_0x5acdcf(0x213)];_0x3360f4++){var _0x1acb37=[];this['_cells'][_0x5acdcf(0x229)](_0x1acb37);}}['insert'](_0x206a22){var _0x21dade=_0x2c5ac0,_0x25117f=createVector();worldToScreen(_0x206a22['_s'],_0x25117f);var _0x4fc03c=floor(_0x25117f['x']/this['_cellsizeX']),_0x27a56e=floor(_0x25117f['y']/this[_0x21dade(0x1e5)]);if(_0x27a56e>=0x0&&_0x4fc03c>=0x0&&_0x4fc03c<this['_nCols']&&_0x27a56e<this[_0x21dade(0x230)]){var _0x351f8d=this[_0x21dade(0x1dd)][_0x27a56e*this[_0x21dade(0x20b)]+_0x4fc03c];_0x351f8d[_0x21dade(0x229)](_0x206a22),this[_0x21dade(0x1dd)][_0x27a56e*this[_0x21dade(0x20b)]+_0x4fc03c]=_0x351f8d;}}['getCelda'](_0x11c41e){var _0xe7488f=_0x2c5ac0,_0x46d78f=createVector();worldToScreen(_0x11c41e,_0x46d78f);var _0x131e09=floor(_0x46d78f['x']/this[_0xe7488f(0x1e4)]),_0x4d1e0f=floor(_0x46d78f['y']/this[_0xe7488f(0x1e5)]);if(_0x4d1e0f>=0x0&&_0x131e09>=0x0&&_0x131e09<this[_0xe7488f(0x20b)]&&_0x4d1e0f<this['_nRows'])return _0x4d1e0f*this[_0xe7488f(0x20b)]+_0x131e09;else return-0x1;}[_0x2c5ac0(0x1ea)](_0x279ff9){var _0x395d2b=_0x2c5ac0,_0x3d23aa=[],_0x286d5d=this[_0x395d2b(0x205)](_0x279ff9);if(_0x286d5d>=0x0){_0x3d23aa[_0x395d2b(0x229)](...this[_0x395d2b(0x1dd)][_0x286d5d]);if(this[_0x395d2b(0x205)](p5[_0x395d2b(0x22f)][_0x395d2b(0x1d7)](_0x279ff9,createVector(0x0,pixelsToWorld(this[_0x395d2b(0x1e5)]))))>=0x0&&_0x286d5d!=this[_0x395d2b(0x205)](p5[_0x395d2b(0x22f)][_0x395d2b(0x1d7)](_0x279ff9,createVector(0x0,minDist))))_0x3d23aa['push'](...this[_0x395d2b(0x1dd)][_0x286d5d-this[_0x395d2b(0x20b)]]);if(this[_0x395d2b(0x205)](p5[_0x395d2b(0x22f)][_0x395d2b(0x1d7)](_0x279ff9,createVector(0x0,-pixelsToWorld(this[_0x395d2b(0x1e5)]))))>=0x0&&_0x286d5d!=this['getCelda'](p5[_0x395d2b(0x22f)]['add'](_0x279ff9,createVector(0x0,-minDist))))_0x3d23aa[_0x395d2b(0x229)](...this['_cells'][_0x286d5d+this['_nCols']]);if(this[_0x395d2b(0x205)](p5[_0x395d2b(0x22f)][_0x395d2b(0x1d7)](_0x279ff9,createVector(-pixelsToWorld(this[_0x395d2b(0x1e4)]),0x0)))>=0x0&&_0x286d5d!=this['getCelda'](p5['Vector']['add'](_0x279ff9,createVector(-minDist,0x0))))_0x3d23aa[_0x395d2b(0x229)](...this[_0x395d2b(0x1dd)][_0x286d5d-0x1]);if(this['getCelda'](p5[_0x395d2b(0x22f)]['add'](_0x279ff9,createVector(pixelsToWorld(this['_cellsizeX']),0x0)))>=0x0&&_0x286d5d!=this[_0x395d2b(0x205)](p5['Vector'][_0x395d2b(0x1d7)](_0x279ff9,createVector(minDist,0x0))))_0x3d23aa[_0x395d2b(0x229)](...this[_0x395d2b(0x1dd)][_0x286d5d+0x1]);}return _0x3d23aa;}}class HashTable{constructor(_0x3bfb56,_0x1a69f6){var _0x3e3e47=_0x2c5ac0;this[_0x3e3e47(0x21f)]=[],this[_0x3e3e47(0x213)]=_0x3bfb56,this['_cellSize']=_0x1a69f6,this[_0x3e3e47(0x1f2)]=new Array(this['_numCells']);for(var _0x3af05a=0x0;_0x3af05a<this[_0x3e3e47(0x213)];_0x3af05a++){var _0x5a63f9=[];this[_0x3e3e47(0x21f)][_0x3e3e47(0x229)](_0x5a63f9),this['_colors'][_0x3af05a]=color(int(random(0x0,0x100)),int(random(0x0,0x100)),int(random(0x0,0x100)),0x96);}}['insert'](_0x252fb4){var _0x26738b=_0x2c5ac0,_0x2cacc5=this['hash'](_0x252fb4['_s']);this[_0x26738b(0x21f)][_0x2cacc5][_0x26738b(0x229)](_0x252fb4);}[_0x2c5ac0(0x204)](_0x3dc42c){var _0x53b925=_0x2c5ac0,_0x5e3f25=createVector();worldToScreen(_0x3dc42c,_0x5e3f25);var _0x488dc6=int(floor(_0x5e3f25['x']/this[_0x53b925(0x20d)])),_0x427127=int(floor(_0x5e3f25['y']/this[_0x53b925(0x20d)]));return abs((0x466f45d*_0x488dc6+0x127409f*_0x427127)%this[_0x53b925(0x213)]);}[_0x2c5ac0(0x21a)](){var _0x2fd16a=_0x2c5ac0;this[_0x2fd16a(0x21f)]=[];for(var _0x4801e4=0x0;_0x4801e4<this[_0x2fd16a(0x213)];_0x4801e4++){var _0x551c27=[];this[_0x2fd16a(0x21f)][_0x2fd16a(0x229)](_0x551c27);}}['getNeigborhoodHash'](_0x462dec){var _0x53f2d5=_0x2c5ac0,_0x1bbd59=[],_0x1e756c=this[_0x53f2d5(0x204)](_0x462dec);_0x1bbd59[_0x53f2d5(0x229)](...this[_0x53f2d5(0x21f)][_0x1e756c]);if(_0x1e756c!=this[_0x53f2d5(0x204)](p5['Vector'][_0x53f2d5(0x1d7)](_0x462dec,createVector(0x0,minDist))))_0x1bbd59[_0x53f2d5(0x229)](...this['_table'][this[_0x53f2d5(0x204)](p5[_0x53f2d5(0x22f)][_0x53f2d5(0x1d7)](_0x462dec,createVector(0x0,pixelsToWorld(this[_0x53f2d5(0x20d)]))))]);if(_0x1e756c!=this['hash'](p5[_0x53f2d5(0x22f)][_0x53f2d5(0x1d7)](_0x462dec,createVector(0x0,-minDist))))_0x1bbd59[_0x53f2d5(0x229)](...this[_0x53f2d5(0x21f)][this[_0x53f2d5(0x204)](p5[_0x53f2d5(0x22f)]['add'](_0x462dec,createVector(0x0,-pixelsToWorld(this[_0x53f2d5(0x20d)]))))]);if(_0x1e756c!=this[_0x53f2d5(0x204)](p5[_0x53f2d5(0x22f)]['add'](_0x462dec,createVector(-minDist,0x0))))_0x1bbd59['push'](...this[_0x53f2d5(0x21f)][this[_0x53f2d5(0x204)](p5[_0x53f2d5(0x22f)][_0x53f2d5(0x1d7)](_0x462dec,createVector(-pixelsToWorld(this[_0x53f2d5(0x20d)]),0x0)))]);if(_0x1e756c!=this[_0x53f2d5(0x204)](p5['Vector'][_0x53f2d5(0x1d7)](_0x462dec,createVector(minDist,0x0))))_0x1bbd59['push'](...this[_0x53f2d5(0x21f)][this[_0x53f2d5(0x204)](p5[_0x53f2d5(0x22f)]['add'](_0x462dec,createVector(pixelsToWorld(this['_cellSize']),0x0)))]);return _0x1bbd59;}}class Particle{constructor(_0x5bc529,_0x54e12d,_0x4307ce,_0x5aab91,_0x12ad2a,_0x53a1f3){var _0x198e2e=_0x2c5ac0;this['_ps']=_0x5bc529,this['_id']=_0x54e12d,this['_s']=_0x4307ce[_0x198e2e(0x1ef)](),this['_v']=_0x5aab91['copy'](),this['_a']=createVector(0x0,0x0),this['_F']=createVector(0x0,0x0),this['_m']=_0x12ad2a,this['_radius']=_0x53a1f3,this[_0x198e2e(0x1eb)]=color(0x0,0x64,0xff,0x96);}[_0x2c5ac0(0x212)](){var _0x49cc52=_0x2c5ac0;this[_0x49cc52(0x221)](),this['_a']=p5[_0x49cc52(0x22f)][_0x49cc52(0x20a)](this['_F'],this['_m']),this['_v'][_0x49cc52(0x1d7)](p5['Vector'][_0x49cc52(0x1f8)](this['_a'],SIM_STEP)),this['_s'][_0x49cc52(0x1d7)](p5[_0x49cc52(0x22f)][_0x49cc52(0x1f8)](this['_v'],SIM_STEP));}[_0x2c5ac0(0x221)](){var _0x52c3e4=_0x2c5ac0;this['_F']=createVector();var _0x3ed064=this['_v'][_0x52c3e4(0x1ef)]()['normalize'](),_0xc510e9=p5[_0x52c3e4(0x22f)]['mult'](_0x3ed064,-Kr*this['_v'][_0x52c3e4(0x22d)]());this['_F']['add'](G),this['_F'][_0x52c3e4(0x1d7)](_0xc510e9);}[_0x2c5ac0(0x214)](_0x39fbbd){var _0x1e5bf8=_0x2c5ac0;for(var _0x3979b0=0x0;_0x3979b0<_0x39fbbd[_0x1e5bf8(0x22b)];_0x3979b0++){if((this['_s']['x']+this[_0x1e5bf8(0x1e2)]>=_0x39fbbd[_0x3979b0][_0x1e5bf8(0x1fd)]['x']&&this['_s']['x']-this[_0x1e5bf8(0x1e2)]<=_0x39fbbd[_0x3979b0][_0x1e5bf8(0x1f7)]['x']||this['_s']['x']-this['_radius']<=_0x39fbbd[_0x3979b0][_0x1e5bf8(0x1fd)]['x']&&this['_s']['x']+this['_radius']>=_0x39fbbd[_0x3979b0][_0x1e5bf8(0x1f7)]['x'])&&_0x39fbbd[_0x3979b0][_0x1e5bf8(0x1e9)]()[_0x1e5bf8(0x231)](p5[_0x1e5bf8(0x22f)]['normalize'](this['_v']))<0.5){var _0x55d0cc=_0x39fbbd[_0x3979b0]['getDistance'](this['_s']);if(_0x55d0cc<=this[_0x1e5bf8(0x1e2)]){var _0x1d5717=p5[_0x1e5bf8(0x22f)][_0x1e5bf8(0x1f8)](_0x39fbbd[_0x3979b0][_0x1e5bf8(0x1e9)](),this['_radius']-_0x55d0cc);_0x1d5717[_0x1e5bf8(0x1f8)](0x1+Cr),this['_s'][_0x1e5bf8(0x1d7)](_0x1d5717);var _0x4cd9a3=_0x39fbbd[_0x3979b0][_0x1e5bf8(0x1e9)]()[_0x1e5bf8(0x231)](this['_v']),_0x134f9e=p5[_0x1e5bf8(0x22f)][_0x1e5bf8(0x1f8)](_0x39fbbd[_0x3979b0][_0x1e5bf8(0x1e9)](),-_0x4cd9a3*0x2);_0x134f9e[_0x1e5bf8(0x1f8)](Cr),this['_v'][_0x1e5bf8(0x1d7)](_0x134f9e);}}}}[_0x2c5ac0(0x1e1)](_0x33fc57){var _0x469158=_0x2c5ac0;for(var _0x4082f5=0x0;_0x4082f5<_0x33fc57['length'];_0x4082f5++){var _0x1776a4=p5[_0x469158(0x22f)][_0x469158(0x21b)](_0x33fc57[_0x4082f5]['_s'],this['_s']),_0x66ed66=_0x1776a4[_0x469158(0x22d)]();if(this[_0x469158(0x1da)]!=_0x33fc57[_0x4082f5][_0x469158(0x1da)]){if(_0x66ed66<minDist){_0x1776a4[_0x469158(0x1fe)]();var _0x491486=p5['Vector'][_0x469158(0x1f8)](_0x1776a4,Ke*(minDist-_0x66ed66));_0x491486[_0x469158(0x1d7)](p5['Vector'][_0x469158(0x1f8)](this['_v'],Cr)),this['_v']['add'](p5['Vector'][_0x469158(0x1f8)](_0x491486,-SIM_STEP)),_0x33fc57[_0x4082f5]['_v'][_0x469158(0x1d7)](p5['Vector'][_0x469158(0x1f8)](_0x491486,SIM_STEP));}}}}[_0x2c5ac0(0x1f0)](_0x12f1ac){var _0x567b05=_0x2c5ac0,_0x478872=[];switch(_0x12f1ac){case NONE:_0x478872=this[_0x567b05(0x200)]['getParticleArray']();break;case GRID:_0x478872=_grid[_0x567b05(0x1ea)](this['_s']);break;case HASH:_0x478872=_hashTable['getNeigborhoodHash'](this['_s']);break;}return _0x478872;}[_0x2c5ac0(0x217)](){var _0x44156c=_0x2c5ac0;noStroke();if(colorCells){if(_dataStruct==HASH){var _0xdfbea2=_hashTable[_0x44156c(0x204)](this['_s']);if(_0xdfbea2>=0x0)fill(_hashTable['_colors'][_0xdfbea2]);else fill(0x0);}else{if(_dataStruct==GRID){var _0xdfbea2=_grid[_0x44156c(0x205)](this['_s']);if(_0xdfbea2>=0x0)fill(_grid[_0x44156c(0x1f2)][_0xdfbea2]);else fill(0x0);}else fill(this[_0x44156c(0x1eb)]);}}else fill(this[_0x44156c(0x1eb)]);var _0x16ac29=createVector();worldToScreen(this['_s'],_0x16ac29),circle(_0x16ac29['x'],_0x16ac29['y'],worldToPixels(0x2*this[_0x44156c(0x1e2)]));}}class ParticleSystem{constructor(){var _0x37befe=_0x2c5ac0;this[_0x37befe(0x1f1)]=[],this['_n']=0x0;}[_0x2c5ac0(0x201)](_0x2de938,_0x42252e,_0x213dbf,_0x475981,_0x2f38d4){var _0x32a05d=_0x2c5ac0,_0x3b972b=new Particle(this,_0x2de938,_0x42252e,_0x213dbf,_0x475981,_0x2f38d4);this[_0x32a05d(0x1f1)][_0x32a05d(0x229)](_0x3b972b),this['_n']++;}[_0x2c5ac0(0x1fb)](){}[_0x2c5ac0(0x1e8)](){return this['_n'];}['getParticleArray'](){var _0x52d476=_0x2c5ac0;return this[_0x52d476(0x1f1)];}[_0x2c5ac0(0x1e7)](){for(var _0x5ab023=this['_n']-0x1;_0x5ab023>=0x0;_0x5ab023--){var _0x55b1bb=this['_particles'][_0x5ab023];_0x55b1bb['update']();}}[_0x2c5ac0(0x1f9)](_0x5e775b,_0x559254){var _0x2b645b=_0x2c5ac0;for(var _0x438752=0x0;_0x438752<this[_0x2b645b(0x1f1)][_0x2b645b(0x22b)];_0x438752++){this['_particles'][_0x438752]['planeCollision'](_0x5e775b);if(_0x559254)this['_particles'][_0x438752][_0x2b645b(0x1e1)](this[_0x2b645b(0x1f1)][_0x438752][_0x2b645b(0x1f0)](_dataStruct));}}[_0x2c5ac0(0x217)](){var _0x97d509=_0x2c5ac0;for(var _0x1c492b=this['_n']-0x1;_0x1c492b>=0x0;_0x1c492b--){var _0x5cbbb8=this[_0x97d509(0x1f1)][_0x1c492b];_0x5cbbb8[_0x97d509(0x217)]();}}['insertGrid'](){var _0x2394c5=_0x2c5ac0;_grid['resetGrid']();for(var _0x58969b=0x0;_0x58969b<this[_0x2394c5(0x1f1)][_0x2394c5(0x22b)];_0x58969b++){_grid[_0x2394c5(0x225)](this['_particles'][_0x58969b]);}}['insertHash'](){var _0x53f741=_0x2c5ac0;_hashTable[_0x53f741(0x21a)]();for(var _0x425389=0x0;_0x425389<this[_0x53f741(0x1f1)][_0x53f741(0x22b)];_0x425389++){_hashTable['insert'](this[_0x53f741(0x1f1)][_0x425389]);}}}class PlaneSection{constructor(_0x4b03b3,_0x5bee33,_0x3c4153,_0x5e48bf,_0x481a39){var _0x355851=_0x2c5ac0;this[_0x355851(0x1fd)]=createVector(_0x4b03b3,_0x5bee33),this[_0x355851(0x1f7)]=createVector(_0x3c4153,_0x5e48bf),this[_0x355851(0x1d6)]=_0x481a39,this[_0x355851(0x210)](),this[_0x355851(0x1f4)](this[_0x355851(0x1d6)]);}[_0x2c5ac0(0x223)](){return this['_pos1'];}[_0x2c5ac0(0x222)](){var _0x54ea22=_0x2c5ac0;return this[_0x54ea22(0x1f7)];}[_0x2c5ac0(0x210)](){var _0x5171d1=_0x2c5ac0;this[_0x5171d1(0x1d9)]=[];var _0x3b4952=createVector(this['_pos2']['x']-this[_0x5171d1(0x1fd)]['x'],this[_0x5171d1(0x1f7)]['y']-this[_0x5171d1(0x1fd)]['y'],0x0),_0x5f597b=createVector(this[_0x5171d1(0x1f7)]['x']-this[_0x5171d1(0x1fd)]['x'],this['_pos2']['y']-this['_pos1']['y'],0x1);this[_0x5171d1(0x1d9)][0x0]=_0x3b4952['y']*_0x5f597b['z']-_0x5f597b['y']*_0x3b4952['z'],this[_0x5171d1(0x1d9)][0x1]=-(_0x3b4952['x']*_0x5f597b['z']-_0x5f597b['x']*_0x3b4952['z']),this[_0x5171d1(0x1d9)][0x2]=_0x3b4952['x']*_0x5f597b['y']-_0x5f597b['x']*_0x3b4952['y'],this[_0x5171d1(0x1d9)][0x3]=-this[_0x5171d1(0x1d9)][0x0]*this[_0x5171d1(0x1fd)]['x']-this['_coefs'][0x1]*this[_0x5171d1(0x1fd)]['y']-this[_0x5171d1(0x1d9)][0x2]*this[_0x5171d1(0x1fd)]['z'];}[_0x2c5ac0(0x1f4)](_0x1bced4){var _0x5ece1f=_0x2c5ac0;this['_normal']=createVector(this[_0x5ece1f(0x1d9)][0x0],this['_coefs'][0x1],this['_coefs'][0x2]),this[_0x5ece1f(0x209)]['normalize']();if(_0x1bced4)this[_0x5ece1f(0x209)][_0x5ece1f(0x1f8)](-0x1);}[_0x2c5ac0(0x218)](_0x20ba17){var _0x445e36=_0x2c5ac0,_0x53a50=(this[_0x445e36(0x1d9)][0x0]*_0x20ba17['x']+this[_0x445e36(0x1d9)][0x1]*_0x20ba17['y']+this[_0x445e36(0x1d9)][0x2]*_0x20ba17['z']+this[_0x445e36(0x1d9)][0x3])/sqrt(this['_coefs'][0x0]*this[_0x445e36(0x1d9)][0x0]+this[_0x445e36(0x1d9)][0x1]*this[_0x445e36(0x1d9)][0x1]+this[_0x445e36(0x1d9)][0x2]*this[_0x445e36(0x1d9)][0x2]);return abs(_0x53a50);}[_0x2c5ac0(0x1e9)](){var _0x236e8d=_0x2c5ac0;return this[_0x236e8d(0x209)];}[_0x2c5ac0(0x1fa)](){var _0x45f9f1=_0x2c5ac0;stroke(0x0),strokeWeight(0x3);var _0x38e710=createVector(),_0x158740=createVector();worldToScreen(this['_pos1'],_0x38e710),worldToScreen(this[_0x45f9f1(0x1f7)],_0x158740),line(_0x38e710['x'],_0x38e710['y'],_0x158740['x'],_0x158740['y']);}}function initializeFields(){SIM_STEP=0.01,_simTime=0x0,_lastTimeDraw=0x0,_deltaTimeDraw=0x0,_elapsedTime=0x0,_collisionsTime=0x0,_dataStructTime=0x0,_integrationTime=0x0,_drawTime=0x0,iteration=0x0,_output=null,createoutput=![],SUM_fps=0x0,SUM_calc=0x0,SUM_iter=0x0,N_ITERATIONS=0x12c,PARTICLE_JUMP=0x1f4,MAX_PARTICLES=0xbb8,_system=null,_planes=null,_grid=null,_hashTable=null,_computeParticleCollisions=!![],BACKGROUND_COLOR=[0xc8,0xc8,0xff],PIXELS_PER_METER=0xa,DISPLAY_CENTER=createVector(0x0,0x0),DISPLAY_SIZE_X=0x320,DISPLAY_SIZE_Y=0x320,FULL_SCREEN=![],drawPlane=!![],colorCells=![],showCells=![],substance='DEFAULT',_dataStruct=HASH,n_particles=0x64,PARTICLES_SIZE=0.9,M=0.1,Gc=9.801,G=createVector(0x0,-Gc),Cr=0.7,Kr=0.03,Ke=0xc8,minDist=PARTICLES_SIZE,plane6=null,GRID_ROWS=DISPLAY_SIZE_X/DISPLAY_SIZE_Y*0xa,GRID_COLS=DISPLAY_SIZE_X/DISPLAY_SIZE_Y*0xa,HASH_CELLS=0x2*n_particles,HASH_CELL_SIZE=DISPLAY_SIZE_X/0x320*0x64;}function windowResized(){var _0x30d938=_0x2c5ac0,_0x2d4304=document['getElementById'](_0x30d938(0x1f6));_0x2d4304!=null&&(DISPLAY_SIZE_X=_0x2d4304[_0x30d938(0x211)],PIXELS_PER_METER=DISPLAY_SIZE_X/DISPLAY_SIZE_Y*0x32,resizeCanvas(DISPLAY_SIZE_X,DISPLAY_SIZE_Y));}function _0x13f2(_0x337d39,_0x44a913){var _0x424e44=_0x424e();return _0x13f2=function(_0x13f2fe,_0x445048){_0x13f2fe=_0x13f2fe-0x1d6;var _0x255ec2=_0x424e44[_0x13f2fe];return _0x255ec2;},_0x13f2(_0x337d39,_0x44a913);}function _0x424e(){var _0x2a0257=['_radius','NONE','_cellsizeX','_cellsizeY','addEventListener','run','getNumParticles','getNormal','getNeigborhoodGrid','_color','5gFxcew','7016955DSwzWo','(X)\x20Show\x20cells\x20=\x20','copy','getNeighborhood','_particles','_colors','4306484rYrYYQ','calculateNormal','HASH','div-canvas','_pos2','mult','computeCollisions','draw','restart','(P)\x20Bottom\x20drawPlane\x20=\x20','_pos1','normalize','\x20\x20-Compute\x20collisions\x20=\x20','_ps','addParticle','HONEY','Sim.\x20Time\x20','hash','getCelda','7010670yGTGnQ','Sim.\x20Step\x20=\x20','(N)\x20None,\x20(G)\x20Grid,\x20(H)\x20Hash\x20=\x20','_normal','div','_nCols','(1)\x20Gas,\x20(2)\x20Water,\x20(3)\x20Honey\x20=\x20','_cellSize','1638999FVsfsm','resetGrid','setCoefficients','offsetWidth','update','_numCells','planeCollision','16gYqgNm','\x20\x20-Integrate\x20equations\x20=\x20','display','getDistance','\x20\x20-Update\x20data\x20structure\x20=\x20','resetHash','sub','(R)\x20Restart\x20simulation','\x20\x20-Draw\x20screen\x20=\x20','N,\x20particles\x20=\x20','_table','131854rLsOoy','updateForce','getPoint2','getPoint1','p5-canvas','insert','resize','GAS','2790378VhdzDo','push','GRID','length','2099041GdOWyQ','mag','WATER','Vector','_nRows','dot','inverted','add','Calculation\x20times:\x20','_coefs','_id','insertGrid','6KtyFNE','_cells','(C)\x20Color\x20cells\x20=\x20','9oAHOXl','Draw\x20Freq.\x20=\x20','particleCollisionSpringModel'];_0x424e=function(){return _0x2a0257;};return _0x424e();}window[_0x2c5ac0(0x1e6)](_0x2c5ac0(0x226),windowResized(),![]);