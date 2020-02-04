export const getInitials = s => {
    const arr = s.split(" ");
    return arr[0][0] + arr[1][0];
}

export const getRandomColor = () => {
    return {
      h: Math.floor(Math.random() * 361).toString(),
      s: Math.floor((Math.random() * 0.5 + 0.25) * 100).toString() + "%",
      l: Math.floor((Math.random() * 0.5 + 0.25) * 100).toString() + "%"
    };
}