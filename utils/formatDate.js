//formatDate code used from Andrew Cooke
//https://github.com/andcooke
const formatDate = (date) => {
  const d = date.getDate();
  const m = date.getMonth()+1;
  const y = date.getFullYear();
  const h = date.getHours();
  const min = date.getMinutes()
  return `${m}/${d}/${y} ${h}:${min}`
}


module.exports = formatDate;







// module.exports = {
//   formatTime: (timestamp) => {
//     return format.toLocaleTimeString();
//   },
//   formatDate: (timestamp) => {
//     return `${new Date(timestamp).getMonth() + 1}/${new Date(timestamp).getDate()}/${new Date(timestamp).getFullYear() + 5
//       }`;
//   },
// };

