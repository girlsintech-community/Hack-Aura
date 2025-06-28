import React from 'react';

const RollingGallery = () => {
  const containerStyle = {
    height: '80vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    perspective: '1200px',
    padding: '0.5rem 1rem 1rem 1rem',
  };

  const headingStyle = {
    fontSize: '3.2rem',
    fontWeight: '800',
    marginBottom: '7rem',
    background: 'linear-gradient(135deg, #3b82f6, #10b981, #06b6d4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 0 12px rgba(6, 182, 212, 0.3)',
  };

  const galleryStyle = {
    position: 'relative',
    width: 'min(90vw, 400px)',
    height: '280px',
    transformStyle: 'preserve-3d',
    animation: 'rotate 30s linear infinite',
  };

  const cardWrapperStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    transformOrigin: 'center',
    transformStyle: 'preserve-3d',
  };

  const sharedCardStyle = {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '1.2rem',
    padding: '1.4rem',
    background: 'rgba(255, 255, 255, 0.06)',
    border: '2px solid rgba(6, 182, 212, 0.25)',
    backdropFilter: 'blur(16px)',
    textAlign: 'center',
    color: '#d1fae5',
    boxShadow: `
      0 4px 16px rgba(6, 182, 212, 0.2),
      0 8px 24px rgba(16, 185, 129, 0.1)
    `,
    transition: 'transform 0.4s ease, box-shadow 0.4s ease, border-color 0.4s ease',
    backfaceVisibility: 'hidden',
  };

  const cardHoverStyle = {
    transform: 'scale(1.05) rotateX(2deg) rotateY(2deg)',
    borderColor: '#10b981',
    boxShadow: `
      0 6px 18px rgba(16, 185, 129, 0.35),
      0 12px 30px rgba(6, 182, 212, 0.3)
    `,
  };

  const titleStyle = {
    fontSize: '1.6rem',
    fontWeight: '700',
    marginBottom: '0.75rem',
    background: 'linear-gradient(135deg, #3b82f6, #10b981, #06b6d4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    textShadow: '0 0 6px rgba(6, 182, 212, 0.5)',
  };

  const descStyle = {
    fontSize: '1rem',
    lineHeight: 1.6,
    color: '#a7f3d0',
    fontFamily: 'Courier New, monospace',
    opacity: 0.95,
    padding: '0 0.5rem',
  };

  const items = [
    {
      title: 'AI',
      desc: 'Create smart, adaptive tools using neural networks and deep learning.',
    },
    {
      title: 'Blockchain',
      desc: 'Build transparent, trustless applications with secure smart contracts.',
    },
    {
      title: 'Open Innovation',
      desc: 'Collaborate and solve real-world problems through cross-discipline ideas.',
    },
  ];

  const angle = 360 / items.length;
  const translateZ = 160;

  return (
    <>
      <div style={containerStyle}>
        <h1 style={headingStyle}>Tracks</h1>
        <div style={galleryStyle}>
          {items.map((item, index) => {
            const rotateY = `${index * angle}deg`;
            const transform = `rotateY(${rotateY}) translateZ(${translateZ}px)`;

            return (
              <div key={index} style={{ ...cardWrapperStyle, transform }}>
                {/* Front Face */}
                <div
                  style={sharedCardStyle}
                  onMouseEnter={(e) =>
                    Object.assign(e.currentTarget.style, cardHoverStyle)
                  }
                  onMouseLeave={(e) => {
                    Object.assign(e.currentTarget.style, {
                      transform: 'scale(1)',
                      borderColor: 'rgba(6, 182, 212, 0.25)',
                      boxShadow: `
                        0 4px 16px rgba(6, 182, 212, 0.2),
                        0 8px 24px rgba(16, 185, 129, 0.1)
                      `,
                    });
                  }}
                >
                  <div style={titleStyle}>{item.title}</div>
                  <div style={descStyle}>{item.desc}</div>
                </div>

                {/* Back Face */}
                <div
                  style={{
                    ...sharedCardStyle,
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <div
                    style={{
                      transform: 'rotateY(180deg)',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                    }}
                  >
                    <div style={titleStyle}>{item.title}</div>
                    <div style={descStyle}>{item.desc}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <style>{`
          @keyframes rotate {
            0% { transform: rotateY(0deg); }
            100% { transform: rotateY(360deg); }
          }
        `}</style>
      </div>
    </>
  );
};

export default RollingGallery;
