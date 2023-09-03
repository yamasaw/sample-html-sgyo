// ページの読み込みを待つ
window.addEventListener(`DOMContentLoaded`, () => {
    const myCanvas = document.querySelector('#myCanvas');

    // 座表軸
    const axes = new THREE.AxesHelper();

    // シーンを初期化
    const scene = new THREE.Scene();
    scene.add(axes);

    // カメラを初期化
    const camera = new THREE.PerspectiveCamera(
      50,
      myCanvas.offsetWidth / myCanvas.offsetHeight
    );
    camera.position.set(1, 1, 1);
    camera.lookAt(scene.position);

    // レンダラーの初期化
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: myCanvas,
    });
    renderer.setClearColor(0xffffff, 1.0); // 背景色
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(myCanvas.offsetWidth, myCanvas.offsetHeight);

    // カメラコントローラー設定
    const orbitControls = new THREE.OrbitControls(
      camera,
      renderer.domElement
    );
    orbitControls.maxPolarAngle = Math.PI * 0.5;
    orbitControls.minDistance = 0.1;
    orbitControls.maxDistance = 100;
    orbitControls.autoRotate = true; // カメラの自動回転設定
    orbitControls.autoRotateSpeed = 1.0; // カメラの自動回転速度

    // 描画ループを開始
    renderer.setAnimationLoop(() => {
      // カメラコントローラーを更新
      orbitControls.update();

      // 描画する
      renderer.render(scene, camera);
    });
  });