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
      size='huge'
      defaultRating={isPressed ? 1 : 0}
      maxRating={1}
      onRate={() => onLike()}
    />
  )

  return (
    <Popup
      trigger={rating}
      content={(!isPressed)? 'Add to My gallery' : 'Remove from My gallery'}
      size='small'
    />
  );
}

export default LikeButton;