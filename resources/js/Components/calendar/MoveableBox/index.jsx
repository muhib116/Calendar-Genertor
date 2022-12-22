import Draggable from 'react-draggable';

export default function MoveableBox({ style, title })
{
  return (
    title != '' &&
    <div className='absolute top-0 z-20 p-5 w-full' style={ style }>
      { title }
    </div>
  )
}
