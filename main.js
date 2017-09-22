window.requestAnimationFrame = (function () {
   return window.requestAnimationFrame ||
         window.webkitRequestAnimationFrame ||
         window.mozRequestAnimationFrame ||
         function (callback) {
             window.setTimeout(callback, 1000 / 60);
         };
     })();

var canvas;
var device;
var mesh;
var meshes = [];
var mera;
document.addEventListener("DOMContentLoaded", init, false);
function init() {
    canvas = document.getElementById("frontBuffer");
    mera = new SoftEngine.Camera();
    device = new SoftEngine.Device(canvas);
    mesh = new SoftEngine.Mesh("Cube", 19, 18);
    meshes.push(mesh);
    mesh.Vertices[0] = new HELPER.Vector3(0, 0, 0);
    mesh.Vertices[1] = new HELPER.Vector3(1, 0, 0);
    mesh.Vertices[2] = new HELPER.Vector3(1, -1, 0);
    mesh.Vertices[3] = new HELPER.Vector3(0, -1, 0);
    mesh.Vertices[4] = new HELPER.Vector3(0, 0, -1);
    mesh.Vertices[5] = new HELPER.Vector3(1, 0, -1);
    mesh.Vertices[6] = new HELPER.Vector3(1, -1, -1);
    mesh.Vertices[7] = new HELPER.Vector3(0, -1, -1);
    mesh.Vertices[8] = new HELPER.Vector3(0, 0, 1);
    mesh.Vertices[9] = new HELPER.Vector3(0, -1, 1);
    mesh.Vertices[10] = new HELPER.Vector3(-1, -1, 1);
    mesh.Vertices[11] = new HELPER.Vector3(-1, 0, 1);
    mesh.Vertices[12] = new HELPER.Vector3(-1, 0, 0);
    mesh.Vertices[13] = new HELPER.Vector3(-1, -1, 0);
    mesh.Vertices[14] = new HELPER.Vector3(-1, 1, 0);
    mesh.Vertices[15] = new HELPER.Vector3(0, 1, 0);
    mesh.Vertices[16] = new HELPER.Vector3(-1, 0, -1);
    mesh.Vertices[17] = new HELPER.Vector3(-1, 1, -1);
    mesh.Vertices[18] = new HELPER.Vector3(0, 1, -1);

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

    mera.Position = new HELPER.Vector3(10, 10, 10);
    mera.Target = new HELPER.Vector3(0, 0, 0);
    requestAnimationFrame(drawingLoop);
}
function drawingLoop() {
    device.clear();
    //mesh.Rotation.z += 0.01;
    mesh.Rotation.y += 0.01;
    //mesh.Rotation.x += 0.01;
    device.render(mera, meshes);
    device.present();
    requestAnimationFrame(drawingLoop);
}
