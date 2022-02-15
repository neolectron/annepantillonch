import { Children } from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import Icon from '../Icon/Icon';

import {
  Container,
  Item,
  Header,
  Trigger,
  // Icon,
  Content,
  // } from './';
} from './Accordion.module.css';

export default function Accordion({ names, children }) {
  return (
    <AccordionPrimitive.Root
      type="single"
      // className="w-full px-4 py-2 border rounded-md shadow-md"
      className={Container}
    >
      {Children.map(children, (child, index) => (
        <AccordionPrimitive.Item value={`item-${index}`} className={Item}>
          <AccordionPrimitive.Header className={Header}>
            {/* <AccordionPrimitive.Trigger className="flex justify-between w-full"> */}
            <AccordionPrimitive.Trigger
              className={Trigger}
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <span className="text-2xl">{names[index]}</span>
              <Icon name="down" reversed={false} />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className={Content}>
            {child}
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}
