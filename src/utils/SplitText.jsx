const SplitText = ({ text, customCSS = {} }) => {
    return (
      <>
        {text.split("").map((char, index) => (
          <span
            key={index}
            style={{
              display: "inline-block",
              opacity: 0,
              ...customCSS,
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </>
    );
  };
  
  export default SplitText;
  