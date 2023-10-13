---
to: src/components/<%= atomic %>/<%= h.changeCase.pascal(component_name) %>/<%= h.changeCase.pascal(component_name) %>.tsx
---
import React from 'react';

type <%= h.changeCase.pascal(component_name) %>Props = {
};

export default function <%= h.changeCase.pascal(component_name) %>({} :<%= h.changeCase.pascal(component_name) %>Props) {
  return (
    <></>
  );
}

