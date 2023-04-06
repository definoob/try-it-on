export const convertToDataURLviaCanvas = (
  url: string,
  callback: (dataURL: string) => void
) => {
  const img = new Image();
  img.crossOrigin = 'Anonymous';
  img.onload = function () {
    let canvas: HTMLCanvasElement = document.createElement('canvas');
    let ctx: CanvasRenderingContext2D | null = canvas.getContext('2d');

    canvas.height = img.height;
    canvas.width = img.width;

    ctx?.drawImage(img, 0, 0);
    const dataURL: string = canvas.toDataURL('image/png');
    callback(dataURL);
  };

  img.src = url;
};
