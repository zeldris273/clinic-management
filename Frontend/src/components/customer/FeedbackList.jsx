const FeedbackList = () => {
  const [feedbacks, setFeedbacks] = useState([
    { id: 1, patient: 'John Doe', rating: 5, comment: 'Great service!', date: '2025-06-01' },
    // Add more sample data
  ]);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Customer Feedback</h2>
      <button className="bg-blue-600 text-white px-4 py-2 rounded mb-4">Add Feedback</button>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">ID</th>
            <th className="p-2">Patient</th>
            <th className="p-2">Rating</th>
            <th className="p-2">Comment</th>
            <th className="p-2">Date</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((feedback) => (
            <tr key={feedback.id}>
              <td className="p-2">{feedback.id}</td>
              <td className="p-2">{feedback.patient}</td>
              <td className="p-2">{feedback.rating} Stars</td>
              <td className="p-2">{feedback.comment}</td>
              <td className="p-2">{feedback.date}</td>
              <td className="p-2">
                <button className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">Edit</button>
                <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackList;