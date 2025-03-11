// /*
// // Message App
// let users = [
//   {
//     name: "KC",
//     messages: []
//   },
//   {
//     name: "King",
//     messages: []
//   }
// ]

// function sendMessage(from, to, message) {
//   let userIndex = users.findIndex((user) => user.name == to)
//   if(userIndex) {
//     let newMessage = {
//       from,
//             message,
//             isRead: false
//     }

//     users[userIndex].messages.unshift(newMessage)
//   }
// }

// sendMessage("KC", "King", "Hello")
// // readMessage();
// console.log(users[1].messages)
// */

// let users = [
//     {
//       userName: "Teyei",
//       messages: {
//         sent: [
//           {
//             message: "",
//             to: "",
//             isRead: false,
//             time: Date().toString(),
//           },
//         ],
  
//         received: [
//           {
//             message: "",
//             to: "",
//             isRead: false,
//             time: Date().toString(),
//           },
//         ],
//       },
//     },
  
//     {
//       userName: "T Y",
//       messages: {
//         sent: [
//           {
//             message: "",
//             to: "",
//             isRead: false,
//             time: Date().toString(),
//           },
//         ],
  
//         received: [
//           {
//             message: "",
//             to: "",
//             isRead: false,
//             time: Date().toString(),
//           },
//         ],
//       },
//     },
//   ];
  
//   function sendMessage(from, to, message) {
//     let receiver = users.findIndex((user) => user.userName == to);
//     let sender = users.findIndex((user) => user.userName == from);
  
//     if (receiver) {
//       let newMessage = {
//         message: message,
//         from: from,
//         isRead: false,
//         time: Date().toString(),
//       };
//       users[receiver].messages.received.unshift(newMessage);
//     }
  
//     if (sender) {
//       let sentMessage = {
//         message: message,
//         to: to,
//         isRead: false,
//         time: Date().toString(),
//       };
//       users[receiver].messages.sent.unshift(sentMessage);
//     }
//   }
  
//   // sendMessage("Charles","Sati","working")
//   sendMessage("Benedict","Teyei","What do you think about my proposal")
  
//   // console.log(users[0].messages.sent, users[1].messages.received)
//   console.log(users[1].messages)


let users = [
    {
      userName: "Teyei",
      messages: {
        sent: [
          {
            message: "",
            to: "",
            isRead: false,
            time: Date().toString(),
          },
        ],
        received: [
          {
            message: "",
            to: "",
            isRead: false,
            time: Date().toString(),
          },
        ],
      },
    },
  
    {
      userName: "T Y",
      messages: {
        sent: [
          {
            message: "",
            to: "",
            isRead: false,
            time: Date().toString(),
          },
        ],
  
        received: [
          {
            message: "",
            to: "",
            isRead: false,
            time: Date().toString(),
          },
        ],
      },
    },
  ];

function sendMessage(from, to, message) {
  let receiver = users.findIndex((user) => user.userName === to);
  let sender = users.findIndex((user) => user.userName === from);

  if (receiver !== -1) {
    let newMessage = {
      message: message,
      from: from,
      isRead: false,
      time: Date().toString(),
    };
    users[receiver].messages.received.unshift(newMessage);
  }

  if (sender !== -1) {
    let sentMessage = {
      message: message,
      to: to,
      isRead: false,
      time: Date().toString(),
    };
    users[sender].messages.sent.unshift(sentMessage);
  }
}

sendMessage("Teyei", "T Y", "What do you think about my proposal");

console.log(users[1].messages);
