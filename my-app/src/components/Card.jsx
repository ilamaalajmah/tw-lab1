import PropTypes from 'prop-types';

function Card({ imageSrc, title, items }) {
  return (
    <div className='flex w-full max-w-[300px] border p-4'>
      <div className='flex-shrink-0 w-1/3'>
        <img className='w-full h-[80px] object-cover' src={imageSrc} alt={title} />
      </div>
      <div className='flex-1 ml-4'>
        <h1 className='font-bold text-lg mb-2'>{title}</h1>
        <div className='flex flex-col'>
          {items.map((item, index) => (
            <p key={index} className='text-sm mb-1'>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Card;