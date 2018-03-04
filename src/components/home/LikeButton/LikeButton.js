import React from 'react';
import { Rating, Popup } from 'semantic-ui-react';

type Props = {
  onLike(): void,
  isPressed: boolean
}

const LikeButton = ({onLike, isPressed}: Props) => {
  const rating = (
    <Rating
      icon='heart'
      size='massive'
      defaultRating={isPressed ? 1 : 0}
      maxRating={1}
      onLike={() => onLike()}
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