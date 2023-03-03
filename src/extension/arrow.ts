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

import { OverlayTemplate, utils } from 'klinecharts'

import { getRotateCoordinate } from './utils'

const arrow: OverlayTemplate = {
  name: 'arrow',
  totalStep: 3,
  needDefaultPointFigure: true,
  needDefaultXAxisFigure: true,
  needDefaultYAxisFigure: true,
  createPointFigures: ({ coordinates }) => {
    if (coordinates.length > 1) {
      const flag = coordinates[1].x > coordinates[0].x ? 0 : 1
      const kb = utils.getLinearSlopeIntercept(coordinates[0], coordinates[1])
      let offsetAngle
      if (kb) {
        offsetAngle = Math.atan(kb[0]) + Math.PI * flag
      } else {
        if (coordinates[1].y > coordinates[0].y) {
          offsetAngle = Math.PI / 2
        } else {
          offsetAngle = Math.PI / 2 * 3
        }
      }
      const rotateCoordinate1 = getRotateCoordinate({ x: coordinates[1].x - 8, y: coordinates[1].y + 4 }, coordinates[1], offsetAngle)
      const rotateCoordinate2 = getRotateCoordinate({ x: coordinates[1].x - 8, y: coordinates[1].y - 4 }, coordinates[1], offsetAngle)
      return [
        {
          type: 'line',
          attrs: { coordinates }
        },
        {
          type: 'line',
          ignoreEvent: true,
          attrs: { coordinates: [rotateCoordinate1, coordinates[1], rotateCoordinate2] }
        }
      ]
    }
    return []
  }
}

export default arrow
