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

import { OverlayTemplate } from 'klinecharts'

const gannBox: OverlayTemplate = {
  name: 'gannBox',
  totalStep: 3,
  needDefaultPointFigure: true,
  needDefaultXAxisFigure: true,
  needDefaultYAxisFigure: true,
  styles: {
    polygon: {
      color: 'rgba(22, 119, 255, 0.15)'
    }
  },
  createPointFigures: ({ coordinates }) => {
    if (coordinates.length > 1) {
      const quarterYDis = (coordinates[1].y - coordinates[0].y) / 4
      const xDis = coordinates[1].x - coordinates[0].x
      const dashedLines = [
        { coordinates: [coordinates[0], { x: coordinates[1].x, y: coordinates[1].y - quarterYDis }] },
        { coordinates: [coordinates[0], { x: coordinates[1].x, y: coordinates[1].y - quarterYDis * 2 }] },
        { coordinates: [{ x: coordinates[0].x, y: coordinates[1].y }, { x: coordinates[1].x, y: coordinates[0].y + quarterYDis }] },
        { coordinates: [{ x: coordinates[0].x, y: coordinates[1].y }, { x: coordinates[1].x, y: coordinates[0].y + quarterYDis * 2 }] },

        { coordinates: [{ ...coordinates[0] }, { x: coordinates[0].x + xDis * 0.236, y: coordinates[1].y }] },
        { coordinates: [{ ...coordinates[0] }, { x: coordinates[0].x + xDis * 0.5, y: coordinates[1].y }] },

        { coordinates: [{ x: coordinates[0].x, y: coordinates[1].y }, { x: coordinates[0].x + xDis * 0.236, y: coordinates[0].y }]},
        { coordinates: [{ x: coordinates[0].x, y: coordinates[1].y }, { x: coordinates[0].x + xDis * 0.5, y: coordinates[0].y }] }
      ]
      const solidLines = [
        { coordinates: [coordinates[0], coordinates[1]] },
        { coordinates: [{ x: coordinates[0].x, y: coordinates[1].y }, { x: coordinates[1].x, y: coordinates[0].y }] }
      ]
      return [
        {
          type: 'line',
          attrs: [
            { coordinates: [coordinates[0], { x: coordinates[1].x, y: coordinates[0].y }] },
            { coordinates: [{ x: coordinates[1].x, y: coordinates[0].y }, coordinates[1]] },
            { coordinates: [coordinates[1], { x: coordinates[0].x, y: coordinates[1].y }] },
            { coordinates: [{ x: coordinates[0].x, y: coordinates[1].y }, coordinates[0]] }
          ]
        },
        {
          type: 'polygon',
          ignoreEvent: true,
          attrs: {
            coordinates: [
              coordinates[0],
              { x: coordinates[1].x, y: coordinates[0].y },
              coordinates[1],
              { x: coordinates[0].x, y: coordinates[1].y }
            ]
          },
          styles: { style: 'fill' }
        },
        {
          type: 'line',
          attrs: dashedLines,
          styles: { style: 'dashed' }
        },
        {
          type: 'line',
          attrs: solidLines
        }
      ]
    }
    return []
  }
}

export default gannBox
