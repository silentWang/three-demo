import * as THREE from 'three'

class Main{
    constructor(){
        this.init();
    }
    private init(){
        let scene = new THREE.Scene();
        console.log(scene);
    }
}
new Main();