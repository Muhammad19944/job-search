module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        'heading-1' : '80px',
        'heading-2' : '60px',
        'heading-3' : '48px',
        'heading-4' : '40px',
        'heading-5' : '32px',
        'heading-6' : '28px',
        'heading-7' : '26px',
        'heading-8' : '24px',
        'heading-9' : '22px',
        'body-1'    : '20px',
        'body-2'    : '18px',
        'small-1'   : '12px',
        'tiny'      : '10px'
      },
      colors: {
        "primary-1": "rgba(var(--primary-1), 1)",
        "primary-2": "rgba(var(--primary-2), 1)",
        "primary-3": "rgba(var(--primary-3), 1)",
        "primary-4": "rgba(var(--primary-4), 1)",

        "secondary-1": "var(--secondary-1)",
        "secondary-2": "var(--secondary-2)",
        "secondary-3": "var(--secondary-3)",
        "secondary-4": "var(--secondary-4)",

        "transparent-1": "var(--transparent-1)",
        "transparent-2": "var(--transparent-2)",
        "transparent-3": "var(--transparent-3)",
        "transparent-4": "var(--transparent-4)",

        "text-1": "var(--text-1)",
        "text-2": "var(--text-2)",
        "text-3": "var(--text-3)",
        "text-4": "var(--text-4)",

        "bg-1": "var(--bg-1)",
        "bg-2": "var(--bg-2)",
        "bg-3": "var(--bg-3)",
        "bg-4": "var(--bg-4)",

        "border-color": "var(--border-color)"
      },
      boxShadow: {
        "shadow-1": "var(--shadow-1)",
        "shadow-2": "var(--shadow-2)",
        "shadow-3": "var(--shadow-3)",
        "shadow-4": "var(--shadow-4)",

        "shadow-outline-1": "var(--shadow-outline-1)",
        "shadow-outline-2": "var(--shadow-outline-2)",
        "shadow-outline-3": "var(--shadow-outline-3)",
        "shadow-outline-4": "var(--shadow-outline-4)",

        "shadow-depressed-1": "var(--shadow-depressed-1)",
        "shadow-depressed-2": "var(--shadow-depressed-2)",
        "shadow-depressed-3": "var(--shadow-depressed-3)",
        "shadow-depressed-4": "var(--shadow-depressed-4)",
      },
      width: {
        '88' : '22rem'
      }
    },
    container: {
      padding: "15px"
    },
    // fontSize: {
    //   // 'tiny': '10px'
    // }
  },
  plugins: [],
}
