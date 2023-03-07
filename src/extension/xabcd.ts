/**
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at

 * http://www.apache.org/licenses/LICENSE-2.0

 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { OverlayTemplate, PolygonAttrs, LineAttrs } from 'klinecharts'

const xabcd: OverlayTemplate = {
  name: 'xabcd',
  totalStep: 6,
  needDefaultPointFigure: true,
  needDefaultXAxisFigure: true,
  needDefaultYAxisFigure: true,
  styles: {
    polygon: {
      color: 'rgba(22, 119, 255, 0.15)'
    }
  },
  createPointFigures: ({ coordinates, overlay }) => {
    const dashedLines: LineAttrs[] = []
    const polygons: PolygonAttrs[] = []
    const tags = ['X', 'A', 'B', 'C', 'D']
    const texts = coordinates.map((coordinate, i) => ({
      ...coordinate,
      baseline: 'bottom',
      text: `(${tags[i]})`
    }))
    if (coordinates.length > 2) {
      dashedLines.push({ coordinates: [coordinates[0], coordinates[2]] })
      polygons.push({ coordinates: [coordinates[0], coordinates[1], coordinates[2]] })
      if (coordinates.length > 3) {
        dashedLines.push({ coordinates: [coordinates[1], coordinates[3]] })
        if (coordinates.length > 4) {
          dashedLines.push({ coordinates: [coordinates[2], coordinates[4]] })
          polygons.push({ coordinates: [coordinates[2], coordinates[3], coordinates[4]] })
        }
      }
    }
    return [
      {
        type: 'line',
        attrs: { coordinates }
      },
      {
        type: 'line',
        attrs: dashedLines,
        styles: { style: 'dashed' }
      },
      {
        type: 'polygon',
        ignoreEvent: true,
        attrs: polygons
      },
      {
        type: 'text',
        ignoreEvent: true,
        attrs: texts
      }
    ]
  }
}

export default xabcd
