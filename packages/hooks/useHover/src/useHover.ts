import { MouseEventHandler, PointerEventHandler, useState } from 'react';

export interface HoverEvent {
  target: Element;
  type: 'hoverstart' | 'hoverend' | 'hoverup' | 'hover';
  event: 'mouse' | 'touch';
}

export interface HoverProps {
  onHover?: (e: HoverEvent) => void;
  onHoverStart?: (e: HoverEvent) => void;
  onHoverEnd?: (e: HoverEvent) => void;
  onHoverChange?: (isHovered: boolean) => void;
  disabled?: boolean;
}

export interface DOMEvents {
  onPointerEnter?: PointerEventHandler<HTMLElement>;
  onPointerLeave?: PointerEventHandler<HTMLElement>;
  onMouseEnter?: MouseEventHandler<HTMLElement>;
  onMouseLeave?: MouseEventHandler<HTMLElement>;
}

export interface HoverResult {
  isHovered: boolean;
  hoverEvents: DOMEvents;
}

export const useHover = (pros: HoverProps): HoverResult => {
  const [isHovered, setIsHovered] = useState(false);

  const hoverEvents: DOMEvents = {
    onPointerEnter(e) {
      setIsHovered(true);
    },
    onPointerLeave(e) {
      setIsHovered(false);
    }
  };

  return { hoverEvents, isHovered };
};
