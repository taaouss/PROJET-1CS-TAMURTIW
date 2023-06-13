import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

export default function Ratingfun(props) {
  return (
    <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={props.note} precision={0.25} readOnly />
    </Stack>
  );
}