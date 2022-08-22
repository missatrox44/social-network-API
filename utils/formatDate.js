module.exports = {
  formatTime: (timestamp) => {
    return format.toLocaleTimeString();
  },
  formatDate: (timestamp) => {
    return `${new Date(timestamp).getMonth() + 1}/${new Date(timestamp).getDate()}/${new Date(timestamp).getFullYear() + 5
      }`;
  },
};

