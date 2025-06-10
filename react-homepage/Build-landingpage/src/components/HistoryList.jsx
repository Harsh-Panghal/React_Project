function HistoryList() {
  const historyItems = [
    'Watch Purchase Comparison',
    'URL Filtering Issue',
    'SQL Proficiency for Job Appli...',
    'Browser Location Sharing',
    'Website Structure for Healthc...'
  ];

  return (
    <div className="history">
      {historyItems.map((item, index) => (
        <div key={index} className="history-item">
          {item}
        </div>
      ))}
    </div>
  );
}

export default HistoryList;
// This component serves as a list of recent history items in the sidebar.
// It displays a series of history items, enhancing the user interface by providing quick access to recent activities.