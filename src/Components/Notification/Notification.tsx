type NotificationType = {
  showNotification: boolean,
  message: string
}

const Notification = ({ showNotification, message }: NotificationType) => {
  const displayNotification = showNotification ? ' show' : '';

  return (
    <div className={'notification' + (displayNotification)}>
      {message}
    </div>
  )
};

export default Notification;