import {animate, keyframes, style, AnimationTriggerMetadata, animation, AUTO_STYLE} from "@angular/animations";
import {buildTrigger} from "../../base";
import {AnimationConfig} from "../../common";

export const jelloKeyframes = [
  style({ opacity: 0, visibility: AUTO_STYLE, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0 }),
  style({ opacity: 1, transform: 'translate3d(0, 0, 0)', easing: 'ease', offset: 0.111 }),
  style({ transform: 'skewX(-12.5deg) skewY(-12.5deg)', easing: 'ease', offset: 0.222 }),
  style({ transform: 'skewX(6.25deg) skewY(6.25deg)', easing: 'ease', offset: 0.333 }),
  style({ transform: 'skewX(-3.125deg) skewY(-3.125deg)', easing: 'ease', offset: 0.444 }),
  style({ transform: 'skewX(1.5625deg) skewY(1.5625deg)', easing: 'ease', offset: 0.555 }),
  style({ transform: 'skewX(-0.78125deg) skewY(-0.78125deg)', easing: 'ease', offset: 0.666 }),
  style({ transform: 'skewX(0.390625deg) skewY(0.390625deg)', easing: 'ease', offset: 0.777 }),
  style({ transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)', easing: 'ease', offset: 0.888 }),
  style({ transform: 'skewX(0deg) skewY(0deg)', easing: 'ease', offset: 1 })
];

export function jello(config?: Partial<AnimationConfig>): AnimationTriggerMetadata {
  return buildTrigger(
    animation( animate('{{timings}} {{delay}}', keyframes(jelloKeyframes) )),
    {...{triggerName: 'jello'},...config}
  )
}
