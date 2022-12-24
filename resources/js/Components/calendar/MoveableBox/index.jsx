import Draggable from 'react-draggable';

export default function MoveableBox({ style, title })
{
  let bgStyle = {
    opacity: style.opacity,
    backgroundColor: style.backgroundColor,
  }

  let wrapperStyle = {...style}
  delete wrapperStyle.opacity
  delete wrapperStyle.backgroundColor

  return (
    title != '' &&
    <div className='absolute z-30 p-5 w-full' style={ wrapperStyle }>
      <h1 className='relative z-10'>{ title }</h1>
      <span className="absolute top-0 left-0 w-full h-full pointer-events-none" style={ bgStyle }></span>
    </div>
  )
}
