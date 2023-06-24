/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`./*.html`],
  theme: {
    screens :{
    sm:'480px',
    md:'768px',
    lg:'976px',
    xl:'1440px',
    },
    extend: {
      colors:{ 
        //color for icons//
        blueone: 'hsla(216, 100%, 50%, 1)',
        //color for//
        bluetwo:'hsla(216, 100%, 44%, 1)',
        //color for//
        bluethree:'hsla(216, 100%, 60%, 1)',
        //color for//
        bluefour:'hsla(216, 100%, 64%, 1)',
        //color for everything black except black two and three//
        blackone: 'hsla(0, 0%, 8%, 1)',
        //color for section headers in last flexbox//
        blacktwo:'hsla(208, 70%, 9%, 1)',
        //color for for the column items in the last flexbox//
        blackthree:'hsla(209, 49%, 13%, 1)',
        //color for white texts//
        white: 'hsla(0, 0%, 100%, 1)',
      }
    },
  },
  plugins: [],
}

