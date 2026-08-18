type NotificationType = {
  showNotification: boolean,
  message: string,
  type?: 'success' | 'error'
}

const Notification = ({ showNotification, message, type = 'success' }: NotificationType) => {
  const displayNotification = showNotification ? ' show' : '';

  return (
    <div
      className={'notification' + (displayNotification)}
      role={showNotification ? (type === 'error' ? 'alert' : 'status') : undefined}
      aria-live={showNotification ? (type === 'error' ? 'assertive' : 'polite') : undefined}
    >
      {message}
    </div>
  )
};

export default Notification;
