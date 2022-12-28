export default function useFabricJs() {
    const initFabricJs = () => {
        fabric.Object.prototype.cornerColor = '#f00'
        fabric.Object.prototype.cornerStyle = 'circle'
        fabric.Object.prototype.transparentCorners = false;
        fabric.Object.prototype.cornerSize = 10;
        fabric.Object.prototype.cornerStrokeColor = '#00ff00';
        fabric.Object.prototype.borderColor = '#00ff00';
    }


    return {
        initFabricJs
    }
}