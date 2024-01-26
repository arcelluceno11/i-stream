import backdrop from '../../../public/backdrop.jpg'

type Props = {}

const BackDrop = (props: Props) => {
  return (
    <div
      className='absolute w-full h-screen bg-cover bg-center bg-no-repeat'
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.8)), url(${backdrop})`,
      }}
    />
  )
}

export default BackDrop
