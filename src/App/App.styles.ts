import { createUseStyles } from "react-jss";

const useStyles = createUseStyles(
  {
    "@global": {
      body: {
        backgroundColor: "#141515",
        fontFamily: "MuseoSansCyrl-500, sans-serif",
        position: 'relative',
        width: '100vw',
        height: '100vh',
        margin: 0,
        color: '#ddd'
      },
      "@font-face": [
        {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore // this works - no idea why ts doesnt like it
          fontFamily: "MuseoSansCyrl-500",
          src: "url('fonts/MuseoSansCyrl-500.ttf')"
        },
        {
          fontFamily: "MuseoSansCyrl-700",
          src: "url('fonts/MuseoSansCyrl-700.ttf')"
        },
        {
          fontFamily: "MuseoSansCyrl-900",
          src: "url('fonts/MuseoSansCyrl-900.ttf')"
        }
      ]
    },
    frame: {
      '& path[data-name="shape"]': {
        color: 'hsl(313deg 75% 10%)'
      },
      '& path[data-name="decoration"]': {
        color: 'hsl(300deg 83% 53%)'
      }
    },
    titleWindow: {
      width: 300,
      height: 100,
      margin: 50,
      padding: 20,
      position: "relative"
    }
  },
  {
    name: "App"
  }
);

export default useStyles;
