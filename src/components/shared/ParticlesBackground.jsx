import { useCallback } from "react";
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import PropTypes from 'prop-types';

const ParticlesBackground = ({ className, isDarkMode }) => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {
    // You can add additional setup here if needed
  }, []);

  return (
    <Particles
      className={`absolute inset-0 ${className}`}
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: {
          enable: false,
          zIndex: 0,
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
              parallax: {
                enable: true,
                force: 60,
                smooth: 10,
              },
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 150,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: isDarkMode ? "#ffffff" : "#4f46e5",
          },
          links: {
            color: isDarkMode ? "#ffffff" : "#4f46e5",
            distance: 150,
            enable: true,
            opacity: isDarkMode ? 0.2 : 0.4,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 50,
          },
          opacity: {
            value: isDarkMode ? 0.4 : 0.7,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

ParticlesBackground.propTypes = {
  className: PropTypes.string,
  isDarkMode: PropTypes.bool,
};

ParticlesBackground.defaultProps = {
  className: '',
  isDarkMode: true,
};

export default ParticlesBackground;

