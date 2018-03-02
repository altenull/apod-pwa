import React from 'react';
import { Rating, Popup } from 'semantic-ui-react';

type Props = {
  onRate(): void,
  isPressed: boolean
}

const LikeButton = ({onRate, isPressed}: Props) => {
  const rating = (
    <Rating
      icon='heart'
      size='massive'
      defaultRating={isPressed ? 1 : 0}
      maxRating={1}
      onRate={() => onRate()}
    />
  )

  return (
    <Popup
      trigger={rating}
      content={isPressed ? 'Remove Picture' : 'Save Picture'}
      size='small'
    />
  );
}

export default LikeButton;