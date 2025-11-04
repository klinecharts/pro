import { Accessor, Setter } from 'solid-js'
import {
  setPointStyle, setRectStyle, setPolygonStyle, setCircleStyle, setArcStyle, setTextStyle, pointStyle, rectStyle, polygonStyle,
  circleStyle, arcStyle, textStyle, horizontalStraightLineStyle, horizontalRayLineStyle, horizontalSegmentStyle, verticalStraightLineStyle,
  verticalRayLineStyle, setRayLineStyle, rayLineStyle, segmentStyle, verticalSegmentStyle, arrowStyle, straightLineStyle, priceLineStyle, setHorizontalStraightLineStyle,
  setHorizontalRayLineStyle, setHorizontalSegmentStyle, setVerticalStraightLineStyle, setVerticalRayLineStyle, setVerticalSegmentStyle,
  setStraightLineStyle, setSegmentStyle, setPriceLineStyle, setArrowStyle } from './inbuiltOverlayStyleStore'

// Define an object that maps function names to functions
export const useGetOverlayStyle: { [key: string]: Accessor<object> } = {
  pointStyle,
  horizontalStraightLineStyle,
  horizontalRayLineStyle,
  horizontalSegmentStyle,
  verticalStraightLineStyle,
  verticalRayLineStyle,
  verticalSegmentStyle,
  straightLineStyle,
  rayLineStyle,
  segmentStyle,
  arrowStyle,
  priceLineStyle,
  rectStyle,
  polygonStyle,
  circleStyle,
  arcStyle,
  textStyle
}

// Define an object that maps function names to functions
export const useSetOverlayStyle: { [key: string]: Setter<object>} = {
  setpointStyle: (value: any) => setPointStyle(value),
  sethorizontalStraightLineStyle: (value: any) => setHorizontalStraightLineStyle(value),
  sethorizontalRayLineStyle: (value: any) => setHorizontalRayLineStyle(value),
  sethorizontalSegmentStyle: (value: any) => setHorizontalSegmentStyle(value),
  setverticalStraightLineStyle: (value: any) => setVerticalStraightLineStyle(value),
  setverticalRayLineStyle: (value: any) => setVerticalRayLineStyle(value),
  setverticalSegmentStyle: (value: any) => setVerticalSegmentStyle(value),
  setstraightLineStyle: (value: any) => setStraightLineStyle(value),
  setrayLineStyle: (value: any) => setRayLineStyle(value),
  setsegmentStyle: (value: any) => setSegmentStyle(value),
  setarrowStyle: (value: any) => setArrowStyle(value),
  setpriceLineStyle: (value: any) => setPriceLineStyle(value),
  setrectStyle: (value: any) => setRectStyle(value),
  setpolygonStyle: (value: any) => setPolygonStyle(value),
  setcircleStyle: (value: any) => setCircleStyle(value),
  setarcStyle: (value: any) => setArcStyle(value),
  settextStyle: (value: any) => setTextStyle(value)
}