export default function Space() {
  return (
    <div class="bg-space bg-no-repeat bg-cover w-full h-full bg-black animate-spaceMove flex items-center justify-center">
      <h1 className="font-Jolly-Lodger text-6xl w-2/3 p-6 text-center text-white bg-gray-800 rounded-md bg-opacity-80 animate-textViewNormal">
        404 Needed Planet Not Found
      </h1>
      <div class="rocket"></div>
    </div>
  )
}

export const htmlTemplate = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    <style>
      @import url("https://fonts.googleapis.com/css2?family=Jolly+Lodger&family=Roboto:wght@100&display=swap");

      html,
      body {
        width: 100%;
        height: 100%;
        background-color: black;
      }
      * {
        margin: 0%;
        padding: 0%;
      }
      .container {
        background-color: rgba(0, 87, 255, 0.1);
        width: 100%;
        height: 100%;
        background-image: url("./Space\ \(3\).png"), url("./Space\ \(29\).png");
        background-size: cover, 100% 100%;
        background-repeat: no-repeat;
        background-position: 195% 195%, center;
        overflow: hidden;
        animation-name: spaceMove;
        animation-duration: 4s;
      }
      .rocket {
        width: 200px;
        height: 200px;
        background-color: whitesmoke;
        -webkit-mask: url(space-ship-hand-drawn-transport-svgrepo-com.svg)
          no-repeat center;
        mask: url(space-ship-hand-drawn-transport-svgrepo-com.svg) no-repeat
          center;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        position: absolute;
      }
      @keyframes spaceMove {
        from {
          background-position: top, center;
        }
        to {
          background-position: 195% 195%, center;
        }
      }
      @keyframes text404 {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }
      h1 {
        font-family: "Jolly Lodger", sans-serif;
        font-size: 10rem;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        padding: 50px;
        border-radius: 5px; 
        background-color: rgba(0, 0, 0, 0.5);
        color: white;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        animation-name: text404;
        animation-duration: 4s;
      }
    </style>
    <title>Space</title>
  </head>
  <body>
    <div class="container">
      <h1>404 Needed Planet Not Found</h1>
      <div class="rocket"></div>
    </div>
  </body>
</html>
`
