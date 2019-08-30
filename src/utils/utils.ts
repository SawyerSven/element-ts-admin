/* 计算当前页面宽高 */
interface ViewPortObject {
  width: number;
  height: number;
}
export function getViewport(): ViewPortObject {
  return {
    width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
    height:
      window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
  };
}
