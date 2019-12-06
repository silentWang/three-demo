import * as THREE from 'three'

class Main{
    constructor(){
        this.init();
    }
    private scene:THREE.Scene;
    private camera:THREE.Camera;
    private renderer:THREE.WebGLRenderer;
    private myCube:THREE.Mesh;
    private init(){
        let scene = new THREE.Scene();
        this.scene = scene;
        let camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.01,1000);
        this.camera = camera;
        let renderer = new THREE.WebGLRenderer();
        renderer.setSize(window.innerWidth,window.innerHeight);
        document.body.appendChild(renderer.domElement);
        this.renderer = renderer;

        let geometry = new THREE.BoxGeometry(1,1,1);
        let material = new THREE.MeshBasicMaterial({color:0xfff000});
        let cube = new THREE.Mesh(geometry,material);
        scene.add(cube);
        this.myCube = cube;

        camera.position.z = 5;

        this.animate();
    }

    private animate(){
        requestAnimationFrame(this.animate.bind(this));
        this.renderer.render(this.scene,this.camera);
        this.loop();
    }

    private loop(){
        this.myCube.rotation.x += 0.01;
        this.myCube.rotation.y += 0.01;
        this.myCube.rotation.z += 0.01;
    }
}
new Main();