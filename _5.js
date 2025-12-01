 const notifications = [
  { text: "Low battery", priority: 3, read: false },
  { text: "New message from Anna", priority: 1, read: true },
  { text: "System update available", priority: 2, read: false },
  { text: "Storage almost full", priority: 3, read: true },
  { text: "Friend request", priority: 1, read: false },
];

const messageTypes = ["critical", "warning", "normal", "read"];
const addMessage = (arr, messageTypes) => {
  const result = [...arr].map(el => 
  {
   if (el.priority === 3) {
    el.addMessage = messageTypes[0]
   } else if (el.priority === 2) {
    el.addMessage = messageTypes[1]
   } else el.addMessage = messageTypes[2];
if (el.read) {
    el.addMessage = messageTypes[3];
}
   return el;
}
  )
return result;
}
console.log(addMessage(notifications, messageTypes));
