var _0x48ae03=_0x24f2;(function(_0x1fa111,_0x578517){var _0x2fdf3f=_0x24f2,_0x3d43d2=_0x1fa111();while(!![]){try{var _0x2c4d94=-parseInt(_0x2fdf3f(0xf1))/0x1+-parseInt(_0x2fdf3f(0x10b))/0x2*(parseInt(_0x2fdf3f(0x100))/0x3)+-parseInt(_0x2fdf3f(0x10e))/0x4+-parseInt(_0x2fdf3f(0x10d))/0x5*(parseInt(_0x2fdf3f(0x107))/0x6)+-parseInt(_0x2fdf3f(0x10f))/0x7*(parseInt(_0x2fdf3f(0x101))/0x8)+parseInt(_0x2fdf3f(0x118))/0x9+parseInt(_0x2fdf3f(0x108))/0xa;if(_0x2c4d94===_0x578517)break;else _0x3d43d2['push'](_0x3d43d2['shift']());}catch(_0x38a206){_0x3d43d2['push'](_0x3d43d2['shift']());}}}(_0x4916,0x598e7));var NONE,EXPLICIT_EULER,SIMPLECTIC_EULER,HEUN,RK2,RK4,REAL_TIME,SIM_STEP,_integrator,FULL_SCREEN,DRAW_FREQ,DISPLAY_SIZE_X=0x320,DISPLAY_SIZE_Y=0x320,BACKGROUND_COLOR,REFERENCE_COLOR,OBJECTS_COLOR,OBJECTS_SIZE,PIXELS_PER_METER,DISPLAY_CENTER,plane,showV,friction,M,Gc,G,l,ang,C1,C2,S0,Ke1,Ke2,l01,l02,Kd,Kf,_lastTimeDraw,_deltaTimeDraw,_simTime,_elapsedTime,_output,FILE_NAME,createoutput,OUTPUT_SIZE,actualSize,_energy,_s,_v,_a,_s2,_v2,_a2;function worldToPixels(_0x457642){return _0x457642*PIXELS_PER_METER;}function pixelsToWorld(_0x19d0d2){return _0x19d0d2/PIXELS_PER_METER;}function worldToScreen(_0x3df75b,_0x115ff6){_0x115ff6['x']=0.5*DISPLAY_SIZE_X+(_0x3df75b['x']+DISPLAY_CENTER['x'])*PIXELS_PER_METER,_0x115ff6['y']=0.5*DISPLAY_SIZE_Y-(_0x3df75b['y']-DISPLAY_CENTER['y'])*PIXELS_PER_METER;}function screenToWorld(_0x30a626,_0x37f9c1){_0x37f9c1['x']=(_0x30a626['x']-0.5*DISPLAY_SIZE_X)/PIXELS_PER_METER+DISPLAY_CENTER['x'],_0x37f9c1['y']=(0.5*DISPLAY_SIZE_Y-_0x30a626['y'])/PIXELS_PER_METER+DISPLAY_CENTER['y'];}function drawStaticEnvironment(){var _0x32356e=_0x24f2;background(BACKGROUND_COLOR[0x0],BACKGROUND_COLOR[0x1],BACKGROUND_COLOR[0x2]),strokeWeight(0x1),stroke(0x0),textSize(0x14),text(_0x32356e(0xf7)+_simTime,width*0.025,height*0.05),text('Sim.\x20Step\x20=\x20'+SIM_STEP+_0x32356e(0xf4)+REAL_TIME+')',width*0.025,height*0.075),text('Integrator\x20=\x20'+_integrator,width*0.025,height*0.1),text('Energy\x20=\x20'+_energy+'\x20J',width*0.025,height*0.125),text(_0x32356e(0x10a)+showV+'\x0a',width*0.025,height*0.15),text(_0x32356e(0x111)+friction+'\x0a',width*0.025,height*0.175),text(_0x32356e(0xfd)+plane+'\x0a',width*0.025,height*0.2),text('(R)\x20Restart\x20simulation',width*0.025,height*0.225),fill(REFERENCE_COLOR[0x0],REFERENCE_COLOR[0x1],REFERENCE_COLOR[0x2]);var _0x584b7c=createVector();worldToScreen(createVector(),_0x584b7c),strokeWeight(0x2);var _0x228350=createVector(),_0x4ef5d7=createVector();worldToScreen(C1,_0x228350),line(_0x584b7c['x'],_0x584b7c['y'],_0x228350['x'],_0x228350['y']),worldToScreen(C2,_0x4ef5d7),line(_0x584b7c['x'],_0x584b7c['y'],_0x4ef5d7['x'],_0x4ef5d7['y']);if(plane)line(_0x228350['x'],_0x228350['y'],_0x4ef5d7['x'],_0x4ef5d7['y']);strokeWeight(0x1),fill(0x0,0x0,0xff),circle(_0x228350['x']+worldToPixels(OBJECTS_SIZE/0x2*sin(ang)),_0x228350['y']-worldToPixels(OBJECTS_SIZE/0x2*cos(ang)),0xa),fill(0x0,0xff,0xff),circle(_0x4ef5d7['x']+worldToPixels(OBJECTS_SIZE/0x2*sin(ang)),_0x4ef5d7['y']-worldToPixels(OBJECTS_SIZE/0x2*cos(ang)),0xa);}function _0x4916(){var _0x46861f=['flush','mag','EXPLICIT_EULER','copy','4026xbhGNc','11101980dcNtnA','POSX,POSY,VELX,VELY,ENERGY','(V)\x20Show\x20velocity\x20vector\x20=\x20','6514lWwLVV','normalize','4535tHbpqm','396772SeNYZd','4193cMWFel','.txt','(F)\x20Friction\x20=\x20','NONE','Vector','HEUN','div-canvas','add','addEventListener','2318166QlNMHl','offsetWidth','dist','lerp','resize','getElementById','195261mAPsyu','SIMPLECTIC_EULER','print','\x20(Real\x20Time\x20=\x20','Simulated\x20time\x20=\x20','mult','Sim.\x20Time\x20','\x20s\x20\x0a','RK2','div','data.txt','parent','(P)\x20Plane\x20=\x20','close','RK4','51fHkjWg','568ONgWyE','sub'];_0x4916=function(){return _0x46861f;};return _0x4916();}function drawMovingElements(){var _0x4731ee=_0x24f2;fill(OBJECTS_COLOR[0x0],OBJECTS_COLOR[0x1],OBJECTS_COLOR[0x2]),strokeWeight(0x1);var _0x1e82f1=createVector();worldToScreen(_s,_0x1e82f1);var _0x5516a1=createVector();worldToScreen(C1,_0x5516a1),line(_0x5516a1['x']+worldToPixels(OBJECTS_SIZE/0x2*sin(ang)),_0x5516a1['y']-worldToPixels(OBJECTS_SIZE/0x2*cos(ang)),_0x1e82f1['x']+worldToPixels(OBJECTS_SIZE/0x2*sin(ang)),_0x1e82f1['y']-worldToPixels(OBJECTS_SIZE/0x2*cos(ang))),worldToScreen(C2,_0x5516a1),line(_0x5516a1['x']+worldToPixels(OBJECTS_SIZE/0x2*sin(ang)),_0x5516a1['y']-worldToPixels(OBJECTS_SIZE/0x2*cos(ang)),_0x1e82f1['x']+worldToPixels(OBJECTS_SIZE/0x2*sin(ang)),_0x1e82f1['y']-worldToPixels(OBJECTS_SIZE/0x2*cos(ang))),circle(_0x1e82f1['x']+worldToPixels(OBJECTS_SIZE/0x2*sin(ang)),_0x1e82f1['y']-worldToPixels(OBJECTS_SIZE/0x2*cos(ang)),worldToPixels(OBJECTS_SIZE)),showV&&(stroke(0xff,0x0,0x0),strokeWeight(0x2),worldToScreen(p5['Vector'][_0x4731ee(0x116)](_s,_v),_0x5516a1),line(_0x1e82f1['x']+worldToPixels(OBJECTS_SIZE/0x2*sin(ang)),_0x1e82f1['y']-worldToPixels(OBJECTS_SIZE/0x2*cos(ang)),_0x5516a1['x']+worldToPixels(OBJECTS_SIZE/0x2*sin(ang)),_0x5516a1['y']-worldToPixels(OBJECTS_SIZE/0x2*cos(ang))));}function PrintInfo(){var _0x261df1=_0x24f2;strokeWeight(0x1),stroke(0x0),print('Energy:\x20'+_energy+'\x20J'),print('Elapsed\x20time\x20=\x20'+_elapsedTime+'\x20s'),print(_0x261df1(0xf5)+_simTime+_0x261df1(0xf8));}function initSimulation(){var _0x5ebc5b=_0x24f2;_simTime=0x0,_elapsedTime=0x0,_s=S0[_0x5ebc5b(0x106)](),_a=createVector(),_v=createVector(),_s2=createVector(),_v2=createVector(),_a2=createVector();}function updateSimulation(){var _0x3188ae=_0x24f2;switch(_integrator){case'EXPLICIT_EULER':updateSimulationExplicitEuler();break;case _0x3188ae(0xf2):updateSimulationSimplecticEuler();break;case _0x3188ae(0x114):updateSimulationHeun();break;case _0x3188ae(0xf9):updateSimulationRK2();break;case _0x3188ae(0xff):updateSimulationRK4();break;case _0x3188ae(0x112):break;}calculateEnergy();if(createoutput)printOutput();_simTime+=SIM_STEP;}function updateSimulationExplicitEuler(){var _0xcb6978=_0x24f2;_a=calculateAcceleration(_s,_v),_s[_0xcb6978(0x116)](p5[_0xcb6978(0x113)][_0xcb6978(0xf6)](_v,SIM_STEP)),_v['add'](p5[_0xcb6978(0x113)][_0xcb6978(0xf6)](_a,SIM_STEP));}function updateSimulationSimplecticEuler(){var _0x1d0ed0=_0x24f2;_a=calculateAcceleration(_s,_v),_v[_0x1d0ed0(0x116)](p5[_0x1d0ed0(0x113)][_0x1d0ed0(0xf6)](_a,SIM_STEP)),_s[_0x1d0ed0(0x116)](p5['Vector'][_0x1d0ed0(0xf6)](_v,SIM_STEP));}function updateSimulationHeun(){var _0x3074f3=_0x24f2;_a=calculateAcceleration(_s,_v),_s2[_0x3074f3(0x116)](p5[_0x3074f3(0x113)][_0x3074f3(0xf6)](_v,SIM_STEP)),_v2['add'](p5[_0x3074f3(0x113)]['mult'](_a,SIM_STEP));var _0x53f0b3=p5[_0x3074f3(0x113)][_0x3074f3(0x11b)](_v,_v2,0.5);_s[_0x3074f3(0x116)](p5[_0x3074f3(0x113)][_0x3074f3(0xf6)](_0x53f0b3,SIM_STEP)),_a2=calculateAcceleration(_s,_v2);var _0x57f5e7=p5['Vector']['lerp'](_a,_a2,0.5);_v['add'](p5[_0x3074f3(0x113)][_0x3074f3(0xf6)](_0x57f5e7,SIM_STEP));}function updateSimulationRK2(){var _0x1f58df=_0x24f2,_0x13531c=calculateAcceleration(_s,_v),_0x4d9b80=p5['Vector'][_0x1f58df(0xf6)](_0x13531c,SIM_STEP),_0x4ba6cb=p5[_0x1f58df(0x113)]['mult'](_v,SIM_STEP),_0x4a5871=calculateAcceleration(p5['Vector'][_0x1f58df(0x116)](_s,p5[_0x1f58df(0x113)][_0x1f58df(0xfa)](_0x4ba6cb,0x2)),p5[_0x1f58df(0x113)][_0x1f58df(0x116)](_v,p5[_0x1f58df(0x113)][_0x1f58df(0xfa)](_0x4d9b80,0x2))),_0x13b90e=p5[_0x1f58df(0x113)][_0x1f58df(0xf6)](_0x4a5871,SIM_STEP),_0x105294=p5['Vector'][_0x1f58df(0xf6)](p5[_0x1f58df(0x113)][_0x1f58df(0x116)](_v,p5[_0x1f58df(0x113)][_0x1f58df(0xfa)](_0x13b90e,0x2)),SIM_STEP);_v[_0x1f58df(0x116)](_0x13b90e),_s[_0x1f58df(0x116)](_0x105294);}function updateSimulationRK4(){var _0x92b536=_0x24f2,_0x4612f2=calculateAcceleration(_s,_v),_0x2e4a09=p5[_0x92b536(0x113)][_0x92b536(0xf6)](_0x4612f2,SIM_STEP),_0x5091f5=p5[_0x92b536(0x113)]['mult'](_v,SIM_STEP),_0x1d793a=calculateAcceleration(p5[_0x92b536(0x113)][_0x92b536(0x116)](_s,p5['Vector'][_0x92b536(0xfa)](_0x5091f5,0x2)),p5[_0x92b536(0x113)][_0x92b536(0x116)](_v,p5[_0x92b536(0x113)]['div'](_0x2e4a09,0x2))),_0x18f81b=p5[_0x92b536(0x113)]['mult'](_0x1d793a,SIM_STEP),_0xd7ee10=p5[_0x92b536(0x113)][_0x92b536(0xf6)](p5[_0x92b536(0x113)][_0x92b536(0x116)](_v,p5['Vector'][_0x92b536(0xfa)](_0x18f81b,0x2)),SIM_STEP),_0x4690e1=calculateAcceleration(p5['Vector'][_0x92b536(0x116)](_s,p5['Vector'][_0x92b536(0xfa)](_0xd7ee10,0x2)),p5[_0x92b536(0x113)][_0x92b536(0x116)](_v,p5[_0x92b536(0x113)][_0x92b536(0xfa)](_0x18f81b,0x2))),_0x13ba9f=p5[_0x92b536(0x113)][_0x92b536(0xf6)](_0x4690e1,SIM_STEP),_0x441182=p5[_0x92b536(0x113)][_0x92b536(0xf6)](p5[_0x92b536(0x113)][_0x92b536(0x116)](_v,p5['Vector'][_0x92b536(0xfa)](_0x13ba9f,0x2)),SIM_STEP),_0x38bd31=calculateAcceleration(p5[_0x92b536(0x113)]['add'](_s,_0x441182),p5[_0x92b536(0x113)][_0x92b536(0x116)](_v,_0x13ba9f)),_0x4a681d=p5['Vector'][_0x92b536(0xf6)](_0x38bd31,SIM_STEP),_0x1e996c=p5[_0x92b536(0x113)][_0x92b536(0xf6)](p5['Vector'][_0x92b536(0x116)](_v,_0x13ba9f),SIM_STEP);_v[_0x92b536(0x116)](p5[_0x92b536(0x113)][_0x92b536(0xf6)](_0x2e4a09,0x1/0x6)),_v[_0x92b536(0x116)](p5[_0x92b536(0x113)][_0x92b536(0xf6)](_0x18f81b,0x1/0x3)),_v[_0x92b536(0x116)](p5[_0x92b536(0x113)][_0x92b536(0xf6)](_0x13ba9f,0x1/0x3)),_v[_0x92b536(0x116)](p5['Vector'][_0x92b536(0xf6)](_0x4a681d,0x1/0x6)),_s['add'](p5[_0x92b536(0x113)][_0x92b536(0xf6)](_0x5091f5,0x1/0x6)),_s[_0x92b536(0x116)](p5['Vector'][_0x92b536(0xf6)](_0xd7ee10,0x1/0x3)),_s[_0x92b536(0x116)](p5[_0x92b536(0x113)][_0x92b536(0xf6)](_0x441182,0x1/0x3)),_s[_0x92b536(0x116)](p5[_0x92b536(0x113)][_0x92b536(0xf6)](_0x1e996c,0x1/0x6));}function calculateAcceleration(_0x4289e4,_0x22b188){var _0x177e5b=_0x24f2,_0x464c48=p5[_0x177e5b(0x113)][_0x177e5b(0x102)](C1,_0x4289e4),_0x14113d=_0x464c48[_0x177e5b(0x104)]();_0x464c48['normalize']();var _0xfa79ee=p5[_0x177e5b(0x113)][_0x177e5b(0x102)](C2,_0x4289e4),_0x1ce959=_0xfa79ee[_0x177e5b(0x104)]();_0xfa79ee[_0x177e5b(0x10c)]();var _0x505b66=p5[_0x177e5b(0x113)]['mult'](_0x464c48,Ke1*(_0x14113d-l01)),_0x5068ee=p5[_0x177e5b(0x113)][_0x177e5b(0xf6)](_0xfa79ee,Ke2*(_0x1ce959-l02)),_0x245b4a=p5[_0x177e5b(0x113)][_0x177e5b(0xf6)](G,M),_0x59f3ef;if(plane)_0x59f3ef=createVector(-sin(ang),-cos(ang)),_0x59f3ef[_0x177e5b(0x10c)](),_0x59f3ef[_0x177e5b(0xf6)](_0x245b4a['y']*cos(ang));else _0x59f3ef=createVector();var _0x127a14,_0x5eedd4;_0x127a14=p5[_0x177e5b(0x113)]['mult'](_0x22b188,-Kd*_0x22b188['mag']());var _0x3c7f6c=_0x22b188[_0x177e5b(0x106)]();_0x3c7f6c[_0x177e5b(0x10c)](),_0x5eedd4=p5[_0x177e5b(0x113)][_0x177e5b(0xf6)](_0x3c7f6c,-Kf*_0x59f3ef[_0x177e5b(0x104)]());var _0x86e00=p5[_0x177e5b(0x113)][_0x177e5b(0x116)](_0x505b66,_0x5068ee);_0x86e00[_0x177e5b(0x116)](_0x245b4a),_0x86e00[_0x177e5b(0x116)](_0x59f3ef);friction&&(_0x86e00[_0x177e5b(0x116)](_0x127a14),_0x86e00[_0x177e5b(0x116)](_0x5eedd4));var _0x4f3c6b=p5[_0x177e5b(0x113)][_0x177e5b(0xfa)](_0x86e00,M);return _0x4f3c6b;}function calculateEnergy(){var _0x4eff6f=_0x24f2,_0x8746bd=0.5*M*pow(_v[_0x4eff6f(0x104)](),0x2),_0x577414=M*Gc*_s['y'],_0x2d6f25=0.5*Ke1*pow(p5[_0x4eff6f(0x113)][_0x4eff6f(0x11a)](C1,_s)-l01,0x2),_0x598037=0.5*Ke2*pow(p5['Vector']['dist'](C2,_s)-l02,0x2);_energy=abs(_0x8746bd+_0x577414+_0x2d6f25+_0x598037);}function setup(){var _0x30c4bd=_0x24f2;initializeFields(),windowResized();var _0x1e37a4=createCanvas(DISPLAY_SIZE_X,DISPLAY_SIZE_Y);_0x1e37a4[_0x30c4bd(0xfc)]('p5-canvas'),_lastTimeDraw=millis(),initSimulation();}function draw(){var _0x5dd529=millis();_deltaTimeDraw=(_0x5dd529-_lastTimeDraw)/0x3e8,_elapsedTime+=_deltaTimeDraw,_lastTimeDraw=_0x5dd529;if(REAL_TIME){var _0x35c51d=0x1*_deltaTimeDraw,_0x352687=_0x35c51d/SIM_STEP,_0x3b6ec5=0x0;for(;_0x3b6ec5<floor(_0x352687);_0x3b6ec5++)updateSimulation();_0x352687-_0x3b6ec5>random(0x0,0x1)&&(updateSimulation(),_0x3b6ec5++);}else updateSimulation();drawStaticEnvironment(),drawMovingElements();}function keyPressed(){if(key=='P'||key=='p'){plane=!plane;if(plane)initSimulation();}if(key=='r'||key=='R')initSimulation();if(key=='+')SIM_STEP*=1.1;if(key=='-')SIM_STEP/=1.1;if(key=='e'||key=='E')_integrator=EXPLICIT_EULER;if(key=='s'||key=='S')_integrator=SIMPLECTIC_EULER;if(key=='h'||key=='H')_integrator=HEUN;if(key=='2')_integrator=RK2;if(key=='4')_integrator=RK4;if(key=='n'||key=='N')_integrator=NONE;if(key=='v'||key=='V')showV=!showV;if(key=='f'||key=='F')friction=!friction;}function printOutput(){var _0x5f5795=_0x24f2;if(actualSize<OUTPUT_SIZE)_output[_0x5f5795(0xf3)](_s['x']+','+_s['y']+','+_v['x']+','+_v['y']+','+_energy),actualSize++;else stopOutput();}function startOutput(){var _0x23ad9a=_0x24f2;createoutput=!![],actualSize=0x0;var _0x2ae51f=_integrator+'-'+SIM_STEP+_0x23ad9a(0x110);_output=createWriter(_0x2ae51f),_output[_0x23ad9a(0xf3)](_0x23ad9a(0x109)),initSimulation();}function stopOutput(){var _0x176859=_0x24f2;createoutput=![],_output[_0x176859(0x103)](),_output[_0x176859(0xfe)]();}function initializeFields(){var _0x3c26eb=_0x24f2;NONE=_0x3c26eb(0x112),EXPLICIT_EULER=_0x3c26eb(0x105),SIMPLECTIC_EULER=_0x3c26eb(0xf2),HEUN=_0x3c26eb(0x114),RK2=_0x3c26eb(0xf9),RK4=_0x3c26eb(0xff),REAL_TIME=!![],SIM_STEP=0.01,_integrator=RK4,FULL_SCREEN=![],DRAW_FREQ=0x32,BACKGROUND_COLOR=[0xc8,0xc8,0xff],REFERENCE_COLOR=[0x0,0xff,0x0],OBJECTS_COLOR=[0xff,0x0,0x0],OBJECTS_SIZE=0x1,PIXELS_PER_METER=0x14,DISPLAY_CENTER=createVector(-0xa,0xa),plane=!![],showV=![],friction=!![],M=0x1,Gc=9.801,G=createVector(0x0,-Gc),l=0x14,ang=PI/0x5,C1=createVector(l*cos(ang),0x0),C2=createVector(0x0,l*sin(ang)),S0=createVector(C1['x']/0x2,C2['y']/0x2),Ke1=0.5,Ke2=0.7,l01=0x4,l02=0x5,Kd=0.01,Kf=0.04,_lastTimeDraw=0x0,_deltaTimeDraw=0x0,_simTime=0x0,_elapsedTime=0x0,_output=null,FILE_NAME=_0x3c26eb(0xfb),createoutput=![],OUTPUT_SIZE=0x1f4,actualSize=0x0,_energy=0x0,_s=createVector(),_v=createVector(),_a=createVector(),_s2=createVector(),_v2=createVector(),_a2=createVector();}function windowResized(){var _0x4cd02b=_0x24f2,_0x473c2b=document[_0x4cd02b(0x11d)](_0x4cd02b(0x115));_0x473c2b!=null&&(DISPLAY_SIZE_X=_0x473c2b[_0x4cd02b(0x119)],PIXELS_PER_METER=DISPLAY_SIZE_X/DISPLAY_SIZE_Y*0x14,resizeCanvas(DISPLAY_SIZE_X,DISPLAY_SIZE_Y));}function _0x24f2(_0x3a5471,_0x563242){var _0x491679=_0x4916();return _0x24f2=function(_0x24f288,_0x2e9266){_0x24f288=_0x24f288-0xf1;var _0x530a2b=_0x491679[_0x24f288];return _0x530a2b;},_0x24f2(_0x3a5471,_0x563242);}window[_0x48ae03(0x117)](_0x48ae03(0x11c),windowResized(),![]);