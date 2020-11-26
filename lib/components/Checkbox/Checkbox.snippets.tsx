import React from 'react';
import { Snippets } from '../private/Snippets';
import { Checkbox, Badge, Placeholder } from '../../playroom/components';
import source from '../../utils/source.macro';

export const snippets: Snippets = [
  {
    name: 'Standard',
    code: source(<Checkbox label="Label" />),
  },
  {
    name: 'With an error',
    code: source(<Checkbox label="Label" tone="critical" message="Required" />),
  },
  {
    name: 'With a description',
    code: source(<Checkbox label="Label" description="Description" />),
  },
  {
    name: 'With a Badge',
    code: source(
      <Checkbox label="Label" badge={<Badge weight="strong">Badge</Badge>} />,
    ),
  },
  {
    name: 'With nested content',
    code: source(
      <Checkbox label="Label">
        <Placeholder height={100} />
      </Checkbox>,
    ),
  },
];
