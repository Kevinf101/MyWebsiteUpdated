import './style.css'
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1 ,1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
})

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);

camera.position.setZ(30);

renderer.render(scene, camera);

//****************SETUP DONE************************/

//create legs for the desk
function createDesk(){
  const legGeo = new THREE.BoxGeometry(2,10,2);
  const legMat = new THREE.MeshStandardMaterial({color: 0x42f5e0});
  const legDone = new THREE.Mesh(legGeo, legMat);
  legDone.position.y =5;
  return legDone;
}

const ambientLight = new THREE.AmbientLight(0xffffff);

const bgWallGeo = new THREE.BoxGeometry(50,50,1);
const bgWallMat = new THREE.MeshStandardMaterial({color: 0xFF6347});
const bgWall = new THREE.Mesh(bgWallGeo, bgWallMat);
bgWall.position.z = -5;

const gridHelper = new THREE.GridHelper(200,50);
scene.add(gridHelper);

scene.add(bgWall);
scene.add(ambientLight);

renderer.render(scene, camera);


const controls = new OrbitControls(camera, renderer.domElement);

const leg1 = createDesk();
leg1.position.x = 10;
const leg2 = createDesk();
leg2.position.x = -10;
const leg3 = createDesk();
leg3.position.x = -10;
leg3.position.z = 10;
const leg4 = createDesk();
leg4.position.x = 10;
leg4.position.z = 10;

scene.add(leg1, leg2, leg3, leg4);
renderer.render(scene, camera);



function animate(){
  requestAnimationFrame(animate)
  //updates controls for the Orbit controls in the UI
  controls.update;
  renderer.render(scene, camera);
}

animate()