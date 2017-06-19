import React from 'react'
import styled from 'styled-components'
import { Col } from '../Col/Col';

const align = props => props.align ? `align-items:${props.align};` : null
const justify = props => props.justify ? `justify-content:${props.justify};` : null
const order = props => props.order ? `order:${props.order};` : null
const wrap = props => props.wrap ? `flex-wrap:wrap;` : null
const column = props => props.column ? `flex-direction:column;` : null

export const Row = styled(Col)([],
  { display: 'flex' },
  align,
  justify,
  order,
  wrap,
  column
);
