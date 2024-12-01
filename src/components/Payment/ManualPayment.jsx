const ManualPayment = ({ createOrder, loading }) => {
  return (
    <>
      <p>Free trial ongoing</p>
      <h2>Start a subscription to use all features of Curate</h2>
      <button 
        onClick={() => createOrder()} 
        disabled={loading}
      >
        {loading ? 'Payment in progress...' : 'Pay now'}
      </button>
    </>
  )
}

export default ManualPayment;