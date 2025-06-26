import React from 'react';

const RollingGallery = () => {
  const containerStyle = {
    margin: 0,
    height: '100vh',
    display: 'grid',
    placeItems: 'center',
    backgroundColor: '#010101',
  };

  const galleryStyle = {
    position: 'relative',
    width: '300px',
    height: '200px',
    transformStyle: 'preserve-3d',
    animation: 'rotate 35s linear infinite',
  };

  const spanBaseStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    transformOrigin: 'center',
    transformStyle: 'preserve-3d',
  };

  const imageStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  const h1Style = {
    color: 'white',
    textAlign: 'center',
    margin: '0 auto',
  };

  // Define dynamic rotation for each item (based on --i * 45deg)
  const items = [
    { type: 'text', content: <h1 style={h1Style}>Hello</h1>, i: 1 },
    { type: 'image', src: 'https://images5.alphacoders.com/653/653698.jpg', i: 2 },
    { type: 'image', src: 'https://images6.alphacoders.com/803/thumb-1920-803643.png', i: 3 },
    { type: 'image', src: 'https://images.alphacoders.com/785/thumb-1920-785833.png', i: 4 },
    { type: 'image', src: 'https://images6.alphacoders.com/749/thumb-1920-749966.png', i: 5 },
    { type: 'image', src: 'https://images4.alphacoders.com/761/thumb-1920-761076.png', i: 6 },
    { type: 'image', src: 'https://images.alphacoders.com/682/thumb-1920-682570.png', i: 7 },
    { type: 'image', src: 'https://images4.alphacoders.com/866/thumb-1920-866812.png', i: 8 },
  ];

  return (
    <div style={containerStyle}>
      <div style={galleryStyle}>
        {items.map((item, index) => {
          const rotateY = `${item.i * 45}deg`;
          const transform = `rotateY(${rotateY}) translateZ(380px)`;

          return (
            <span key={index} style={{ ...spanBaseStyle, transform }}>
              {item.type === 'image' ? (
                <img src={item.src} alt={`slide-${index}`} style={imageStyle} />
              ) : (
                item.content
              )}
            </span>
          );
        })}
      </div>

      {/* Keyframes via <style> since inline styles don't support them */}
      <style>{`
        @keyframes rotate {
          from {
            transform: perspective(1200px) rotateY(360deg);
          }
          to {
            transform: perspective(1200px) rotateY(0deg);
          }
        }
      `}</style>
    </div>
  );
};

export default RollingGallery;
