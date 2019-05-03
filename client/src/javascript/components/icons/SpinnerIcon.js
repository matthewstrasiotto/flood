import _ from 'lodash';
import React from 'react';

import BaseIcon from './BaseIcon';

export default class SpinnerIcon extends BaseIcon {
  constructor(...iconConfig) {
    super(...iconConfig);

    this.id = _.uniqueId();
  }

  getViewBox() {
    return '0 0 128 128';
  }

  render() {
    const maskID = `icon--spinner__mask-id--${this.id}`;

    return (
      <svg className={`icon icon--spinner ${this.props.className}`} viewBox={this.getViewBox()}>
        <defs>
          <mask id={maskID} x="0" y="0" width="128" height="128" maskUnits="userSpaceOnUse">
            <image
              width="128"
              height="128"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAIAAABMXPacAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTExIDc5LjE1ODMyNSwgMjAxNS8wOS8xMC0wMToxMDoyMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzE2ODczNjkyQ0YwMTFFNjgyMTQ4Q0Y5OTZBNUFFNEEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzE2ODczNkEyQ0YwMTFFNjgyMTQ4Q0Y5OTZBNUFFNEEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDMTY4NzM2NzJDRjAxMUU2ODIxNDhDRjk5NkE1QUU0QSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDMTY4NzM2ODJDRjAxMUU2ODIxNDhDRjk5NkE1QUU0QSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PoyU+r8AABYHSURBVHja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"
            />
          </mask>
        </defs>
        <path
          className="icon--spinner__ring"
          style={{mask: `url(#${maskID})`}}
          d="M64,2.34A61.66,61.66,0,1,0,125.66,64,61.66,61.66,0,0,0,64,2.34ZM64,111.9A47.9,47.9,0,1,1,111.9,64,47.9,47.9,0,0,1,64,111.9Z"
        />
      </svg>
    );
  }
}
