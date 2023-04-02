# __Perfect Lines__ on HTML5 Canvas?

See it here in action: [demo](https://fender0ne.github.io/perfectLines/)

## Trying to draw __1px perfect lines__ on a web browser's canvas [^1]  
&nbsp; 

> First off, check out this article:
> [How the Browser Renders 1px / Odd-Pixel Wide Lines](https://usefulangle.com/post/17/html5-canvas-drawing-1px-crisp-straight-lines)  

&nbsp; 
  
We do several line drawing visual tests using various techniques to see how the result looks best. Judge for yourself.

Information and suggested code from several stackoverflow users has been used:

1. [Complete Solution for Drawing 1 Pixel Line on HTML5 Canvas by Ievgen Jul 11, 2019](https://stackoverflow.com/questions/25277023/complete-solution-for-drawing-1-pixel-line-on-html5-canvas?noredirect=1&lq=1)

2. [canvas line behavior when 0 < linewidth < 1 by GameAlchemist Jul 10, 2014](https://stackoverflow.com/questions/24669578/canvas-line-behaviour-when-0-linewidth-1)

3. [Bresenham's line algorithm by markE Aug, 2014](https://stackoverflow.com/questions/25277023/complete-solution-for-drawing-1-pixel-line-on-html5-canvas?noredirect=1&lq=1 )

4. My own tests using __translate(0.5, 0.5)__ as suggested by GameAlchemist and other authors.
Note: see the green rectangles w/o borders and the blue rectangles with borders.

&nbsp; 


 [^1]: We haven't focused on improving the javascript code, and you may see old code getting mixed up with new one.  
 Non-judgment, it is a simple visual test.
