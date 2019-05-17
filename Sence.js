var scene = new THREE.Scene(); 
var camera = new THREE.PerspectiveCamera(20, window.innerWidth/window.innerHeight, 1, 10000); 
var renderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
var controls = new THREE.OrbitControls( camera );
function animate() {
    requestAnimationFrame(animate);
    // required if controls.enableDamping or controls.autoRotate are set to true
    controls.update();
    renderer.render(scene, camera);
}
//controls.update() must be called after any manual changes to the camera's transform
camera.position.set(20, 20, 20);
controls.update();
animate();
var onProgress = function ( xhr ) {
    if ( xhr.lengthComputable ) {
        var percentComplete = xhr.loaded / xhr.total * 100;
        console.log( Math.round( percentComplete, 2 ) + '% downloaded' );
    }
};