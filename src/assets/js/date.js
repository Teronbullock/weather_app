const option = {
  opt1: {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  },
  opt2: {
    hour: 'numeric',
    hour12: true,
  },
  opt3: {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  },
  opt4: {
    hour: 'numeric',
    minute: '2-digit',
    hour12: false,
  },
};

export const getDate = optInput => {
  const date = new Date();
  return date.toLocaleString('en-US', option[optInput]);
};

export const getTime = (optInput, input) => {
  const date = new Date(input * 1000);
  return date.toLocaleTimeString('en-US', option[optInput]);
};
