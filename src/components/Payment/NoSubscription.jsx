const NoSubscription = ({ createOrder, loading }) => {
  return (
    <>
      <p>You do not seem to have any active subscription</p>
      <h2>Start a subscription to use Curate</h2>
      <button 
        onClick={() => createOrder()} 
        disabled={loading}
      >
        {loading ? 'Payment in progress...' : 'Pay now'}
      </button>
    </>
  )
}

export default NoSubscription;