import React from "react";
const Notification = ({ message, isWarning }) => {
  if (message == null) {
    return null;
  }

  let notificationStyle = {
    color: "green",
    background: "lightgrey",
    fontSize: 20,
    borderStyle: "solid",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  };

  if (isWarning) {
    notificationStyle = { ...notificationStyle, color: "red" };
  }

  return <div style={notificationStyle}>{message}</div>;
};

export default Notification;
