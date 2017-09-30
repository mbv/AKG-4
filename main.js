window.requestAnimationFrame = (function () {
   return window.requestAnimationFrame ||
         window.webkitRequestAnimationFrame ||
         window.mozRequestAnimationFrame ||
         function (callback) {
             window.setTimeout(callback, 1000 / 600);
         };
     })();

var canvas;
var canvas2;
var device;
var device2;
var mesh;
var meshes = [];
var mera;
var mera2;
var axis;
var cubeA = 10;
document.addEventListener("DOMContentLoaded", init, false);
function init() {
    canvas = document.getElementById("frontBuffer");
    canvas2 = document.getElementById("frontBuffer2");
    mera = new SoftEngine.Camera();
    mera2 = new SoftEngine.Camera();
    device = new SoftEngine.Device(canvas);
    device2 = new SoftEngine.Device(canvas2);
    mesh = new SoftEngine.Mesh("Cube", 19, 18);
    meshes.push(mesh);
    mesh.Vertices[0] = new HELPER.Vector3(0, 0, 0);
    mesh.Vertices[1] = new HELPER.Vector3(cubeA, 0, 0);
    mesh.Vertices[2] = new HELPER.Vector3(cubeA, -cubeA, 0);
    mesh.Vertices[3] = new HELPER.Vector3(0, -cubeA, 0);
    mesh.Vertices[4] = new HELPER.Vector3(0, 0, -cubeA);
    mesh.Vertices[5] = new HELPER.Vector3(cubeA, 0, -cubeA);
    mesh.Vertices[6] = new HELPER.Vector3(cubeA, -cubeA, -cubeA);
    mesh.Vertices[7] = new HELPER.Vector3(0, -cubeA, -cubeA);
    mesh.Vertices[8] = new HELPER.Vector3(0, 0, cubeA);
    mesh.Vertices[9] = new HELPER.Vector3(0, -cubeA, cubeA);
    mesh.Vertices[10] = new HELPER.Vector3(-cubeA, -cubeA, cubeA);
    mesh.Vertices[11] = new HELPER.Vector3(-cubeA, 0, cubeA);
    mesh.Vertices[12] = new HELPER.Vector3(-cubeA, 0, 0);
    mesh.Vertices[13] = new HELPER.Vector3(-cubeA, -cubeA, 0);
    mesh.Vertices[14] = new HELPER.Vector3(-cubeA, cubeA, 0);
    mesh.Vertices[15] = new HELPER.Vector3(0, cubeA, 0);
    mesh.Vertices[16] = new HELPER.Vector3(-cubeA, 0, -cubeA);
    mesh.Vertices[17] = new HELPER.Vector3(-cubeA, cubeA, -cubeA);
    mesh.Vertices[18] = new HELPER.Vector3(0, cubeA, -cubeA);

    mesh.Faces[0] = {
        A: 0,
        B: 1,
        C: 2,
        D: 3
    };
    mesh.Faces[1] = {
        A: 0,
        B: 1,
        C: 5,
        D: 4
    };
    mesh.Faces[2] = {
        A: 1,
        B: 2,
        C: 6,
        D: 5
    };
    mesh.Faces[3] = {
        A: 2,
        B: 3,
        C: 7,
        D: 6
    };
    mesh.Faces[4] = {
        A: 3,
        B: 0,
        C: 4,
        D: 7
    };
    mesh.Faces[5] = {
        A: 4,
        B: 5,
        C: 6,
        D: 7
    };



    mesh.Faces[6] = {
        A: 11,
        B: 8,
        C: 9,
        D: 10
    };
    mesh.Faces[7] = {
        A: 11,
        B: 8,
        C: 0,
        D: 12
    };
    mesh.Faces[8] = {
        A: 8,
        B: 9,
        C: 3,
        D: 0
    };
    mesh.Faces[9] = {
        A: 9,
        B: 10,
        C: 13,
        D: 3
    };
    mesh.Faces[10] = {
        A: 10,
        B: 11,
        C: 12,
        D: 13
    };
    mesh.Faces[11] = {
        A: 12,
        B: 0,
        C: 3,
        D: 13
    };




    mesh.Faces[12] = {
        A: 14,
        B: 15,
        C: 0,
        D: 12
    };
    mesh.Faces[13] = {
        A: 14,
        B: 15,
        C: 18,
        D: 17
    };
    mesh.Faces[14] = {
        A: 15,
        B: 0,
        C: 4,
        D: 18
    };
    mesh.Faces[15] = {
        A: 0,
        B: 12,
        C: 16,
        D: 4
    };
    mesh.Faces[16] = {
        A: 12,
        B: 14,
        C: 17,
        D: 16
    };
    mesh.Faces[17] = {
        A: 17,
        B: 18,  
        C: 4,
        D: 16
    };


    mesh2 = new SoftEngine.Mesh("Cube", 8, 6);
    meshes.push(mesh2);

    mesh2.Vertices[0] = new HELPER.Vector3(0, 0, 0);
    mesh2.Vertices[1] = new HELPER.Vector3(cubeA, 0, 0);
    mesh2.Vertices[2] = new HELPER.Vector3(cubeA, -cubeA, 0);
    mesh2.Vertices[3] = new HELPER.Vector3(0, -cubeA, 0);
    mesh2.Vertices[4] = new HELPER.Vector3(0, 0, -cubeA);
    mesh2.Vertices[5] = new HELPER.Vector3(cubeA, 0, -cubeA);
    mesh2.Vertices[6] = new HELPER.Vector3(cubeA, -cubeA, -cubeA);
    mesh2.Vertices[7] = new HELPER.Vector3(0, -cubeA, -cubeA);

    mesh2.Faces[0] = {
        A: 0,
        B: 1,
        C: 2,
        D: 3
    };
    mesh2.Faces[1] = {
        A: 0,
        B: 1,
        C: 5,
        D: 4
    };
    mesh2.Faces[2] = {
        A: 1,
        B: 2,
        C: 6,
        D: 5
    };
    mesh2.Faces[3] = {
        A: 2,
        B: 3,
        C: 7,
        D: 6
    };
    mesh2.Faces[4] = {
        A: 3,
        B: 0,
        C: 4,
        D: 7
    };
    mesh2.Faces[5] = {
        A: 4,
        B: 5,
        C: 6,
        D: 7
    };

    mesh2.Position =  new HELPER.Vector3(30, 0, 0);

    //mera.Position = new HELPER.Vector3(100, 90, 100);
    mera.Target = new HELPER.Vector3(0, 0, 0);
    mera2.Target = new HELPER.Vector3(0, 0, 0);
    updateCord();

    axis = new SoftEngine.Axis();
    axis.FirstPoint = new HELPER.Vector3(0, 0, 0);
    axis.SecondPoint = new HELPER.Vector3(-cubeA, cubeA, -cubeA);

    //requestAnimationFrame(drawingLoop);
    drawingLoop();

    document.getElementById("rangeX").addEventListener("input", function (event) {
        mesh.Rotation.x = document.getElementById("rangeX").value / 100;
        draw();
    });
    document.getElementById("rangeY").addEventListener("input", function (event) {
        mesh.Rotation.y = document.getElementById("rangeY").value / 100;
        draw();
    });
    document.getElementById("rangeZ").addEventListener("input", function (event) {
        mesh.Rotation.z = document.getElementById("rangeZ").value / 100;
        draw();
    });
    document.getElementById("rangeMy").addEventListener("input", function (event) {
        axis.angle = document.getElementById("rangeMy").value / 100;
        draw();
    });
    document.getElementById("buttonOK").addEventListener("click", function (event) {
        var x;
        x = document.getElementById("fX").value;
        y = document.getElementById("fY").value;
        z = document.getElementById("fZ").value;
        axis.FirstPoint = new HELPER.Vector3(x, y, z);
        x = document.getElementById("sX").value;
        y = document.getElementById("sY").value;
        z = document.getElementById("sZ").value;
        axis.SecondPoint = new HELPER.Vector3(x, y, z);
        draw();
    });

    document.getElementById("rangeRadius").addEventListener("input", function (event) {
        mera.Radius = document.getElementById("rangeRadius").value;
        updateCord();
        draw();
    });
    document.getElementById("rangeEtha").addEventListener("input", function (event) {
        mera.Etha = document.getElementById("rangeEtha").value / 100;
        updateCord();
        draw();
    });
    document.getElementById("rangePhi").addEventListener("input", function (event) {
        mera.Phi = document.getElementById("rangePhi").value / 100;
        updateCord();
        draw();
    });
}
function drawingLoop() {
    //device.clear();
    //  mesh.Rotation.z += 0.01;
  // mesh.Rotation.y += 0.01;
   //mesh.Position.x += 0.01;
    //device.render(mera, meshes, axis);
    //device.present();
    //mera.Etha += 0.01;
    draw();
    requestAnimationFrame(drawingLoop);
}
function updateCord() {
    var x = mera.Radius * Math.sin(mera.Etha) * Math.cos(mera.Phi);
    var y = mera.Radius * Math.sin(mera.Etha) * Math.sin(mera.Phi);
    var z = mera.Radius * Math.cos(mera.Etha);
    mera.Position = new HELPER.Vector3(x, y, z);
    x = mera.Radius * Math.sin(mera.Etha - 0.5) * Math.cos(mera.Phi);
    y = mera.Radius * Math.sin(mera.Etha - 0.5) * Math.sin(mera.Phi);
    z = mera.Radius * Math.cos(mera.Etha - 0.5);
    mera2.Position = new HELPER.Vector3(x, y, z);
}
var xA = 0;
function draw() {
    device.clear();
    device.render(mera, meshes, axis);
    device.present();
    device.putInfo(mera);

        device2.clear();
        device2.render(mera2, meshes, axis);
        device2.present();

   /* if (xA%2 == 0) {
        device2.clear();
        device2.render(mera, meshes, axis);
        device2.present();
    } else {

        device2.clear();
        device2.render(mera2, meshes, axis);
        device2.present();
    }
    xA ++;*/
}