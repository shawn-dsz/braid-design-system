import React from 'react';
import { Snippets } from '../private/Snippets';
import {
  Card,
  Stack,
  Heading,
  Text,
  Columns,
  Column,
  OverflowMenu,
  MenuItem,
} from '../../playroom/components';

export const snippets: Snippets = [
  {
    name: 'With Heading',
    code: (
      <Card>
        <Stack space="gutter">
          <Heading level="3">Heading</Heading>
          <Text>Text</Text>
        </Stack>
      </Card>
    ),
  },
  {
    name: 'With Overflow Menu',
    code: (
      <Card>
        <Stack space="gutter">
          <Columns space="gutter">
            <Column>
              <Heading level="3">Heading</Heading>
            </Column>
            <Column width="content">
              <OverflowMenu label="Options">
                <MenuItem>Menu Item</MenuItem>
              </OverflowMenu>
            </Column>
          </Columns>
          <Text>Text</Text>
        </Stack>
      </Card>
    ),
  },
];
